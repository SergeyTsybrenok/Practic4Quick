<template>
    <h2>Login</h2>

      <v-text-field 
        name="Username" 
        :counter="42" 
        label="User name" 
        required
        />
      <v-text-field 
        name="password" 
        type="password"
        label="password" 
        required
        />
        <v-btn  type="submit" size="large" color="success">Sign in</v-btn>
</template>