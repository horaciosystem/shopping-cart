export type ProductItemType = {
  id: string;
  name: string;
  description: string;
  brand: string;
  price: number;
  color: string;
  size: string;
};

export type UIBaseProps = {
  className?: string;
};

export type UIBaseThemeProps = UIBaseProps & {
  theme: "primary" | "secondary" | "tertiary" | "inverse";
};
