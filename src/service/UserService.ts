import axios from "axios";
import type User from "@/model/User";

class UserService {

  fetchUsers(): Promise<User[]> {
    return axios.get('http://localhost:3000/admin/users', { headers: {
      Authorization: localStorage.getItem("accessToken")
    }})
    .then(response => {
      const users = response.data.users as User[];

      return users;
    })
    .catch(error => {
      console.error(error);
      return [];
    })
  }


}

export const userService = new UserService();