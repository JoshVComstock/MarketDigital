"use client";

import clsx from "clsx";
import CustomButton, { PropsButton } from "./customButton";

import { Ban, Lock, ShoppingCart } from "lucide-react";
import { CustomIcon } from "../icons/icon";
import { useState } from "react";

interface ProductVariant {
  color: string;
  size: string;
  stock: number;
}

interface Props extends PropsButton {
  img: string;
  title: string;
  category: string;
  pints: string;
  price: number;
  isNew: boolean;
  moneda: string;
  labelButton?: string;
  variants: ProductVariant[];
}

export const CustomCard = ({
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
  const [hover, setHover] = useState(false);

  const BaseClass = clsx(
    "rounded-3xl bg-gray-50 border-2 border-white p-4 flex flex-col gap-2 flex-1 min-w-[280px] max-w-[320px] hover:shadow-xl"
  );

  return (
    <article
      className={BaseClass}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <section className=" relative  aspect-4/3  rounded-xl overflow-hidden bg-gray-100">
        {isNew && (
          <span className="absolute top-2  left-2 bg-red-100 border border-red-200 text-red-500 text-xs font-semibold px-2 py-1 rounded-xl">
            Nuevo
          </span>
        )}
        <img src={img} alt={title} className="w-full h-full object-contain" />

        <section className="flex flex-wrap   absolute bottom-0 right-0 border-2 border-white rounded-tl-xl overflow-hidden">
          {Array.from(new Set(variants.map((v) => v.color))).map((color) => {
            const hasStock = variants.some(
              (v) => v.color === color && v.stock > 0
            );
            return (
              <div key={color} className="relative">
                <button
                  disabled={!hasStock}
                  style={{ backgroundColor: color }}
                  className={clsx(
                    " w-8 h-8 flex justify-center items-center transition-all",
                    hasStock ? "hover:scale-110" : " cursor-not-allowed "
                  )}
                >
                  {!hasStock && (
                    <CustomIcon icon={Ban} className="opacity-35" />
                  )}
                </button>
              </div>
            );
          })}
        </section>
      </section>

      <section>
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-gray-400">{category}</p>
      </section>

      <section className="">
        <article className="flex justify-between items-center">
          <p>Tamaños </p>
          <section className="flex flex-wrap gap-2 ">
            {Array.from(new Set(variants.map((v) => v.size))).map((size) => {
              const hasStock = variants.some(
                (v) => v.size === size && v.stock > 0
              );

              return (
                <div key={size} className="relative ">
                  <button
                    disabled={!hasStock}
                    className={clsx(
                      "text-xs border border-gray-300 rounded-md w-7 h-7 transition-all self-end",
                      hasStock
                        ? "text-gray-700 hover:bg-gray-100"
                        : "text-gray-400 opacity-50 cursor-not-allowed line-through"
                    )}
                  >
                    {size}
                  </button>
                </div>
              );
            })}
          </section>
        </article>

        <div className="flex justify-between items-center mt-3">
          <p className="text-primary-900 font-semibold text-xl">
            <span>{moneda}</span> {price}
          </p>

          <CustomButton
            label={labelButton}
            variant={hover ? "primary" : "tertiary"}
            {...buttonProps}
            icon={ShoppingCart}
          />
        </div>
      </section>
    </article>
  );
};
