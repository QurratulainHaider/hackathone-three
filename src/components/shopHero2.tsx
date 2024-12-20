'use client'

import { Grid2X2, List } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function FilterBar() {
  return (
    <div className="w-full border-y border-[#FFFFFF]">
      <div className="max-w-[1050px] mx-auto py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#737373]">
            <span className="font-montserrat text-sm font-bold tracking-wide">
              Showing all 12 results
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-montserrat text-sm font-bold tracking-wide text-[#737373]">
              Views:
            </span>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="h-[46px] w-[46px] border-[#ECECEC] rounded-[5px]"
              >
                <Grid2X2 className="h-4 w-4 text-[#252B42]" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-[46px] w-[46px] border-[#ECECEC] rounded-[5px]"
              >
                <List className="h-4 w-4 text-[#737373]" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select defaultValue="popularity">
              <SelectTrigger 
                className="w-[141px] h-[50px] bg-[#F9F9F9] border-[#DDDDDD] rounded-[5px] font-montserrat text-sm text-[#737373]"
              >
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              className="h-[50px] px-5 bg-[#23A6F0] hover:bg-[#23A6F0]/90 rounded-[5px] font-montserrat text-sm font-bold"
            >
              Filter
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
