'use client';
import { motion } from "@motionone/dom";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js",
    date: "2024-03-20",
    slug: "getting-started-nextjs"
  },
  // Add more blog posts
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-gray-400 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{post.date}</span>
                <a href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-400">
                  Read more →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}