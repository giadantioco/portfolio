import AnimatedBg from "./components/AnimatedBg";
import "./index.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AnimatedBg />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
