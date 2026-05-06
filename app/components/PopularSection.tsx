import Image from "next/image";

export default function PopularSection() {
  return (
    <section className="w-full bg-[#071810] py-16 px-6 text-center">
      <div className="flex justify-center mb-12">
        <div className="bg-white px-8 py-2 rounded-full">
          <span className="text-[#0a1d15] font-black tracking-widest text-sm">POPULAR</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {/* Item 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 mb-4">
            <div className="absolute inset-0 bg-[#00704A] rounded-full"></div>
            <Image
              alt="Mocha Brew"
              className="absolute inset-0 w-full h-full object-contain p-4 z-10"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={160}
              height={160}
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 z-20 shadow-lg">
              <svg className="h-4 w-4 text-[#0a1d15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
          <div className="bg-[#00704A] px-6 py-2 rounded-r-lg rounded-l-lg mb-4">
            <span className="font-bold text-xs uppercase">MOCHA BREW</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-t-[50px] rounded-b-xl mb-4 w-full max-w-[200px]">
            <Image
              alt="Vanilla Latte"
              className="w-32 h-40 object-contain mx-auto"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={128}
              height={160}
            />
          </div>
          <div className="text-[#d4e9e2] font-bold text-xs mb-4 uppercase">VANILLA LATTE</div>
          <button className="bg-[#00704A] px-8 py-2 rounded-full text-[10px] font-bold">
            ADD TO CART
          </button>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-t-[50px] rounded-b-xl mb-4 w-full max-w-[200px]">
            <Image
              alt="Vanilla Latte 2"
              className="w-32 h-40 object-contain mx-auto"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={128}
              height={160}
            />
          </div>
          <div className="text-[#d4e9e2] font-bold text-xs mb-4 uppercase">VANILLA LATTE</div>
          <button className="bg-[#00704A] px-8 py-2 rounded-full text-[10px] font-bold">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
}
