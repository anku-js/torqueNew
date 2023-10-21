import { Inter } from "next/font/google";
import "./globals.css";
import { Rubik, Barlow, Stint_Ultra_Expanded, Poppins } from "next/font/google";

export const rubik = Rubik({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-ultra",
});
export const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Torque - Engineering Works Pvt. Ltd",
  description:
    "Welcome to Torque Engineering Works Pvt Ltd , your trusted partner in maritime excellence. Our experienced team of engineers are dedicated to offer a comprehensive range of services to keep your ships sailing smoothly. We also provide spare parts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/images/favicon.png"
          sizes="32x32"
        />
      </head>
      <body className={`${rubik.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
