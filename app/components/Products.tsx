"use client"

import { observer } from "mobx-react"

import { IDBProduct } from "@/interfaces/IDBProduct"
import { Product } from "./Product"
import cartStore from "@/store/cartStore"

interface ProductsProps {
  products: IDBProduct[] | undefined
}

const ProductObserver = observer(Product)

export function Products({ products }: ProductsProps) {
  return (
    <div
      className="mobile:border-[1px] broder-border-color rounded 
    w-full max-w-[1440px] min-w-[80vw]">
      <div className="flex flex-row justify-between px-4">
        <h1 className="hidden tablet:flex text-lg">Products:</h1>
      </div>
      <ul className="flex flex-col gap-y-8">
        {products?.map(product => {
          console.log(
            "cartStore.products[product.id].quantity - ",
            cartStore.products[product.id] ? cartStore.products[product.id].quantity : 0,
          )
          return (
            <ProductObserver
              {...product}
              quantity={cartStore.products[product.id] ? cartStore.products[product.id].quantity : 0}
              key={product.id}
            />
          )
        })}
      </ul>
    </div>
  )
}
