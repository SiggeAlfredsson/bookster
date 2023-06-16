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
  promoteUser(username: string): Promise<User[]> {
    return axios.put('http://localhost:3000/admin/users', {
    username: username,
    }, { headers: {
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
  registerUser(username: string, password: string) {
    return axios.post("http://localhost:3000/auth/register", {
      username: username,
      password: password
    })
    .then(response => {

    })
    .catch(error => {
      console.error(error)
    })

  }
  loginUser(username: string, password: string) {
    return axios.post("http://localhost:3000/auth/login", {
      username: username,
      password: password
    })
    .then(response => {
      const accessToken = response.data.accessToken;
      return accessToken;
    })
    .catch(error => {
      console.error(error);
      return [];
    })}

    //http://localhost:3000/admin/users

    deleteUser(username: string) {
      return axios.delete("http://localhost:3000/admin/users", {
        headers: {
          Authorization: localStorage.getItem("accessToken")
        },
        data: {
          username: username
        }
      })
    .then (response => {
      const users = response.data.context.users as User[];

      return users;
    })
    .catch(error => {
      console.error(error);
      return [];
    })
    }



}

export const userService = new UserService();