<template>
    <v-container>
      <Popup :popup="popup"/>
    <h2>Registration</h2>
    <v-form @submit.prevent>
        <v-col cols="8" lg="12">

      <v-text-field 
        name="Username" 
        :counter="42" 
        :rules="firstNameRules"
        label="User name" 
        v-model="user.Name"
        required
        />
      <v-text-field 
        name="phone" 
        :counter="12" 
        label="Phone" 
        v-model="user.Number"
        required
        />
      <v-text-field 
        name="mail" 
        :counter="42" 
        v-model="user.Email"
        type="mail"
        label="mail" 
        :rules="mailRules"
        required
        />
      <v-text-field 
        name="password" 
        type="password"
        label="password" 
        v-model="password"
        :rules="passwordRules"
        required
        />
            <v-btn @click="AddUser" rounded="sm" type="submit" size="large" color="success">Sign up</v-btn>
        </v-col>
    </v-form>
    </v-container>
</template>

<script setup lang="ts">
import { usePopup } from '@/composables/usePopup';
import type { User } from '@/types/user';
import { reactive, ref } from 'vue';
import Popup from './Popup.vue';
import { useAppStore } from '@/stores/app'; //TODO to useUserStore
import { fi } from 'vuetify/locale';

const useUsers = useAppStore();
const popup = usePopup();

//#region FORM
const user: User = reactive({
  Name: "",
  Number: 1,
  Email: "",
  PasswordHash: "",
})
const password = ref<string>("");

  const firstNameRules = [
    (v:string) => !!v || "first name is required",
  ]

  const passwordRules = [
    (v: string) => !!v || "Password is required",
    (v: string) => v.length <= 8 || "Password must be at least 8 characters"
  ]

  const mailRules = [
    (v: string) => !!v || 'Email is required',
    (v: string) => {
    const pattern = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
    return pattern.test(v) || 'Invalid email'
    }
  ]
//#endregion

function AddUser() {
  if (typeof(passwordRules) == "boolean" && firstNameRules && mailRules) {
    popup.showMessage("User added!", "success");
  }
  else {
    popup.showMessage("Please check your validation", "error");
  }
}


</script>