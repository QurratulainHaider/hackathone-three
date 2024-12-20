import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { ChevronRight } from 'lucide-react'
  
  export default function ShopHeader() {
    return (
      <div className="flex flex-col items-center w-full border-[#FAFAFA] border py-6">
        <div className="flex items-center gap-8 w-full max-w-[1049px]">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-[#252B42] font-montserrat tracking-[0.1px]">
              Shop
            </h2>
          </div>
          <div className="flex items-center justify-end flex-1">
            <Breadcrumb>
              <BreadcrumbList className="font-montserrat">
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    href="/" 
                    className="text-sm font-bold text-[#252B42] tracking-[0.2px]"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-[#BDBDBD]" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-sm font-bold text-[#BDBDBD] tracking-[0.2px]">
                    Shop
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
      </div>
    )
  }
  
