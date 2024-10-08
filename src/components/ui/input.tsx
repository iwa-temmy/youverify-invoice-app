import * as React from "react";

import { cn } from "@/lib/utils";
import Icon from "../icon";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, name, type, error, label, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
      <div>
        <label className="px-1 text-sm md:text-base font-medium" htmlFor={name}>
          {label}
        </label>
        <div className="w-full relative">
          <input
            type={showPassword && type === "password" ? "text" : type}
            className={cn(
              "flex h-14 w-full rounded-md border border-neutral-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
              className
            )}
            name={name}
            ref={ref}
            {...props}
          />
          {type === "password" && (
            <button
              className="absolute right-4 top-5"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Icon
                className="text-[#949292]"
                icon={showPassword ? "lucide:eyeOff" : "lucide:eye"}
              />
            </button>
          )}
        </div>
        {error ? <small className="text-red">{error}</small> : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
