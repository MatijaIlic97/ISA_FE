import "./globals.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "AKTeam",
  description: "Aleksandar Kukolj Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container py-3">
            <Header/>
            {children}
            <Footer/>
        </div>
      </body>
    </html>
  );
}
