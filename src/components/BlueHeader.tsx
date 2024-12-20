import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white py-5">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
            <div className="hidden md:flex space-x-5">
              <Link href="/" className="text-sm font-bold text-[#737373]">Home</Link>
              <Link href="#" className="text-sm font-bold text-[#737373]">Product</Link>
              <Link href="#" className="text-sm font-bold text-[#737373]">Pricing</Link>
              <Link href="#" className="text-sm font-bold text-[#737373]">Contact</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-[#23A6F0] font-bold text-sm">
              Login
            </Button>
            <Button className="bg-[#23A6F0] text-white font-bold text-sm px-6 py-3">
              Become a member →
            </Button>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  )
}

