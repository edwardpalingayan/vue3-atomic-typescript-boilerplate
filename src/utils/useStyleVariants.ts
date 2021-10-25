import { Variant } from "@/types/ui";

export const useStyleVariants = (variant: Variant): string => {
  switch (variant) {
    case "primary":
      return "blue";
    case "success":
      return "green";
    case "error":
      return "red";
    case "default":
      return "gray";
    default:
      return "gray";
  }
};
