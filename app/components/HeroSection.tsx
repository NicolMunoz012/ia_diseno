import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full py-10 overflow-hidden relative">
      {/* Floating Beans */}
      <Image
        alt="bean"
        className="floating-bean top-10 left-1/2 rotate-12"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJLGIqaspdzZwN0P8o39TAaXLHt2CUDZJn4K8DZSLyfi8Tu6FIoXqwSrPS-UNugsMoCfM1XZ2MM6vzjbVA0XPs3afC5TtW6vTxvsyY7mVRQ2zBMwFVo2pemcNL7GQBRCN9-_xIZOqRkgCqYopPtsK_q-q3Ei1lsqRSZ7Io_TCN9bL18Llx9wtLPmYnhw3gqN90YzFaGMIqwN-V2eUNl37_6AFAwP3sTIsGPPjXRpGhUBhATlBqFb6jtGKUb4kw3s_xCoGHMqhYJuk"
        width={30}
        height={30}
      />
      <Image
        alt="bean"
        className="floating-bean top-60 left-10 -rotate-45"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1SIeHoAVkiABoyReCUS5_EPxGPBuHVYDePImYZxEmUIOnlMpAfWVAAH_pZCiFXnkKiwy1ko7pPwtfDo8jMml4YzscEQH2oAoMmX5CsIPnZkn8Fug6VPf5V8Gx3CsPlHiHNceS_5yLg4XPD6v-DAkZqte4C-lIAXPxXl4A5H2TLj-DhRdNGMFSU0ALguY4pG3Dkr5uYF6-dkfMTN7MJILdhCHUnbsZ3eSjS-ITB_iJNHuCTeMVUA1DzqIMqKoJVHsCgNiamztBKVI"
        width={30}
        height={30}
      />

      <div className="flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-1/2 z-20 px-6">
          <p className="text-white text-xs font-light tracking-widest mb-2 uppercase">
            Where every cup tells a story.
          </p>
          <h1 className="text-5xl font-bold mb-6">
            WHAT&apos;S <span className="italic text-[#C8E600]">YOURS?</span>
          </h1>
          
          <div className="max-w-xs mb-8">
            <h2 className="text-[#00c853] font-bold mb-2">FRAPUCCINO COFFEE DELIGHT</h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              Indulge in the perfect blend of coffee and ice — the Frappuccino is your cool coffee escape. 
              Elevate your coffee moment with a creamy, icy Frappuccino delight.
            </p>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="text-[#00c853] font-bold text-2xl">
              BEST RATING <span className="ml-2 text-4xl font-black text-[#C8E600]">$8.6</span>
            </div>
            <button className="border border-white text-white px-6 py-2 rounded-full text-xs font-bold bg-transparent hover:bg-white hover:text-[#0a1d15] transition-colors">
              ADD TO CART
            </button>
          </div>

          {/* Product Variants */}
          <div className="flex gap-4 p-2 bg-[#0d3321] rounded-2xl w-fit">
            <div className="w-12 h-12 bg-[#00704A] rounded-full flex items-center justify-center p-1 border-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              <Image
                alt="Variant 1"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
                width={48}
                height={48}
              />
            </div>
            <div className="w-12 h-12 bg-[#1e3932] rounded-full flex items-center justify-center p-1 opacity-60">
              <Image
                alt="Variant 2"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
                width={48}
                height={48}
              />
            </div>
            <div className="w-12 h-12 bg-[#1e3932] rounded-full flex items-center justify-center p-1 opacity-60">
              <Image
                alt="Variant 3"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>

        {/* Right Product Feature */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0">
          <div className="absolute right-0 w-3/4 h-full bg-[#1B5E35] rounded-l-[100px] z-0"></div>
          <div className="absolute right-4 vertical-text h-full flex items-center z-20">
            <span className="text-white text-6xl font-black select-none tracking-tighter">
              FRAPUCCINO
            </span>
          </div>
          <div className="relative z-10">
            <Image
              alt="Featured Frappuccino"
              className="w-80 relative z-10 drop-shadow-2xl"
              src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
              width={320}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
