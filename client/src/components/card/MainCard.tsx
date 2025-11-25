"use client";
import { useTheme } from "@/context/ThemeContext";
import clsx from "clsx";
import { ImageOff, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import CustomButton from "../ui/customButton";
import { CustomIcon } from "../ui/customIcon";
import Colors from "./colors";
import Size from "./size";
import { Props } from "./types/Props";

const MainCard = ({
  title,
  img,
  isNew,
  pints,
  price,
  moneda,
  category,
  labelButton = "Comprar",
  variants,
  ...buttonProps
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  const { theme } = useTheme();

  const CardMainClass = clsx(
    "rounded-3xl p-4 flex flex-col gap-2 flex-1 min-w-[280px] max-w-[320px] border  ",
    {
      "bg-background-light-300/10  ": theme === "LIGHT",
      "bg-background-dark-300 ": theme === "DARK",
      "border-gray-300": isHover && theme === "LIGHT",
      "border-white/20": isHover && theme === "DARK",
      "border-gray-200": !isHover && theme === "LIGHT",
      "border-white/10": !isHover && theme === "DARK",
    }
  );

  const uniqueColors = Array.from(
    new Map(variants.map((v) => [v.color, v])).values()
  );
  const maxColors = 4;
  const showMore = uniqueColors.length > maxColors;
  const displayedColors = showMore
    ? uniqueColors.slice(0, maxColors - 1)
    : uniqueColors.slice(0, maxColors);
  const remaining = uniqueColors.length - displayedColors.length;

  const ColorsContainerClass = clsx(
    "absolute bottom-0 right-0  overflow-hidden rounded-tl-2xl flex items-center ",
    {
      "bg-white/80": theme === "LIGHT",
      "bg-black/80": theme === "DARK",
    }
  );
  const ImageSectionClass = clsx(
    " relative  aspect-6/5  rounded-xl overflow-hidden ",
    {
      "bg-background-light-300 border border-gray-200": theme === "LIGHT",
      "bg-background-dark-300 ": theme === "DARK",
    }
  );
  const TitleClass = clsx(
    "text-sm font-semibold flex items-center justify-between gap-1",
    {
      "text-gray-600": theme === "LIGHT",
      "text-white/70": theme === "DARK",
    }
  );
  const CategoryClass = clsx("text-xs font-semibold", {
    "text-gray-600": theme === "LIGHT",
    "text-white/50 text-xs font-light": theme === "DARK",
  });

  return (
    <article
      className={CardMainClass}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <section className={ImageSectionClass}>
        {isNew && (
          <span className="absolute top-2  left-2 bg-red-100 border border-red-200 text-red-500 text-xs font-semibold px-2 py-1 rounded-xl">
            Nuevo
          </span>
        )}
        {img ? (
          <img src={img} alt={title} className="w-full h-full object-contain" />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <CustomIcon
              icon={ImageOff}
              size={32}
              color={theme === "LIGHT" ? "#AFB2B0" : "#9DA0A5"}
            />
          </div>
        )}

        <section className={ColorsContainerClass}>
          {displayedColors.map((variant) => (
            <Colors key={variant.color} {...variant} />
          ))}
          {remaining > 0 && (
            <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-600 text-[10px] flex items-center justify-center font-bold">
              +{remaining}
            </div>
          )}
        </section>
      </section>

      <section className="flex justify-between gap-2">
        <span className="text-xs ">Size:</span>
        <div className="flex flex-wrap gap-2">
          {Array.from(new Set(variants.map((v) => v.size))).map((size) => {
            const variant = variants.find((v) => v.size === size);
            return variant ? <Size key={size} {...variant} /> : null;
          })}
        </div>
      </section>
      <p className={CategoryClass}>{category}</p>
      <p className={TitleClass}>
        {title}
        <p className="flex items-center gap-1 text-xs font-light ">
          {pints}
          <CustomIcon icon={Star} className="text-yellow-500" size={16} />{" "}
        </p>
      </p>

      <div className="flex justify-between items-center">
        <p className="text-xl font-medium">
          {moneda} {price}
        </p>
        <CustomButton
          label={labelButton}
          onClick={buttonProps.onClick}
          disabled={buttonProps.disabled}
          icon={buttonProps.icon ?? ShoppingCart}
          size={buttonProps.size}
          variant={buttonProps.variant ?? "tertiary"}
        />
      </div>
    </article>
  );
};

export default MainCard;
