import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";

const neoDunggeunmo = localFont({
  src: "./fonts/neodgm.woff",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Pocketmon Dictionary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${neoDunggeunmo.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
