// lib/utils.ts
"use client";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const MotionDiv = motion.div;
export const MotionImg = motion.img;
export const MotionP = motion.p;
export const MotionH2 = motion.h2;
