import { createContext } from "react"

interface IAllProducts {
  id: string;
  name: string;
  describe?: string;
  price: string;
  currency?: string;
  totalRates?: string;
  totalRaters?: string;
  imgURL?: string;
}

const ProductContext = createContext<any | null>(null)

export default ProductContext