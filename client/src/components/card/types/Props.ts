import { PropsButton } from "@/components/ui/customButton";

export interface ProductVariant {
  color: string;
  size: string;
  stock: number;
}

export interface Props extends PropsButton {
  img: string;
  title: string;
  category: string;
  pints: number;
  price: number;
  isNew: boolean;
  moneda: string;
  labelButton?: string;
  variants: ProductVariant[];
}
