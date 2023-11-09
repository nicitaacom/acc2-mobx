import { IProduct } from "@/interfaces/IProduct"
import { TRecordCartProduct } from "@/interfaces/TRecordCartProduct"
import { makeAutoObservable } from "mobx"

class CartStore {
  products: TRecordCartProduct = {}
  productsData: IProduct[] = []

  constructor() {
    makeAutoObservable(this)
  }

  increaseProductQuantity(id: string) {
    const product = this.products[id]

    if (product) {
      this.products[id].quantity++
      this.productsData = this.productsData.map(updatedProduct => {
        if (updatedProduct.id === id) {
          return { ...updatedProduct, quantity: updatedProduct.quantity++ }
        } else return updatedProduct
      })
    } else {
      this.products[id] = {
        id,
        quantity: 1,
        //no sence to create logic because I don't add product in cart
        //I can add prodcut in store
      }
    }
  }
}

const cartStore = new CartStore()

export default cartStore
