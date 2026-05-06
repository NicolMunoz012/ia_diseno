import Image from "next/image";

export default function QualityBanner() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center overflow-hidden">
      <div className="relative text-center mb-10">
        <h2 className="text-7xl font-black tracking-tight leading-none uppercase">
          UNMATCHED<br />
          <span className="opacity-10">QU</span> <span className="text-white">TY</span>
        </h2>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 z-20">
          <Image
            alt="Coffee Break"
            className="drop-shadow-2xl"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhVdepnD65liArsxGkVRu_fcJ5gO6DkicA6uHeJOUXKevpyTAU0kkizG2DyTraFRGft5Lqz2xynu4_pWePvCuBufxdeEpORgSeXjBQoirtIZ4ew-eLbQuwPM5xYa78I1cN-prannHLNWAg7VtxoNO6mgi8CPqZiSR4E9WRJu9E92vFEwOMKgw_waXZ3HXYSI5HRymsgoCkVC4spdH_8zDOL9N_MmNL-r0SxtKdlsKNDLyTrIMgceg7dVIIovMyMwUDgewd5nQTZ1A"
            width={192}
            height={192}
          />
        </div>
        {/* Floating Bean */}
        <Image
          alt="bean"
          className="floating-bean top-0 right-[-40px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoJsJsgTU9D_JEH1hr6dX2-7dd6Ic6zYX7i4066TMQn_bNbtjwczVuqLSdhJwitgRu7NR724cgfj8fs_sbPq4hpsb-oNVNYbbcYc4nMdvUhcnamzAucLD6NNhOYKI9CkZpP4JDvlCD7OhR-Msc131_83LulzUt2tFdBuK9Yl3xkNIUi-UpyUPMaW6DV2hllKb332Eqx0GMAHhXld2eNYzQx0WWOOWF0VQW9sk9kmKI-oaJAz1xN_yBzOLK5yOvNDFn4enxiRPxtnM"
          width={30}
          height={30}
        />
      </div>

      {/* Repeating Ticker */}
      <div className="w-[120%] bg-[#00704A] py-4 rotated-ticker flex whitespace-nowrap overflow-hidden mt-8">
        <div className="flex gap-12 text-white font-black text-3xl animate-pulse">
          <span>STARBUCKS</span>
          <span>STARBUCKS</span>
          <span>STARBUCKS</span>
          <span>STARBUCKS</span>
          <span>STARBUCKS</span>
          <span>STARBUCKS</span>
        </div>
      </div>

      <div className="px-6 py-12 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl">
        <p className="text-xs text-gray-400 max-w-[200px] text-center md:text-left mb-6 md:mb-0">
          At Starbucks, every sip is a journey into a world of rich, aromatic coffee perfection.
        </p>
        <p className="text-xs text-[#d4e9e2] max-w-[200px] text-center md:text-right italic">
          Starbucks redefines the coffee experience with every cup, blending quality, flavor, and comfort.
        </p>
      </div>
    </section>
  );
}
