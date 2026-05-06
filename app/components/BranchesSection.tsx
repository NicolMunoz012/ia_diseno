import Image from "next/image";

export default function BranchesSection() {
  const branches = [
    {
      id: 1,
      name: "NEW YORK",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500",
      mapUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUJ12hkIxPwZmhTXsPAJ-5mqVZ32o6-gDG5Ud8HD9J4JK7zHWqbFOETxOxKKKndN3RpzxoWUfctTjFImfym8_DOIWHuxg3wGrbJb4OAoHh0tzqZ5XuFZHGfmXfa30L8-M9JjweGDY5-wM_myYDPBkQjCntkf9pjFoDppd8R4FNWeeI3gSkBZHDCLZ6ZbwySGEo4VIWR-hU0AA2Yc4820cWL-zHc8P8vFUrWNYjzhXQgGGhFxZ5i_HK_hUtZ0w71H4mNcCOcao_3zA"
    },
    {
      id: 2,
      name: "NEW YORK",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500",
      mapUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVyPDICKzNAGrnkf6TXYM89926iZtMSXtbMlneSMq33lAVCJh0imtIdSACuJBs56MwlhiEN_lCoYx8DwRv_vX_iGzHddEOC67Oc0wRwpnwB6QlDSVwWGkrYOCg_KVukijgFHDsOH4p3CR42KIxE6DSNUHDc1C0UZeOjAJTG7ep4EyjKS8-EKkJTUYcYPiCpWARc68fBc_axCGAaTtiC9GX0fQ9Vg4v5cQQel0ENH77rwdFrTBdGGPBHOhpsXIIdtDWzR8dU-mkHMk"
    },
    {
      id: 3,
      name: "NEW YORK",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500",
      mapUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLYwsE5YBeWEeze3bVWPYeH70H9S8k5WjDXJPBhWkcXbGeEh-abYIQ0FLKG4hlCXcrrUCca7g9ANnKQOoXsvUr7T3uw8786ubhd0kTenidlbBtrT725cnckCIqceo29RaXBg8zpr-RWyFjHV5gJ9UJZSOUPxEp8Bf_E4ZNXaRj2Pa-xBplZoEGLPOVzvd_aa5UK89wrt9w5kQMhn3dIgs__eMMAZb7K4la8MK-d1NstEJ21WHF2F97AZhjgDmLWRhOeMu7N74mOzQ"
    },
    {
      id: 4,
      name: "NEW YORK",
      address: "1600 Pennsylvania Avenue NW, Washington, DC 20500",
      mapUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZmD0PARS40mfx3hNe78rO23e5wABVt0o7HoK7p0ekHbrPRjGpjT0Dhgfoe0IrLSLcjYcs9Z0cIYjk6gvt66IkWF1JOYxt-cax11-312ZMz2eDZiQzhZSKutYq2Ojo1P2fcZQjw3KHcTN6hBgSEn1YaP-EGJ2Kw5GeHditqaXbea33EWIRqWebs84kvwodD8-3A_M6qArpErrVbqdPIK0V0WdgCqhoD0QxTBB4MhF1xA0runWrr5XD7PSVzBVPybV3ardq2DJQLGE"
    }
  ];

  return (
    <section className="w-full py-16 px-6 bg-[#0a1d15] flex">
      <div className="vertical-text flex flex-col justify-center items-center mr-8 border-l border-white/20 pl-4">
        <h2 className="text-2xl font-black tracking-widest text-white whitespace-nowrap">
          OUR BRANCHES
        </h2>
      </div>
      
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {branches.map((branch) => (
            <div key={branch.id} className="bg-[#1e3932]/40 p-1 flex rounded-lg">
              <div className="w-20 h-20 bg-gray-400 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  alt="Branch Map"
                  className="w-full h-full object-cover"
                  src={branch.mapUrl}
                  width={80}
                  height={80}
                />
              </div>
              <div className="p-3">
                <h4 className="text-[#00c853] font-bold text-[10px]">{branch.name}</h4>
                <p className="text-[8px] text-gray-400 mt-1">{branch.address}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="text-[#00c853] text-[10px] font-bold underline">MORE</button>
        </div>
      </div>
    </section>
  );
}
