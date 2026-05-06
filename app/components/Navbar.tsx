import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-6 sticky top-0 z-50 bg-transparent">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            alt="Starbucks Logo"
            className="rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ5NXkNWkgaeKiubeI3O__4fr9nTOQSvRphfU1O9OIneMWYk0Y0oeNeOb4CJDEgIw6QHiYuRvrS1CslxdQZXJ23VNFLrtaTpz_OP1j3pFc-cov_YN0b8Mz4SRp_MlTuTXOPh7mFVYqT2V-r-whnl4-kzsSqCl84lTPhkGAYrA3ZBrx2XW6YQz0qSh9PLdjXzCj6qM9W12CktV2zy0BbfHPOI81TVuHyXaiMmaPQP0T4AtnUq0ZSg-7eMPS8_K8ZOPBJnltzeyqPXM"
            width={48}
            height={48}
            priority
          />
        </div>

        {/* Navigation Pill */}
        <nav className="flex bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 gap-2 text-xs font-medium items-center">
          <a className="bg-[#00704A] text-white px-8 py-2.5 rounded-full" href="#">
            Home
          </a>
          <a className="text-white px-6 py-2.5 hover:text-[#00c853] transition-colors" href="#">
            Menu
          </a>
          <a className="text-white px-6 py-2.5 hover:text-[#00c853] transition-colors" href="#">
            Rewards
          </a>
          <a className="text-white px-6 py-2.5 hover:text-[#00c853] transition-colors" href="#">
            Gift Cards
          </a>
        </nav>

        {/* Profile & Cart */}
        <div className="flex items-center gap-6">
          <div className="text-white/70 hover:text-white cursor-pointer">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#00704A] flex items-center justify-center text-white cursor-pointer shadow-lg hover:bg-[#00c853] transition-colors">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
