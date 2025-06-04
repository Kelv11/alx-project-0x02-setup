import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home - Next.js App</title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Home Page</h1>

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
        </main>
      </div>
    </>
  );
};

export default HomePage;
