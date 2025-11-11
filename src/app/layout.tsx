import "./globals.css";
import React from "react";

export const metadata = {
  title: "レシピ共有アプリ",
  description: "microCMSとNext.jsを使ったレシピ共有アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header
          style={{
            background: "#ff8c00",
            color: "#fff",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <h1>レシピ共有アプリ</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
