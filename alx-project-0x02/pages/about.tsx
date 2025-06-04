import React from "react";
import Head from "next/head";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const AboutPage: React.FC = () => {
  const handleButtonClick = (buttonType: string) => {
    alert(`You clicked the ${buttonType} button!`);
  };

  return (
    <>
      <Head>
        <title>About - Next.js App</title>
      </Head>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-6 leading-relaxed">
              This is a comprehensive Next.js application that demonstrates
              modern web development practices. We have built this project using
              TypeScript for type safety, Tailwind CSS for styling, and
              following best practices for component architecture and code
              organization.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              The application showcases various features including reusable
              components, API integration, responsive design, and interactive
              elements. Below you can see different button variations that
              demonstrate our reusable Button component.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Button Component Showcase
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Small Buttons
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    title="Small Rounded SM"
                    size="small"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick("Small Rounded SM")}
                  />
                  <Button
                    title="Small Rounded MD"
                    size="small"
                    shape="rounded-md"
                    onClick={() => handleButtonClick("Small Rounded MD")}
                  />
                  <Button
                    title="Small Rounded Full"
                    size="small"
                    shape="rounded-full"
                    onClick={() => handleButtonClick("Small Rounded Full")}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Medium Buttons
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    title="Medium Rounded SM"
                    size="medium"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick("Medium Rounded SM")}
                  />
                  <Button
                    title="Medium Rounded MD"
                    size="medium"
                    shape="rounded-md"
                    onClick={() => handleButtonClick("Medium Rounded MD")}
                  />
                  <Button
                    title="Medium Rounded Full"
                    size="medium"
                    shape="rounded-full"
                    onClick={() => handleButtonClick("Medium Rounded Full")}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Large Buttons
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button
                    title="Large Rounded SM"
                    size="large"
                    shape="rounded-sm"
                    onClick={() => handleButtonClick("Large Rounded SM")}
                  />
                  <Button
                    title="Large Rounded MD"
                    size="large"
                    shape="rounded-md"
                    onClick={() => handleButtonClick("Large Rounded MD")}
                  />
                  <Button
                    title="Large Rounded Full"
                    size="large"
                    shape="rounded-full"
                    onClick={() => handleButtonClick("Large Rounded Full")}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AboutPage;
