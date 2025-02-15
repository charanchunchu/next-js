import Header from "@/components/header/header"
import "./globals.css"
import { Inter } from "next/font/google"
import Footer from "@/components/footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Uday Infrastructure",
  description: "Building the future, one project at a time",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

