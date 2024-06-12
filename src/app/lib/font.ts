import { Roboto } from "next/font/google";
import { Archivo_Black } from "next/font/google";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"], weight: "400" });

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "900"],
});

export const archivo = Archivo_Black({ subsets: ["latin"], weight: "400" });
