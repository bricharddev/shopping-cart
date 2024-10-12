import "./globals.css";

export const metadata = {
  title: "Shopping Cart",
  description: "Desenvolvido por Richard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
