import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import Image from "../components/Image";

const AllPosts = () => {
  const current_user = localStorage.getItem('username')
  const [successMessageForPost, setSuccessMessageForPost] = useState(localStorage.getItem("successMessage"));
  const [backEndUsers,setBackEndUsers] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:3000/allpost')
      .then(response => response.json())
      .then(data => {
        setBackEndUsers(data.all_post)
      })

    // Remove the success message from localStorage after 5 seconds
    const timer = setTimeout(() => {
      setSuccessMessageForPost(null);
      localStorage.removeItem("successMessageForPost");
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {current_user ? (
        <div className="">
          {successMessageForPost && (
            <div className="success-message mx-auto flex justify-center mt-0 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
              {successMessageForPost}
            </div>
          )}
          <div class="flex flex-col items-center justify-center bg-gray-100 py-8">
            <div class="container mx-auto">
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {typeof backEndUsers === 'undefined' ? (
              <p>Loading...</p>
            ) : (
              backEndUsers.map((post, i) => (
                <div className="m-10" key={i}>
                  {post.title && (
                    <Image title={post.title.replace(/\s+/g, '')} author={post.author.replace(/\s+/g, '')} />
                  )}
                  <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <strong>{post.title}</strong> 
                    </p>
                    <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                      <strong>{post.category}</strong> 
                    </p>
                    <p className="text-blue-400">
                      <strong>{post.author}</strong>, <strong>{" "}
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}</strong>
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                       <br /> {post.description} <br /> <br /> 
                    </p>

                    <Link
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      to={`/posts/${post._id}`}
                    >
                      Read More
                    </Link>

                    <br />
                    <br />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        </div>
        </div>
      ) : (
        "Please sign in to continue!"
      )}
    </>
  );
}

export default AllPosts;
