<template>
  <v-snackbar
    v-model="popup.snackbar.value.show"
    :color="popup.snackbar.value.color"
    timeout="3000"
    location="top"
  >
    {{ popup.snackbar.value.text }}

    <template v-slot:actions>
      <v-btn
        color="white"
        variant="text"
        @click="popup.snackbar.value.show = false"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import type { Ref } from "vue";

const props = defineProps<{
  popup: {
    snackbar: Ref<{
      show: boolean;
      text: string;
      color: "success" | "error" | "info" | "warning";
    }>;
    showMessage: (
      message: string,
      color: "success" | "error" | "info" | "warning",
    ) => void;
    hideMessage: () => void;
  };
}>();
</script>