import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Posts - Next.js App</title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts</h1>
          <p className="text-gray-600">
            This page will display posts fetched from an external API.
          </p>
        </main>
      </div>
    </>
  );
};

export default PostsPage;
