import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export const handleNavigation = (e, targetId) => {
  e.preventDefault();
  document.getElementById(targetId)?.scrollIntoView({
    behavior: "smooth",
  });
};
