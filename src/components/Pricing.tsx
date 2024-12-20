import Link from "next/link";

export default function PricingHeader() {
  return (
    <div className="w-full">
      
      {/* Pricing Header */}
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-sm text-gray-600 uppercase tracking-wide mb-4">
          PRICING
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Simple Pricing
        </h1>
        <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-gray-900">Pricing</span>
        </div>
      </div>
    </div>
  );
}
