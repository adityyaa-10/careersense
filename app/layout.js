import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "./ui/SideNavbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='float-left'>
          <SideNavbar />
        </div>
        <div className="p-4 lg:ml-64 ">
          <div className="p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
