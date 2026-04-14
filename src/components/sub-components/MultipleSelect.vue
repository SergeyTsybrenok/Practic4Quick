<template>
      <v-select
        :min-width="width"
        :max-width="width"
        :v-model="model"
        :items="items"
        :label="label"
        multiple
      >
        <template v-slot:selection="{ item, index }">
          <v-chip v-if="index < 2" :text="item"></v-chip>

          <span
            v-if="index === 2"
            class="text-grey text-body-small align-self-center"
          >
            (+{{ model.length - 2 }} others)
          </span>
        </template>
      </v-select>
</template>

<script setup lang="ts">
const props = defineProps<{
  model: any,
  items: any[],
  width: number,
  label: string
}>();
</script>