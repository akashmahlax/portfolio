const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await Blog.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single blog post
router.get('/:id', async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new blog post (protected route)
router.post('/', async (req, res) => {
  const post = new Blog({
    title: req.body.title,
    content: req.body.content,
    excerpt: req.body.excerpt,
    image: req.body.image,
  });

  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;