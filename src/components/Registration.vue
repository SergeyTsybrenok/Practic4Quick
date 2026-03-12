<template>
    <v-container>
    <h2>Registration</h2>
    <v-form @submit.prevent>
        <v-col cols="8" lg="12">

      <v-text-field 
        name="Username" 
        :counter="42" 
        label="User name" 
        required
        />
      <v-text-field 
        name="phone" 
        :counter="12" 
        label="Phone" 
        required
        />
      <v-text-field 
        name="mail" 
        :counter="42" 
        type="mail"
        label="mail" 
        required
        />
      <v-text-field 
        name="password" 
        type="password"
        label="password" 
        required
        />

            <v-btn  type="submit" size="large" color="success">Sign up</v-btn>
        </v-col>
    </v-form>
    </v-container>
</template>