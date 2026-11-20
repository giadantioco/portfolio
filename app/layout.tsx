import { AnimatedBg } from "@/components/AnimatedBg";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://giadaantioco.it"),
  title: "Giada Antioco Portfolio",
  description: "Built with Next.js, React, TypeScript and Tailwind CSS.",
  openGraph: {
    title: "Giada Antioco Portfolio",
    description: "Built with Next.js, React, TypeScript and Tailwind CSS.",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-snap-type-y-mandatory antialiased">
        <AnimatedBg />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
