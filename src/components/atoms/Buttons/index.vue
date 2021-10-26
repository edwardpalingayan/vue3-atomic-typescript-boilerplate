<template>
  <button
    :class="[defaultClassNames, classNames]"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
/* eslint-disable no-unused-vars */
import { defineProps, withDefaults, computed, defineEmits } from "vue";
import { ButtonType, Size, Variant } from "@/types/ui";
import { useStyleVariants } from "@/utils/useStyleVariants";

interface AtomButtonProps {
  block?: boolean;
  disabled?: boolean;
  elevated?: boolean;
  outlined?: boolean;
  label: string;
  round?: boolean;
  size?: Size;
  type?: ButtonType;
  variant?: Variant;
}

const props = withDefaults(defineProps<AtomButtonProps>(), {
  block: false,
  disabled: false,
  elevated: false,
  outlined: false,
  label: "Button",
  round: true,
  size: "base",
  type: "button",
  variant: "default",
});

const defaultClassNames = computed(
  () => `text-${props.size} text-white font-bold py-2 px-4`
);
const variantColor = computed(() => useStyleVariants(props.variant));
const classNames = computed(() => ({
  "w-full": props.block,
  "opacity-50 cursor-not-allowed": props.disabled,
  [`hover:bg-${variantColor.value}-500 hover:text-white`]: !props.disabled,
  "shadow-lg": props.elevated,
  rounded: props.round,
  [`bg-${variantColor.value}-300`]: !props.outlined,
  [`bg-transparent hover:bg-${variantColor.value}-300 text-${variantColor.value}-500 font-semibold hover:text-white border border-${variantColor.value}-300 hover:border-transparent`]:
    props.outlined,
}));
const emit = defineEmits(["click"]);
const handleClick = () => emit("click");
</script>

<style scoped></style>
