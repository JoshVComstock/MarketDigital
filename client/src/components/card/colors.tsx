import { ProductVariant } from "./types/Props";

const Colors = ({ color, stock }: ProductVariant) => {
  if (stock > 0) {
    return (
      <div
        className="min-w-8  min-h-8 max-w-12 max-h-12"
        style={{ backgroundColor: color }}
      />
    );
  }
  return null;
};

export default Colors;
