import { ArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "destructive" | "destructive-outline";
  showIcon?: boolean;
}

export function actionButton({ 
  variant = "primary", 
  showIcon = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyle = "inline-flex items-center px-6 py-3 text-sm font-medium rounded-lg transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-[hsl(var(--primary))] text-black hover:opacity-50",
    secondary: "bg-background text-foreground border border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/10] dark:hover:bg-primary/20",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    "destructive-outline": "bg-background text-destructive border border-destructive hover:bg-destructive/10"
  };

  return (
    <button
      className={twMerge(baseStyle, variantStyles[variant], className)}
      {...props}
    >
      {children}
      {showIcon && <ArrowRight className="ml-2 h-4 w-4" />}
    </button>
  );
}