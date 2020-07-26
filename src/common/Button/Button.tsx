import React from "react";
import { Button as ReakitButton, ButtonProps } from "reakit";
import { UIBaseThemeProps } from "src/lib/types";

type Size = "sm" | "md" | "lg";

type Props = ButtonProps &
  UIBaseThemeProps & {
    active?: Boolean;
    size?: Size;
  };

type Ref = HTMLButtonElement;

const Button = React.forwardRef<Ref, Props>(
  ({ size = "md", theme = "primary", className, active, ...props }, ref) => {
    const paddingStyles = {
      sm: "is-sm",
      md: "is-md",
      lg: "is-lg",
    }[size];

    const colorStyles = {
      primary: "is-primary",
      secondary: "is-secondary",
      tertiary: "is-tertiary",
      inverse: active ? "is-secondary" : "is-inverse",
    }[theme];

    return (
      <ReakitButton
        ref={ref}
        type="button"
        className={`btn action ${colorStyles} ${paddingStyles} ${className}`}
        {...props}
      />
    );
  }
);
export default Button;
