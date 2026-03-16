import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "@/types/user";

//TODO create abstract class with id and etc.
export const useAppStore = defineStore("app", () => {
  const users = ref<User[]>([]);
  const maxId = ref<number>(0);
  let currentUser = ref<User>();

  function checkLoginUniq(login:string): boolean {
    return users.value.some((user) => user.Login === login); //TODO remove double check
  }

  function tryLogin(login: string, password: string) {
    if (checkLoginUniq(login)) { //TODO remove double check
      currentUser.value = users.value.find((user) => user.Login === login); // TODO remove double check
      return true
    }
    else {
      return false
    }
  }

  function checkCurrentUser(): boolean {
    // return currentUser.value ? true : false
    return !!currentUser.value //another version
  }

  function logout() {
    currentUser.value = undefined;
  }

  function generateId(): number {
    maxId.value += 1;
    return maxId.value;
  }

  function addUser(user: User) {
    const newUser = {
      ...user,
      id: generateId(),
    };
    users.value.push(newUser);
  }

  function getUserById(id: number): User | undefined {
    return users.value.find((user) => user.id === id);
  }

  function updateUser(id: number, updatedData: User) {
    console.log(updateUser);
    
    const index = users.value.findIndex((user) => user.id === id);
    if (index !== -1) {
      updatedData.id = id;
      users.value[index] = updatedData;
      return true;
    }
    return false;
  }

  function deleteUserById(id: number) {
    console.log("User deleted");
    
    const index = users.value.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.value.splice(index, 1);
    }
  }

  return { users, currentUser, addUser, deleteUserById, getUserById, updateUser, checkCurrentUser, tryLogin, logout };
  // TODO incapsulate currentUser
});