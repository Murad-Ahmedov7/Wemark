import "./globals.css";

export const metadata = {
  title: "WM xSchool | Wemark",
  description: "Welcome to new-gen marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
