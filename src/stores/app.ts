import { defineStore } from 'pinia'
import { ref, registerRuntimeCompiler } from 'vue'
import type { User } from '@/types/user';

//TODO create abstract class with id and etc.
export const useAppStore = defineStore('app', () => {
  const users = ref<User[]>([]);
  const maxId = ref<number>(0);

  function generateId(): number {
    maxId.value += 1;
    return maxId.value;
  }

  function addUser(user: User) {
    const newUser = {
      ...user,
      id: generateId()
    }
    users.value.push(user);
  }

  function getUserById(id: number): User | undefined {
    return users.value.find(user => user.id === id);
  }

  function updateUser(id: number, updatedData: User) {
  const index = users.value.findIndex(user => user.id === id);
  if (index !== -1) {
    updatedData.id = id;
    users.value[index] = updatedData;
    return true;
  }
  return false;
  }

  function deleteUserById(id: number) {
    const index = users.value.findIndex(user => user.id === id);
    if (id <= users.value.length) {
      users.value.splice(id, 1);
    }
  }
  return { users, addUser, deleteUserById, getUserById, updateUser };
});