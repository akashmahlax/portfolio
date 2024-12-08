'use client';
import type { Metadata } from "next";


// Removed import of framer-motion
export default function Contact() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto"> {/* Changed from motion.div to div */}
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full p-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
