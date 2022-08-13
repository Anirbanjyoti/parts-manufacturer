import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Sheared/Loading";
// import UserRow from "./UserRow";


const Users = () => {
  const { data: users, isLoading } = useQuery(["user"], () =>
    fetch("http://localhost:5000/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1>Total users:{users.length} </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {/* {users?.map((user) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))} */}
            <tr>
      <th>1</th>
      <td>eerer</td>
      <td>
        <button>Make Admin</button>
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
