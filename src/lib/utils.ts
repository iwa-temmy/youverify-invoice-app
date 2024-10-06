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
