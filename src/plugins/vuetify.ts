/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from "vuetify";
import { md3 } from "vuetify/blueprints";
// Styles
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";

import {
  VFileUpload,
  VFileUploadDropzone,
  VFileUploadItem,
  VFileUploadList,
} from "vuetify/labs/VFileUpload";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "system",
  },
  components: {
    VFileUpload,
    VFileUploadDropzone,
    VFileUploadItem,
    VFileUploadList
  }
});
