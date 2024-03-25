import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserByMail = async function (mail) {
  const users = await axios.get(`http://localhost:4000/users`);
  const user = users.data?.find((user) => user.email === mail);
console.log(user)
  return user;
};

const fetchCoursesByUser = async function (user) {
  const channels = await axios.get(`http://localhost:4000/channels`);
  const chanel = channels.data?.find((chanel) => chanel.user === user);
  return chanel.courses;
};

function DependentQueries({ email }) {
  const { data: user } = useQuery({
    queryKey: ["user", email],
    queryFn: () => fetchUserByMail(email),
  });

  const channelUser = user?.username;

  const { data: courses } = useQuery({
    queryKey: ["courses", channelUser],
    queryFn: () => fetchCoursesByUser(channelUser),
    enabled: !!channelUser,
    // Double negation converts truthy values to the true Boolean and falsy values to the false Boolean.
  });

  const courseElements = courses?.map((course, i) => {
    return <li key={i}>{course}</li>;
  });

  return (
    <div>
      <h2>Courses</h2>
      <ul>{courseElements}</ul>
    </div>
  );
}

export default DependentQueries;
