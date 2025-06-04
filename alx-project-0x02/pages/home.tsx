import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home - Next.js App</title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Home Page</h1>
          <p className="text-gray-600">
            Welcome to the home page of our Next.js application.
          </p>
        </main>
      </div>
    </>
  );
};

export default HomePage;
