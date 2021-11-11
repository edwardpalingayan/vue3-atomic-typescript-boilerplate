<template>
  <div class="border-t border-b px-4 py-3" :class="[classNames]" role="alert">
    <p class="font-bold">{{ title }}</p>
    <p class="text-sm">{{ contents }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue";
import { Variant } from "@/types/ui";
import { useStyleVariants } from "@/utils/useStyleVariants";

interface AtomAlertProps {
  title: string;
  contents: string;
  variant?: Variant;
}
const props = withDefaults(defineProps<AtomAlertProps>(), {
  variant: "success",
});
const variantColor = computed(() => useStyleVariants(props.variant));
const classNames = computed(
  () => `bg-${variantColor.value}-100 border-${variantColor.value}-500 text-${variantColor.value}-700`
);
</script>
