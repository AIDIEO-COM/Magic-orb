import SecureRoute from "@/utls/SecureRoute"

const Shop = () => {
  return (
    <SecureRoute>
      <div className="font-berlin p-3 md:p-4 lg:p-0 min-h-[calc(100vh-60px)] flex justify-center items-center">
        <p className="text-xl font-berlin text-[#FFC8AA]">Features coming soon, stay tuned!</p>
      </div>
    </SecureRoute>
  )
}

export default Shop