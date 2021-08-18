import React from "react";

function User({ user }) {
  console.log(user);
  const { name, email, id, username, address } = user;
  const { city, street, zipcode, suite, geo } = address;
  const { lat, lng } = geo;

  return (
    <div className="bg-blue-200 p-2">
      <p className="text-2xl"> Name: {name} </p>
      <p className="text-lg"> {email} </p>
      <p className="text-lg"> {id} </p>
      <p className="text-lg"> {username} </p>
      <p className="text-lg"> {city} </p>
      <p className="text-lg"> {street} </p>
      <p className="text-lg"> {zipcode} </p>
      <p className="text-lg"> {suite} </p>
      <p className="text-lg"> {lat} </p>
      <p className="text-lg"> {lng} </p>
    </div>
  );
}

export default User;
