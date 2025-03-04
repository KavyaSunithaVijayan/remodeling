function HomePage() {
  return (
    <div>
      <div
        className="h-110 relative bg-fixed text-white md:h-screen bg-cover bg-no-repeat bg-center w-full bg-opacity-50"
        style={{ backgroundImage: "url('/images/bg-image.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />

        <div className="flex flex-col justify-center items-center h-full relative z-10 text-white">
          <p className="text-center text-2xl font-semibold md:text-6xl md:font-bold">
            Newel Residential Remodeling
          </p>
          <p className="font-normal text-lg md:text-xl md:font-semibold">
            Recreating Dream Homes That Last
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pt-20">
        <div className="grid-cols-1 grid md:grid-cols-2 border border-[#9A8A78]">
          <div className="order-2 md:order-1 ">
            <img
              src="./images/image-01.avif"
              alt="two people working"
              className="w-full"
            />
          </div>
          <div className="order-1 md:order-2 flex flex-col h-full justify-center ">
            <div className="pl-6 md:pl-20">
              <h4 className="text-3xl pb-5 pt-5 text-white md:text-4xl mb:pb-8 font-semibold">
                Our Services
              </h4>
              <ul className="space-y-3 list-disc ml-5 text-white">
                <li className="text-sm md:text-lg">Complete Remodeling</li>
                <li className="text-sm md:text-lg">Kitchen Remodeling</li>
                <li className="text-sm md:text-lg">Bathroom Remodeling</li>
                <li className="text-sm md:text-lg">Home Interior </li>
                <li className="text-sm md:text-lg">Flooring</li>
              </ul>
              <div className="pb-6 pt-8 md:pt-15">
                <button
                  type="submit"
                  className="bg-[#9A8A78] text-sm sm:text-base py-3 px-10 sm:px-15 hover:bg-[#BEB7B0]"
                >
                  MORE INFO
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 border border-[#9A8A78]">
          <div className="border-b md:border-r border-[#9A8A78] py-15">
            <img
              src="./images/01.png"
              alt="Vast Experience"
              className="mx-auto"
            />
            <h4 className="text-center pt-5 text-white text-lg">
              Vast <br /> Experience
            </h4>
          </div>
          <div className="border-b md:border-r border-[#9A8A78] py-15">
            <img
              src="./images/02.png"
              alt="Professional Team"
              className="mx-auto"
            />
            <h4 className="text-center pt-5 text-white text-lg">
              Professional <br /> Team
            </h4>
          </div>
          <div className="border-b md:border-r border-[#9A8A78] py-15">
            <img src="./images/03.png" alt="High Finish" className="mx-auto" />
            <h4 className="text-center pt-5 text-white text-lg">
              High <br /> Finish
            </h4>
          </div>
          <div className="border-b md:border-r border-[#9A8A78] py-15">
            <img
              src="./images/04.png"
              alt="Sustainable & Accountable"
              className="mx-auto"
            />
            <h4 className="text-center pt-5 text-white text-lg">
              Sustainable
              <br /> & Accountable
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  border border-[#9A8A78]">
          <div className=" border-b md:border-r border-[#9A8A78] pt-10 pl-6 md:pt-55 md:pl-15">
            <h5 className="text-white text-3xl md:text-4xl font-semibold md:font-bold ">
              About Us
            </h5>
            <h4 className="py-3 md:py-7 text-xl md:text-3xl text-[#9A8A78]">
              Newel Residential Remodeling
            </h4>
            <p className="text-white text-sm md:text-lg leading-6 pb-10 md:pb-0">
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
          </div>
          <img
            src="./images/image-02.avif"
            alt="two man looking plan"
            className="w-full mx-auto"
          />
        </div>
        <h3 className="text-3xl md:text-4xl text-white font-semibold md:font-bold text-center pt-8 md:pt-15">
          Recent Projects
        </h3>
        <div className="grid grid-cols-1 xl:grid-cols-2 pt-10 gap-2 xl:overflow-hidden xl:h-[586px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-7">
            <div className="flex flex-col gap-2 md:gap-5">
              <div className="group xl:h-2/4 overflow-hidden relative">
                <img
                  src="./images/image-03.avif"
                  alt="20131 groov street"
                  className="h-full object-center w-full"
                />
                <div className="hidden group-hover:flex items-center justify-center absolute inset-0 white-opacity-50 px-5 text-3xl text-center">
                  20131 Grove Street
                </div>
              </div>
              <div className="xl:h-1/4 overflow-hidden relative group">
                <img
                  src="./images/image-03.avif"
                  alt="20131 groov street"
                  className="h-full object-center w-full"
                />
                <div className="absolute inset-0 hidden group-hover:flex items-center white-opacity-50 px-5 text-3xl text-center">
                  The Nelson’s Project
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 md:gap-5">
              <div className="xl:h-1/4 overflow-hidden relative group">
                <img
                  src="./images/image-03.avif"
                  alt="20131 groov street"
                  className="h-full object-center w-full"
                />
                <div className="absolute hidden inset-0 group-hover:flex items-center white-opacity-50 px-5 text-3xl text-center">
                  20131 Grove Street
                </div>
              </div>
              <div className="xl:h-2/4 overflow-hidden relative group">
                <img
                  src="./images/image-03.avif"
                  alt="20131 groov street"
                  className="h-full object-center w-full"
                />
                <div className="absolute hidden inset-0 group-hover:flex items-center text-center white-opacity-50 px-5 text-3xl">
                  The Nelson’s Project
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              src="./images/image-05.webp"
              alt="Lake-house"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 hidden group-hover:flex items-center text-center white-opacity-50 px-20 text-3xl">
              The Jefferson&apos;s Lake House
            </div>
          </div>
        </div>
        <div className="text-center py-7">
          <button
            type="submit"
            className="bg-[#9A8A78] px-13 py-5 hover:bg-[#BEB7B0]"
          >
            VIEW ALL
          </button>
        </div>
        <div className="border border-[#9A8A78]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b lg:border-r border-[#9A8A78] bg-[#9A8A78]">
              <h4 className="text-4xl text-white font-semibold text-center py-40">
                Testimonials
              </h4>
            </div>
            <div className="border-b lg:border-r border-[#9A8A78]">
              <h4 className="text-sm sm:text-lg text-white pt-15 px-5">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tell their friends how great you are.”
              </h4>
              <h3 className="pl-5 pt-10 text-[#9A8A78] text-2xl sm:text-4xl pb-10">
                The Mathews
              </h3>
            </div>
            <div className="border-b lg:border-r border-[#9A8A78]">
              <h4 className="text-sm sm:text-lg text-white pt-15 px-5">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services. Let your customers
                review you and tell their friends how great you are.”
              </h4>
              <h3 className="pl-5 pt-10 text-[#9A8A78] text-2xl sm:text-4xl pb-10">
                Lars & Mary Williams
              </h3>
            </div>
            <div className="border-r border-[#9A8A78]">
              <h4 className="text-sm sm:text-lg text-white pt-15 px-5">
                “I'm a testimonial. Click to edit me and add text that says
                something nice about you and your services.Let your customers
                review you and tell their friends how great you are.”
              </h4>
              <h3 className="pl-5 pt-10 text-[#9A8A78] text-2xl sm:text-4xl pb-10">
                Chris Parks
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
