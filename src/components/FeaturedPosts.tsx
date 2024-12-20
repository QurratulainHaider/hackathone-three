
import { posts } from "@/constant/featured"; 
import Image from "next/image";

const FeaturedPosts = () => {
  return (
    <div className="bg-white py-16 px-8 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-500 uppercase font-semibold mb-2">Practice Advice</p>
        <h2 className="text-3xl font-bold text-gray-900">Featured Posts</h2>
        <p className="text-gray-600 mt-2">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            {/* Image Section */}
            <div className="flex center relative w-full h-64">
              <Image
                src={post.image}
                alt={post.title}
                width={post.style.width}
                height={post.style.height}
                className="rounded-t-lg object-cover"
              />
              {post.badge && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs uppercase px-2 py-1 rounded">
                  {post.badge}
                </span>
              )}
            </div>

            {/* Content Section */}
            <div className="p-4">
              <p className="text-gray-500 text-xs mb-2">Google · Trending · News</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <div className="flex items-center justify-between text-gray-500 text-xs">
                <span>{post.date}</span>
                <span>{post.comments}</span>
              </div>
            </div>

            {/* Footer Section */}
            <div className="p-4 border-t border-gray-200">
              <button className="text-blue-500 hover:underline text-sm">Learn More →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;