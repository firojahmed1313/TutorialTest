import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppProvider } from "./redux/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First Next App",
  description: "next app testing with",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AppProvider>
          <header>
            <Header />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </AppProvider>
      </body>

    </html>
  );
}
