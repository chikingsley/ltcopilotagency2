import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  showIcon?: boolean;
}

export function actionButton({ 
  variant = "primary", 
  showIcon = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-3 rounded-lg font-medium transition-colors",
        variant === "primary" && "border border-black bg-[#f0e444] text-black hover:bg-[#f0e444]/90 flex items-center",
        variant === "secondary" && "border border-[#f0e444] text-black hover:bg-[#f0e444]/10",
        className
      )}
      {...props}
    >
      {children}
      {showIcon && variant === "primary" && <ChevronRight className="ml-2" />}
    </button>
  );
}