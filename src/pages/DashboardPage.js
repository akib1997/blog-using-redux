import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => (
  <section>
    <h1>Dashboard</h1>
    <p>This is the dashboard.</p>

    <Link to="/posts" className="block bg-blue-500 text-white px-4 py-1">
      View Posts
    </Link>
    <Link to="/users" className="block bg-blue-500 text-white px-4 py-1">
      View users
    </Link>
  </section>
);

export default DashboardPage;
