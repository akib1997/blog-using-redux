import { useEffect } from "react";
import { fetchUsers } from "../actions/usersActions";
import User from "../components/User";
import { connect } from "react-redux";

function UsersPage({ dispatch, users, error, loading }) {
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUsers = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Unable to display posts...</p>;
    return users && users.map((user) => <User key={user.id} user={user} />);
  };

  return (
    <section className="px-3 py-20">
      <h1 className="text-3xl font-bold mb-6">Users page</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderUsers()}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  loading: state.users.loading,
  users: state.users.users,
  error: state.users.error,
});
export default connect(mapStateToProps)(UsersPage);
