<template>
    <v-row>
    <v-container>
        <h1>Adminka</h1>
        <v-col lg="5">
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                name="name"
                :counter="42"
                label="Product name"
                required
            ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="4"
            >
            <v-textarea
                label="description"
                name="description"
            ></v-textarea>
            </v-col>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                name="price"
                :counter="10"
                v-model="price"
                label="Price"
                required
            ></v-text-field>
            </v-col>
            <v-col
            cols="12"
            md="4"
            >
            <v-text-field
                name="url"
                label="Url image"
                :rules="urlRules"
                required
            ></v-text-field>
            </v-col>
        </v-col>
    </v-container>
    </v-row>


</template>
  <!-- id: number;
  name: string;
  price: number;
  imageLink: string; -->
<script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      url: '',
      urlRules: [
        value => {
          if (value) return true

          return 'Url is required.'
        },
        value => {
          if (/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/.test(value)) return true

          return 'Url must be valid.'
        },
      ],
      description: "",
      price: 1000,
    }),
  }
</script>