import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export async function fetchUsers() {
  try {
    const resp = await axios.get(`http://localhost:4000/users`);
    return { data: resp.data }
  } catch (err) {
    console.log(err)
  }
}

export function useUsersData() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
