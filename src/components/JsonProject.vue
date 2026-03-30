<template>
  <v-container>
    <v-row>
      <h2 class="text-center"></h2>

      <v-col md="4">
        <h2>Json data</h2>
        <div>
          Use default.json in project directory to load default parameters
        </div>
        <br />
        <span>Or</span>

        <div>
          <v-file-input
            label="Drag and Drop .json here"
            prepend-icon="mdi-database-import"
            accept=".json"
            v-model="Files"
          ></v-file-input>
          <v-btn :disabled="!Files" @click="loadData()" color="info"
            >Load</v-btn
          >
        </div>
        <v-btn @click="ExampleDownload()">Download current data</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { usePopup } from "@/composables/usePopup";
import { useAppStore } from "@/stores/app";
import { useProductStore } from "@/stores/useProductStore";
import { downloadObjectAsJSONFile } from "@/tools/downloadObjectAsJson";
import { computed, ref, watch } from "vue";
import { useRules } from "vuetify/labs/rules";

const useUsers = useAppStore();
const products = useProductStore();

function ExampleDownload() {
  const saveData: object = {
    users: useUsers.$state,
    products: products.$state,
  };
  downloadObjectAsJSONFile(saveData, new Date().toLocaleTimeString());
  popup.showMessage("Data was downloaded", "success");
}

const popup = usePopup();

const Files = ref();
const jsonFiles = ref();

// use watch because computed not support await
watch(Files, async (newFile) => {
  if (!newFile) {
    jsonFiles.value = null;
    return;
  }

  try {
    const file = Array.isArray(newFile) ? newFile[0] : newFile;

    const text = await file.text(); // await here is important

    jsonFiles.value = JSON.parse(text);
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    popup.showMessage("Invalid JSON format", "error");
    jsonFiles.value = null;
  }
});

function loadData() {
  if (!jsonFiles) return;

  try {
    // TODO переместить в общую штуку для сохранения
    useUsers.loadStoreData(jsonFiles.value.users);
    products.loadStoreData(jsonFiles.value.products);

    popup.showMessage("Data loaded into stores!", "success");
  } catch (error) {
    console.log("Error updating stores:", error);
    popup.showMessage("Failed load data", "error");
  }
}
</script>