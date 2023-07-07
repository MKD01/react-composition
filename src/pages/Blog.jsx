import { useEffect, useRef } from "react";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import BlogLayout from "../components/BlogLayout";

export default function Blog() {
  const renderCountRef = useRef(0);

  useEffect(() => {
    /* Leave in Blog.jsx */
    renderCountRef.current += 1;
  });

  return (
    <>
      <BlogLayout>
        {/* Leave the re-render h2 in Blog.jsx */}
        <h2 className='render'>
          I have re-rendered {renderCountRef.current} times
        </h2>
        <main className='content'>
          <h1>All Posts</h1>
          {posts.map((post) => {
            return <PostCard key={post.id} content={post.content} />;
          })}
        </main>
      </BlogLayout>
    </>
  );
}
