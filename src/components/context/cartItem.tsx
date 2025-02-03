// src\components\Blog\BlogLogo.tsx
'use client'

import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/components/context/cart-context'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/format-utils'

interface CartItemProps {
  item: {
    id: string
    name: string
    price: number
    quantity: number
    image: string
  }
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()

  return (
    <div className="flex items-center gap-4">
      <div className="relative h-16 w-16 overflow-hidden rounded">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <span className="text-sm font-medium">{item.name}</span>
        <span className="text-sm text-muted-foreground">
          {formatPrice(item.price)}
        </span>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => removeItem(item.id)}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}

