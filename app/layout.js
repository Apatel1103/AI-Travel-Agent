import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Chatbot",
  description: "AI help chat bot to assist users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} background color="black">{children}</body>
    </html>
  );
}
