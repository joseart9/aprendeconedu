import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from 'react-toastify';
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

const poppins = Poppins({ weight: "400", display: "swap", style: "normal", preload: true, subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lecciones con Edu",
  description: "Lecciones de finanzas personales, inversiones y educación financiera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="He6iCHR_ixvSwfBneFWdlCsoZuCKYxrhQSAwSwZ1Vbg" />
      <body className={poppins.className}>{children}
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        <ToastContainer />
      </body>
    </html>
  );
}
