// import { usePathname } from "next/navigation";
// import { ITEM_SIDEBAR } from "./constants/items";

// export   const renderMenuItem = (
//     item: (typeof ITEM_SIDEBAR)[number]["items"][number],
//     isChild: boolean = false,
//     index?: number,
//     total?: number
// ) => {
//   const pathname = usePathname();

//     const isActive = pathname === item.path;
//     const isOpen = !!openItems[item.label];
//     const isLast =
//       index !== undefined && total !== undefined && index === total - 1;

//     return (
//       <li key={item.path || item.label} className="relative">
//         <div
//           onClick={() => item.children && toggleItem(item.label)}
//           className={activeClass(isActive)}
//         >
//           {isChild && (
//             <>
//               <div
//                 className={clsx(
//                   "absolute left-0 w-0.5 bg-primary-900/50",
//                   isLast ? "h-1/2 top-0" : "h-[110%] top-0"
//                 )}
//               ></div>
//               <div
//                 className={clsx(
//                   "absolute left-0 w-3 bg-primary-900/50",
//                   isLast ? "h-0.5" : "h-[1.4]"
//                 )}
//               ></div>
//             </>
//           )}

//           <div className="flex gap-2 items-center">
//             {item.icon && (
//               <CustomIcon
//                 icon={item.icon}
//                 className={clsx({ "text-white": isActive })}
//                 size={18}
//               />
//             )}
//             {isCollapsed && <p>{item.label}</p>}
//           </div>

//           {item.children && item.children.length > 0 && (
//             <CustomIcon
//               icon={ChevronDown}
//               size={14}
//               className={clsx("text-gray-500 transition-transform", {
//                 "rotate-180": isOpen,
//               })}
//             />
//           )}
//         </div>

//         {item.children && isOpen && (
//           <ul className="ml-4 mt-1 flex flex-col gap-1">
//             {item.children.map((child, i) =>
//               renderMenuItem(child, true, i, item.children?.length)
//             )}
//           </ul>
//         )}
//       </li>
//     );
//   };
