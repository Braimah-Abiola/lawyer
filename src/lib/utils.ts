import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Comprehensive Legal Services | Expert Attorneys at Your Service",
  description = "Discover top-tier legal solutions tailored to your needs. Our experienced attorneys provide expert representation in various legal fields, ensuring your rights are protected and your interests are effectively advocated.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = true,
}: {
  title?: string;
  description?: string;
  verification?: { google: string; "data-rh": boolean };
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@Ph.Careers",
    },
    icons,
    metadataBase:
      new URL("https://www.andyharrison.online/") ||
      new URL("https://andyharrison.online/"),
    themeColor: "#FFF",
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}
