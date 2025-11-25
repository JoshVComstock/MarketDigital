// "use client";

// import clsx from "clsx";
// import CustomButton, { PropsButton } from "./customButton";

// import { Ban, Lock, ShoppingCart } from "lucide-react";
// import { useState } from "react";
// import { CustomIcon } from "./customIcon";
// import { useTheme } from "@/context/ThemeContext";
// import { Props } from "../card/types/Props";
// import Size from "../card/size";

// export const CustomCard = ({
//   title,
//   img,
//   isNew,
//   pints,
//   price,
//   moneda,
//   category,
//   labelButton = "Comprar",
//   variants,
//   ...buttonProps
// }: Props) => {
//   const [hover, setHover] = useState(false);
//   const { theme } = useTheme();

//   const CardMainClass = clsx(
//     "rounded-3xl p-4 flex flex-col gap-2 flex-1 min-w-[280px] max-w-[320px] hover:shadow-xl",
//     {
//       "bg-background-light-300 border border-background-light-300":
//         theme === "LIGHT",
//       "bg-background-dark-300 border border-white/10": theme === "DARK",
//     }
//   );

//   const ColorsClass = clsx(
//     "w-8 h-8 flex justify-center items-center absolute bottom-0 right-0",
//     {
//       "": theme === "LIGHT",
//       "": theme === "DARK",
//     }
//   );

//   return (

//   );
// };
