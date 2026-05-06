import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a1d15] pt-16 pb-32 px-6 relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start max-w-6xl mx-auto z-10 relative">
        <div className="mb-10 md:mb-0">
          <Image
            alt="Starbucks Footer Logo"
            className="w-20 h-20 rounded-full border-4 border-[#1e3932] mb-6"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEDgi8HwaR8LjQYjyLgTIcLgM-qUGNM6JZkPNWTDX1Dp_ugepLWSNYJvg2nJl6_RWT59iGZEFcEpwrGpkC6MGE2B1T-K61AOZY2w3Bi_5D3F1AiLkNibvJYZv3B4Qu4uGzbvOdmMEANCjtqaWSP6PQ6cNCkzJ6I011Q8HrsEA9ESzoqAtQ8DrAxBwmodhbecjmD_PuT9aheVWNKdagSAx6fpaHzEnfgh5J8oOi73_ZER7fn4gtW4HiYgKNl2RKhG7VXxgmIHmr5No"
            width={80}
            height={80}
          />
          <p className="text-[10px] text-[#d4e9e2] max-w-[200px] leading-relaxed">
            Beat the heat with a chilled coffee treat - the classic Frappuccino. Coffee, ice, and everything nice - that&apos;s Starbucks Frappuccino.
          </p>
        </div>

        <div className="w-full md:w-auto">
          <h4 className="text-white font-bold text-sm mb-4">SUBSCRIBE</h4>
          <div className="flex bg-white rounded-full overflow-hidden w-full max-w-sm">
            <input
              className="bg-transparent border-none px-6 py-2 text-[#0a1d15] text-xs flex-grow focus:ring-0"
              placeholder="ENTER YOUR EMAIL..."
              type="email"
            />
            <button className="bg-[#0a1d15] text-white p-2 flex items-center justify-center">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
          <p className="text-[8px] text-gray-500 mt-2">
            Join the club! Subscribe to our newsletter for exclusive updates and offers!
          </p>
        </div>
      </div>

      {/* Background Watermark Text */}
      <div className="absolute bottom-0 left-0 w-full text-center watermark-text font-black select-none z-0">
        CONTACT
      </div>
    </footer>
  );
}
