export default function ContactSection() {
  return (
    <>
      {/* Bottom Ticker */}
      <div className="w-full bg-[#00704A] py-3 flex justify-around overflow-hidden whitespace-nowrap">
        <span className="font-black text-xs tracking-tighter mx-4">STARBUCKS</span>
        <span className="font-black text-xs tracking-tighter mx-4">STARBUCKS</span>
        <span className="font-black text-xs tracking-tighter mx-4">STARBUCKS</span>
        <span className="font-black text-xs tracking-tighter mx-4">STARBUCKS</span>
        <span className="font-black text-xs tracking-tighter mx-4">STARBUCKS</span>
      </div>

      {/* Contact Form Section */}
      <section className="w-full bg-[#0d3321] py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-[40px]">
            <h3 className="text-[#0a1d15] font-black mb-6">CONTACT</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-[#0a1d15] text-[10px] font-bold mb-1">NAME</label>
                <input
                  className="w-full bg-[#d4e9e2]/30 border-none rounded-lg text-[#0a1d15] text-xs p-3"
                  placeholder="ENTER YOUR NAME..."
                  type="text"
                />
              </div>
              <div>
                <label className="block text-[#0a1d15] text-[10px] font-bold mb-1">EMAIL</label>
                <input
                  className="w-full bg-[#d4e9e2]/30 border-none rounded-lg text-[#0a1d15] text-xs p-3"
                  placeholder="ENTER YOUR EMAIL..."
                  type="email"
                />
              </div>
              <button className="w-full bg-[#00704A] text-white py-3 rounded-full text-xs font-bold mt-4">
                SUBMIT
              </button>
            </form>
          </div>

          {/* Thank You Side */}
          <div className="flex flex-col justify-center items-center text-center">
            <h3 className="text-[#00c853] text-4xl font-black mb-2">THANK YOU!</h3>
            <p className="text-[#d4e9e2] text-sm mb-12">Hang tight! We&apos;re coming your way soon!</p>
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-[#00c853] group transition-all">
              <svg
                className="h-8 w-8 text-[#0a1d15] group-hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
