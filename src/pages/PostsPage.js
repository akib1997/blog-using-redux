import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Bring in the asynchronous fetchPosts action
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPosts = () => {
    if (loading) return <p>Loading...</p>;
    if (hasErrors) return <p>Unable to display posts...</p>;
    return posts.map((post) => <Post key={post.id} post={post} />);
  };

  // console.log(posts);

  return (
    <section className="px-3 py-20">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <Link to="/" className="block bg-blue-500 text-white px-4 py-1 mb-4">
        Home
      </Link>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderPosts()}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
});

export default connect(mapStateToProps)(PostsPage);
