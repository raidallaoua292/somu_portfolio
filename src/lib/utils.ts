import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import data from "@/data/data.json"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const fetchData = async () => {
  return data
}

export { fetchData }

