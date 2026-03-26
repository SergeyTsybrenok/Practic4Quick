<template>
<v-container>

  <v-row>
    <h2 class="text-center"></h2>
    
    <v-col cols="12" md="5">
      <h2>Json data</h2>
    </v-col>
    <!-- TODO load data from json -->
    <!-- <v-file-upload htitle="Drag and drop Json Here"></v-file-upload> -->
     <button @click="ExampleDownload()">Download current data</button>
  </v-row>
</v-container>


</template>
<script setup lang="ts">
import { usePopup } from '@/composables/usePopup';
import { useAppStore } from '@/stores/app';
import { useProductStore } from '@/stores/useProductStore';
import { downloadObjectAsJSONFile } from '@/tools/downloadObjectAsJson';

const users = useAppStore();
const products = useProductStore();

function ExampleDownload() {
  const saveData: object = {
    users: users,
    products: products,
  }
  downloadObjectAsJSONFile(saveData, new Date().toLocaleTimeString());
  popup.showMessage("Data was downloaded", "success");
}

const popup = usePopup();

</script>