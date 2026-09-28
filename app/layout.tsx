import AnimatedBg from "./components/AnimatedBg";
import "./styles.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-snap-type-y-mandatory">
        <AnimatedBg />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
