import Link from "next/link";
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top Section */}
      <div className="bg-[#FAFAFA]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-10">
          <Link href="/" className="text-2xl font-bold text-[#252B42]">
            Bandage
          </Link>
          <div className="flex items-center gap-5">
            <Link href="#" className="text-[#23A6F0]">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#23A6F0]">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-[#23A6F0]">
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      <hr className="border-[#E6E6E6]" />

      {/* Main Footer Content */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Company Info */}
            <div className="flex flex-col gap-5">
              <h5 className="text-base font-bold leading-6 text-[#252B42]">Company Info</h5>
              <div className="flex flex-col gap-2.5">
                <Link href="/about" className="text-sm font-bold text-[#737373]">About Us</Link>
                <Link href="/about/product" className="text-sm font-bold text-[#737373]">Product</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Carrier</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">We are hiring</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Blog</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-5">
              <h5 className="text-base font-bold leading-6 text-[#252B42]">Legal</h5>
              <div className="flex flex-col gap-2.5">
                <Link href="#" className="text-sm font-bold text-[#737373]">About Us</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Carrier</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">We are hiring</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Blog</Link>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              <h5 className="text-base font-bold leading-6 text-[#252B42]">Features</h5>
              <div className="flex flex-col gap-2.5">
                <Link href="#" className="text-sm font-bold text-[#737373]">Business Marketing</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">User Analytic</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Live Chat</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Unlimited Support</Link>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-5">
              <h5 className="text-base font-bold leading-6 text-[#252B42]">Resources</h5>
              <div className="flex flex-col gap-2.5">
                <Link href="#" className="text-sm font-bold text-[#737373]">IOS & Android</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Watch a Demo</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">Customers</Link>
                <Link href="#" className="text-sm font-bold text-[#737373]">API</Link>
              </div>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-5">
              <h5 className="text-base font-bold leading-6 text-[#252B42]">Get In Touch</h5>
              <div className="space-y-2">
                <div className="flex">
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="rounded-r-none border-[#E6E6E6] bg-[#F9F9F9]"
                  />
                  <Button className="rounded-l-none bg-[#23A6F0] hover:bg-[#23A6F0]/90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs leading-7 text-[#737373]">
                  Lore imp sum dolor Amit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#FAFAFA]">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <p className="text-sm font-bold leading-6 text-[#737373]">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
