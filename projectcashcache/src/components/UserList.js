import React from "react";
import { getUsers } from "../api/auth";
import { useQuery } from "@tanstack/react-query";
import UserItem from "./UserItem";

const UserList = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });

  const userList = users?.map((user) => (
    <UserItem user={user} key={user._id} />
  ));

  return (
    <div className="w-full flex flex-col px-4">
      <h1 className="inline-block text-lg font-bold ">Users</h1>
      <div className="">{userList}</div>
    </div>
  );
};

export default UserList;
