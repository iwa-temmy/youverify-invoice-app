import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatErrors = (error: string) => {
  switch (error) {
    case "EMAIL_EXISTS":
      return "Email already exists";
    case "auth/invalid-credential":
      return "Invalid login credentials";
    case "auth/invalid-email":
      return "Invalid login credentials";
    default:
      return (
        error ||
        "An error occurred while trying to carry out this action, please try again later"
      );
  }
};

export const formatAmount = (
  num: string | undefined,
  showDecimals: boolean = true
): string => {
  if (num === null || num === undefined) {
    throw new Error("num cannot be null or undefined");
  }

  try {
    const initial = parseFloat(num);
    if (isNaN(initial)) {
      throw new Error("num is not a number");
    }
    return initial.toLocaleString("en-US", {
      minimumFractionDigits: showDecimals ? 2 : 0,
      maximumFractionDigits: showDecimals ? 2 : 0,
    });
  } catch (error) {
    console.error("Error formatting amount:", error);
    return "NaN";
  }
};
