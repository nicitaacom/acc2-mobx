import supabaseServer from "./libs/supabaseServer"
import { Products } from "./components/Products"

export default async function Home() {
  //Fetching all data from DB
  const products_response = await supabaseServer().from("products").select("*").order("price", { ascending: true })
  if (products_response.error) throw products_response.error
  const products = products_response.data

  return (
    <div
      className="w-full py-12 h-[calc(100vh-64px)] overflow-x-hidden overflow-y-auto
       text-2xl text-title flex flex-col gap-y-8 justify-between items-center mx-auto">
      <section className="flex flex-col gap-y-4">
        <Products products={products} />
      </section>
    </div>
  )
}
