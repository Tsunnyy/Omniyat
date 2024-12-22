import 'bootstrap/dist/css/bootstrap.min.css';
import "./omi.css";
import "./globals.css";

export const metadata = {
  title: "Omniyat",
  description: "Assignment for R-Centric",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
