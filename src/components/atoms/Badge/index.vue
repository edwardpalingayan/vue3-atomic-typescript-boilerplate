<template>
  <span
    class="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
    :class="[classNames]"
  >
    {{ label }}
  </span>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from "vue";
import { Variant } from "@/types/ui";
import { useStyleVariants } from "@/utils/useStyleVariants";

interface AtomBadgeProps {
  label: string;
  variant?: Variant;
}
const props = withDefaults(defineProps<AtomBadgeProps>(), {
  variant: "default",
});
const variantColor = computed(() => useStyleVariants(props.variant));
const classNames = computed(
  () => `bg-${variantColor.value}-200 text-${variantColor.value}-700`
);
</script>
