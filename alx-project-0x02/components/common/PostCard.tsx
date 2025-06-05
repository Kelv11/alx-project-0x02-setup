import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-3">
        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
          Post #{id}
        </span>
        <span className="text-sm text-blue-600 font-medium">User {userId}</span>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
        {title}
      </h3>

      <p className="text-gray-600 leading-relaxed">{body}</p>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Read more →</span>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
