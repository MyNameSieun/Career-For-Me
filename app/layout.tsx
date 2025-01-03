import Header from "./components/layouts/Header";
import Navbar from "./components/layouts/Navber";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="mx-auto max-w-screen-lg p-6">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
