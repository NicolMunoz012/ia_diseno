import Image from "next/image";

export default function MenuSection() {
  return (
    <section className="w-full bg-[#0d3321] py-12 px-6">
      {/* Tabs */}
      <div className="flex justify-between items-center mb-10 overflow-x-auto gap-4">
        <a className="px-8 py-2 bg-white text-[#0a1d15] rounded-full text-sm font-bold whitespace-nowrap" href="#">
          DRINKS
        </a>
        <a className="px-8 py-2 border border-gray-600 rounded-full text-sm font-bold whitespace-nowrap" href="#">
          FOOD
        </a>
        <a className="px-8 py-2 border border-gray-600 rounded-full text-sm font-bold whitespace-nowrap" href="#">
          AT HOME
        </a>
        <a className="px-8 py-2 border border-gray-600 rounded-full text-sm font-bold whitespace-nowrap" href="#">
          MERCHANDISE
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
        {/* Nav Arrows */}
        <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1e3932] rounded-full flex items-center justify-center z-10 border border-gray-700">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
        <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1e3932] rounded-full flex items-center justify-center z-10 border border-gray-700">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* Card 1 */}
        <div className="product-card p-4 flex flex-col items-center">
          <div className="bg-[#00704A]/20 rounded-full p-4 mb-4">
            <Image
              alt="Caramel Latte"
              className="w-24 h-32 object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={96}
              height={128}
            />
          </div>
          <h3 className="font-bold text-sm mb-4">CARAMEL LATTE</h3>
          <div className="w-full space-y-2 mb-6">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">MILK</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">CREAM</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">TOPPINGS</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
          </div>
          <button className="w-full bg-[#00704A] py-2 rounded-md text-[10px] font-bold">
            ADD TO CART
          </button>
        </div>

        {/* Card 2 - Featured */}
        <div className="product-card p-4 flex flex-col items-center scale-105 border-2 border-[#00c853] bg-[#1a4a35]">
          <div className="bg-[#00704A] rounded-2xl p-4 mb-4 -mt-8 shadow-xl">
            <Image
              alt="Mocha Frapp"
              className="w-28 h-36 object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={112}
              height={144}
            />
          </div>
          <h3 className="font-black text-base mb-4">MOCHA FRAPP</h3>
          <div className="w-full space-y-3 mb-6">
            <div className="flex justify-between text-xs">
              <span className="text-[#d4e9e2] font-semibold">MILK</span>
              <span className="text-[#00c853]">OPTIONS ⌵</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#d4e9e2] font-semibold">CREAM</span>
              <span className="text-[#00c853]">OPTIONS ⌵</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-[#d4e9e2] font-semibold">TOPPINGS</span>
              <span className="text-[#00c853]">OPTIONS ⌵</span>
            </div>
          </div>
          <button className="w-full bg-white text-[#0a1d15] py-2 rounded-full text-xs font-bold shadow-lg">
            ADD TO CART
          </button>
        </div>

        {/* Card 3 */}
        <div className="product-card p-4 flex flex-col items-center">
          <div className="bg-[#00704A]/20 rounded-full p-4 mb-4">
            <Image
              alt="Vanilla Bean"
              className="w-24 h-32 object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={96}
              height={128}
            />
          </div>
          <h3 className="font-bold text-sm mb-4">VANILLA BEAN</h3>
          <div className="w-full space-y-2 mb-6">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">MILK</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">CREAM</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">TOPPINGS</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
          </div>
          <button className="w-full bg-[#00704A] py-2 rounded-md text-[10px] font-bold">
            ADD TO CART
          </button>
        </div>

        {/* Card 4 */}
        <div className="product-card p-4 flex flex-col items-center">
          <div className="bg-[#00704A]/20 rounded-full p-4 mb-4">
            <Image
              alt="Hazelnut Brew"
              className="w-24 h-32 object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={96}
              height={128}
            />
          </div>
          <h3 className="font-bold text-sm mb-4">HAZELNUT BREW</h3>
          <div className="w-full space-y-2 mb-6">
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">MILK</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">CREAM</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
            <div className="flex justify-between text-[10px]">
              <span className="text-gray-400">TOPPINGS</span>
              <span className="text-[#00c853]">OPTIONS</span>
            </div>
          </div>
          <button className="w-full bg-[#00704A] py-2 rounded-md text-[10px] font-bold">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
}
