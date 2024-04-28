import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-[#A2EB99] text-foreground border-[1.5px] hover:bg-theme/10",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 text-white",
        outline: "border border-input hover:text-accent-foreground",
        secondary:
          "bg-[#202636] hover:bg-[#202636]/90 border-[#202636] border-[1.5px] !rounded-full text-white",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        text: "rounded-none px-0 mx-0 hover:text-accent-foreground",
        border: "border-[1px] border-foreground",
        dark: "bg-card-foreground text-white hover:bg-dark/90",
        custom: "bg-[#CBD5F2] text-foreground border-[1.5px] hover:bg-theme/10",
      },
      size: {
        default: "py-1.5 px-3",
        sm: "h-9 px-3 rounded-md",
        lg: "py-3 px-6 rounded-md",
        xl: "py-3 px-8 rounded-full",
        text: "h-auto px-0 py-0",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  icon?: LucideIcon | JSX.ElementType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      asChild = false,
      icon: Icon = undefined,
      children,
      disabled,
      isLoading,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }), {
          "flex items-center gap-2": !!Icon || !!isLoading,
        })}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
        {Icon && !isLoading && <Icon className="h-5 w-5" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
