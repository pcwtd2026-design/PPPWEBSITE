import "./globals.css";

export const metadata = {
  title: "Picture Possible Productions",
  description: "Picture Possible Productions"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
