<template>
    <h2 text-xs-center>Login</h2>

    <v-form @submit.prevent>
        <v-col>

      <v-text-field 
        name="name" 
        :counter="42" 
        label="User name" 
        required
        />
      <v-text-field 
        name="name" 
        :counter="12" 
        label="Phone" 
        required
        />
      <v-text-field 
        name="name" 
        :counter="42" 
        type="mail"
        label="mail" 
        required
        />
      <v-text-field 
        name="name" 
        type="password"
        label="password" 
        required
        />

            <v-btn  type="submit" size="large" color="success">Sign in</v-btn>
        </v-col>
    </v-form>
</template>