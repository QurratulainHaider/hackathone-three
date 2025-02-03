// src/components/context/cartSheet.tsx
'use client'

import { useCart } from '@/components/context/cart-context'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { CartItem } from '@/components/context/cartItem'
import { formatPrice } from '@/lib/format-utils'

interface CartSheetProps {
  isOpen: boolean
  onClose: () => void
}

export function CartSheet({ isOpen, onClose }: CartSheetProps) {
  const { items, total, clearCart } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-1">
          <SheetTitle>Cart ({items.length})</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col gap-4 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="flex flex-col gap-4 pr-6">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          </ScrollArea>
        </div>
        {items.length > 0 ? (
          <div className="grid gap-4 pr-6 pt-4">
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold">Total</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Button onClick={clearCart} variant="outline" className="w-full">
              Clear Cart
            </Button>
            <Button className="w-full">Checkout</Button>
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-2">
            <span className="text-lg font-medium">Your cart is empty</span>
            <Button onClick={onClose} variant="link" className="text-sm text-muted-foreground">
              Continue shopping
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}

