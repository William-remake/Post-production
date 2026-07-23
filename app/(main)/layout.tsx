import Footer from "@/components/footer"
import Header from "@/components/header"
import { Analytics } from "@vercel/analytics/next"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section><Header/>{children}<Footer/> <Analytics /></section>
}