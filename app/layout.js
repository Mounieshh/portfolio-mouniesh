import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weights: [400, 700], // Include regular and bold weights
  display: "swap", // Improves performance by swapping fonts after load
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased font-sans bg-background`}> {/* Use font-sans for Tailwind compatibility */}
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}