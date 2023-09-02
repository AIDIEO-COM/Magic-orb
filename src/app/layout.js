import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Magic Orb",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`default-background-color h-full`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
