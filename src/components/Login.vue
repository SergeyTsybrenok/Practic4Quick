<template>
  <h2>Login</h2>

  <v-text-field
    name="login"
    :counter="42"
    label="Login"
    v-model="loginVariables.login"
    required
  />
  <v-text-field
    name="password"
    type="password"
    label="Password"
    v-model="loginVariables.password"
    required
  />
  <v-btn @click="tryLogin" type="submit" size="large" color="success"
    >Sign in</v-btn
  >
</template>

<script setup lang="ts">
import { usePopup } from '@/composables/usePopup';
import { useAppStore } from '@/stores/app';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const useUsers = useAppStore();
const popup = usePopup();
const router = useRouter();

const loginVariables = reactive({
  login: "",
  password: ""
});

function tryLogin() {
  if (useUsers.tryLogin(loginVariables.login, loginVariables.password)) {
    popup.showMessage(`Login in account: ${loginVariables.login} ${useUsers.tryLogin(loginVariables.login, loginVariables.password)}`)

    const stringify = JSON.stringify(useUsers.users);
    const blob = new Blob([stringify], { type: "application/json;charset=utf-8;" });


    router.push({
    name: "user-account",
    params: { login: useUsers.currentUser?.Login }
  })
  }
  else{
    popup.showMessage("Login or password is incorrect, try again", "error");
  }
}
</script>
