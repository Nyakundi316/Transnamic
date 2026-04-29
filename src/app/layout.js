import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { Manrope } from "next/font/google";
import "./css/globals.css";
import "./css/styles.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const eurostyle = localFont({
  src: "./fonts/EuroStyle.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Transnamic — Construction & Logistics Solutions",
  description: "Innovating logistics and construction solutions across East Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.className} ${eurostyle.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
