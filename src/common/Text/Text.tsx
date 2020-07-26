import React from "react";
import { Box } from "reakit";
import { UIBaseProps } from "src/lib/types";

/**
 *     font-size  line-height
 * lg: 36px/48px  1.3
 * md: 24px/36px  1.3
 * sm: 20px/24px  1.4/1.3
 *
 */

type Size = "sm" | "md" | "lg";

type HeadingProps = UIBaseProps & {
  size?: Size;
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
};

export const Heading: React.FC<HeadingProps> = ({
  size = "lg",
  className,
  ...props
}) => {
  const styles = {
    lg: "leading-snug text-4xl md:text-5xl font-bold",
    md: "leading-snug text-2xl md:text-4xl font-bold",
    sm: "leading-custom text-xl md:leading-snug md:text-2xl font-semibold",
  }[size];

  return (
    <Box as="h1" className={`break-words ${styles} ${className}`} {...props} />
  );
};

/**
 *
 *     font-size  line-height
 * lg: 20px/24px  1.5/1.4
 * md: 16px/20px  1.5/1.4
 * sm: 14px/16px  1.5
 */
type TextProps = UIBaseProps & {
  size?: Size;
  as?: any;
};

export const Text: React.FC<TextProps> = ({
  size = "md",
  className,
  ...props
}) => {
  const styles = {
    lg: "leading-normal text-xl md:leading-custom md:text-2xl",
    md: "text-base leading-normal md:text-xl md:leading-custom",
    sm: "text-sm leading-normal md:text-base",
  }[size];

  return (
    <Box
      as="span"
      className={`break-words ${styles} ${className}`}
      {...props}
    />
  );
};
