function Services() {
  return (
    <div className="mt-2 md:mt-20 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="border border-[#9A8A78] bg-[#9A8A78] h-20 md:h-96">
          <p className="text-white font-semibold text-3xl md:text-5xl py-5 md:py-20 px-6 md:px-10">
            Our <br className="hidden md:block " />
            Services
          </p>
        </div>
        <div className="block sm:hidden md:block border border-[#9A8A78] md:h-96 md:overflow-hidden">
          <img
            src="./images/service-01.avif"
            alt="a man doing work"
            className="w-full object-cover h-64 md:h-fit"
          />
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10 lg:h-96 pt-10 md:pt-16 lg:pt-11">
          <h1 className="text-2xl md:text-3xl pb-3 md:pb-5 text-[#9A8A78]">
            Complete <br className="hidden md:block "/> Remodeling
          </h1>
          <p className="text-white pt-0 md:pt-4 pb-10 md:pb-16 text-sm md:text-lg ">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10 md:h-96 pt-10 md:pt-16 lg:pt-11">
          <h1 className="text-2xl md:text-3xl pb-3 md:pb-5 text-[#9A8A78]">
            Kitchen <br className="hidden md:block "/>
            Remodeling
          </h1>
          <p className="text-white pt-0 md:pt-4 pb-10 md:pb-16 text-sm md:text-lg ">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="hidden sm:border border-[#9A8A78] h-96 overflow-hidden">
          <img
            src="./images/service-01.avif"
            alt="a man doing work"
            className="w-full h-fit"
          />
        </div>
        <div className="border border-[#9A8A78] md:h-96 overflow-hidden">
          <img
            src="./images/service-02.avif"
            alt="a man doing work"
            className="w-full object-cover h-64 md:h-fit"
          />
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10  md:h-96 pt-10 md:pt-16 lg:pt-11">
          <h1 className="text-2xl md:text-3xl pb-3 md:pb-5 text-[#9A8A78]">Home Interior</h1>
          <p className="text-white pt-0 md:pt-4 pb-10 md:pb-16 text-sm md:text-lg ">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10  md:h-96 pt-10 md:pt-16 lg:pt-11">
          <h1 className="text-2xl md:text-3xl pb-3 md:pb-5 text-[#9A8A78]">Flooring</h1>
          <p className="text-white pt-0 md:pt-4 pb-10 md:pb-16 text-sm md:text-lg ">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10  md:h-96 pt-10 md:pt-16 lg:pt-11">
          <h1 className="text-2xl md:text-3xl pb-3 md:pb-5 text-[#9A8A78]">Bathroom Remodeling</h1>
          <p className="text-white pt-0 md:pt-4 pb-10 md:pb-16 text-sm md:text-lg ">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </p>
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10 md:h-96 pt-5 md:pt-20">
          <h1 className="text-2xl md:text-3xl pb-5 text-white ">Our Expertise</h1>
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10 h-52 md:h-96 pt-10 md:pt-20">
          <h1 className="text-xl md:text-2xl text-white pb-3 md:pb-5">Pre-Construction</h1>
          <ul className="list-disc pl-8 space-y-2 md:space-y-3">
            <li className="text-white">Design-Build</li>
            <li className="text-white">Scheduling</li>
            <li className="text-white">Estimating & Budgeting</li>
          </ul>
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10 h-52 md:h-96 pt-10 md:pt-20">
          <h1 className="text-xl md:text-2xl text-white pb-3 md:pb-5">Construction</h1>
          <ul className="list-disc pl-8 space-y-2 md:space-y-3">
            <li className="text-white">Quality Control</li>
            <li className="text-white">Safety Management</li>
            <li className="text-white leading-8">Subcontractor Management</li>
          </ul>
        </div>
        <div className="border border-[#9A8A78] px-5 md:px-10 h-52 md:h-96 pt-10 md:pt-20">
          <h1 className="text-xl md:text-2xl text-white pb-3 md:pb-5">Post-Construction</h1>
          <ul className=" list-disc pl-8 space-y-3">
            <li className="text-white">Certificate of Occupancy</li>
            <li className="text-white">As-built documentation</li>
            <li className="text-white">Warranty</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Services;
