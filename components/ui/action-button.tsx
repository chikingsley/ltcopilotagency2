import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, forwardRef, ForwardRefRenderFunction, ReactNode, Ref, useLayoutEffect, useState } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "destructiveoutline" | "success" | "successoutline";
  showIcon?: boolean;
}

const actionButton: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { 
    variant = "primary", 
    showIcon = false,
    className,
    children,
    ...props
  }: ButtonProps, ref: Ref<HTMLButtonElement>
) => {
  const baseStyle = "inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-[hsl(var(--primary))] text-black hover:opacity-50",
    secondary: "bg-background text-foreground border border-[hsl(var(--primary))] hover:bg-primary dark:hover:bg-primary/20",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    destructiveoutline: "bg-background text-destructive border border-destructive hover:bg-primary hover:text-black hover:border-black",
    success: "bg-[hsl(var(--success))] border text-black hover:text-[hsl(var(--success-foreground))] hover:bg-[hsl(var(--success))]/90 hover:text-white hover:border-black",
    successoutline: "bg-background text-[hsl(var(--success))] border border-[hsl(var(--success))] hover:bg-[hsl(var(--success))] hover:text-[hsl(var(--success-foreground))]"
  };

  return (
    <button
      className={twMerge(baseStyle, variantStyles[variant], className)}
      ref={ref}
      {...props}
    >
      {children}
      {showIcon && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
};

export const ActionButton = forwardRef(actionButton);