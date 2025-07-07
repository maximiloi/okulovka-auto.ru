import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "./component/Footer";
import Header from "./component/Header";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Автошкола | ООО «Компания АВТО ОНЛАЙН»",
  description:
    "Автошкола ООО «Компания АВТО ОНЛАЙН» предлагает обучение на категорию B. Запишитесь на занятия онлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${openSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
