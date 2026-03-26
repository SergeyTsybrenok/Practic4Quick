<template>
<v-container>

  <v-row>
    <h2 class="text-center"></h2>
    
    <v-col cols="12" md="5">
      <h2>Json editor</h2>
    </v-col>
    <v-file-upload title="Drag and drop Json Here"></v-file-upload>
  </v-row>
</v-container>


</template>
<script setup lang="ts">
import { usePopup } from '@/composables/usePopup';

const popup = usePopup();

</script>