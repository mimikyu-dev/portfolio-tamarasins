import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export const metadata = {
  title: "Tamara Sins — Webentwicklung & UI/UX Design",
  description:
    "Portfolio von Tamara Sins: Webentwicklung & UX Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-[#FFFDFB] text-[#3B2E2A]">
        <Header />
        <main className="pt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}