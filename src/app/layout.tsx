import type { Metadata } from "next";
import { AppShell, ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Analytics } from "@vercel/analytics/react"
import { Work_Sans } from 'next/font/google'
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '../styles/_global.scss';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Lezd",
  description: "Lezd's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className}`}>
        <ColorSchemeScript />
        <MantineProvider>
          <Analytics />
          <AppShell>
            <main>
              <Navbar />
              {children}
              <Footer />
            </main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
