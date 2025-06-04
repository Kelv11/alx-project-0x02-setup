import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

interface UserPost {
  id: number;
  title: string;
  content: string;
}

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userPosts, setUserPosts] = useState<UserPost[]>([]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: UserPost = {
      id: Date.now(),
      title,
      content,
    };
    setUserPosts([...userPosts, newPost]);
  };

  return (
    <>
      <Head>
        <title>Home - Next.js App</title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Home Page</h1>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add New Post
            </button>
          </div>

          {/* User Posts Section */}
          {userPosts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Your Posts
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {userPosts.map((post) => (
                  <Card
                    key={post.id}
                    title={post.title}
                    content={post.content}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Default Cards Section */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                title="Welcome to Next.js"
                content="Next.js is a powerful React framework that enables you to build fast, scalable web applications with ease."
              />
              <Card
                title="TypeScript Integration"
                content="This project demonstrates how to integrate TypeScript for better type safety and developer experience."
              />
              <Card
                title="Tailwind CSS Styling"
                content="We're using Tailwind CSS for efficient, utility-first styling that makes building responsive designs quick and easy."
              />
              <Card
                title="Component Architecture"
                content="Learn how to build reusable components that follow best practices and maintain clean, organized code."
              />
              <Card
                title="API Integration"
                content="Explore how to fetch and display data from external APIs using modern JavaScript techniques."
              />
              <Card
                title="Responsive Design"
                content="All components are built with responsive design in mind, ensuring great user experience across all devices."
              />
            </div>
          </div>
        </main>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </>
  );
};

export default HomePage;
