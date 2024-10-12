import React from "react";

function Why() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2">
      <div className="md:flex md:flex-col p-8 bg-[#fafaf5] gap-6">
        <h4 className="font-bold text-4xl text-[#214842fa]">Why Us?</h4>
        <p className="text-[#214842cc]">
          Wilama Health stands out as the preferred partner for genetic disease
          prevention in Africa due to several key differentiators:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="why_item">
            <div className="flex gap-4 items-center">
              <h2 className="bg-[#214842fa] p-2 rounded-full text-white font-black">
                1
              </h2>
              <h2 className="text-[#214842fa] font-bold text-2xl">
                Proven Expertise
              </h2>
            </div>
            <p className="text-[#214842fa] mt-4">
              Our team comprises leading experts in genetic research, AI
              technology, and healthcare delivery, ensuring that our solutions
              are not only innovative but also grounded in the latest scientific
              advancements.
            </p>
          </div>
          <div className="why_item">
            <div className="flex gap-4 items-center">
              <h2 className="bg-[#214842fa] p-2 rounded-full text-white font-black">
                2
              </h2>
              <h2 className="text-[#214842fa] font-bold text-2xl">
                Comprehensive Solutions
              </h2>
            </div>
            <p className="text-[#214842fa] mt-4">
              We offer an all-in-one diagnostic solution that integrates
              multiple genetic tests into a single, compact device. This
              comprehensive approach maximizes efficiency and reduces costs,
              making it accessible to a broader population.
            </p>
          </div>
          <div className="why_item">
            <div className="flex gap-4 items-center">
              <h2 className="bg-[#214842fa] p-2 rounded-full text-white font-black">
                3
              </h2>
              <h2 className="text-[#214842fa] font-bold text-2xl">
                Affordability and Accessibility
              </h2>
            </div>
            <p className="text-[#214842fa] mt-4">
              We are committed to breaking down the barriers to advanced
              healthcare. Our equipment is designed to be affordable and
              user-friendly, ensuring that even the most resource-limited
              healthcare settings can benefit from cutting-edge genetic testing.
            </p>
          </div>
          <div className="why_item">
            <div className="flex gap-4 items-center">
              <h2 className="bg-[#214842fa] p-2 rounded-full text-white font-black">
                4
              </h2>
              <h2 className="text-[#214842fa] font-bold text-2xl">
                AI Integration
              </h2>
            </div>
            <p className="text-[#214842fa] mt-4">
              Our use of AI to interpret test results is a game-changer,
              reducing the need for specialized healthcare professionals and
              making genetic counseling more widely available. This innovation
              not only saves costs but also accelerates the decision-making
              process for families and healthcare providers.
            </p>
          </div>
          <div className="why_item">
            <div className="flex gap-4 items-center">
              <h2 className="bg-[#214842fa] p-2 rounded-full text-white font-black">
                5
              </h2>
              <h2 className="text-[#214842fa] font-bold text-2xl">
                Social Responsibility
              </h2>
            </div>
            <p className="text-[#214842fa] mt-4">
              We are not just a company; we are a movement dedicated to
              improving lives across Africa. Our social enterprise model ensures
              that profits are reinvested into expanding our reach and enhancing
              our impact, aligning our business success with our mission to
              create a healthier Africa.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-[url('/img/img2.jpg')] bg-center bg-cover h-[40vh] md:h-auto">
        <div className="absolute bottom-0 bg-pink-500 rounded-r-3xl p-8 md:py-28 text-2xl md:text-5xl font-bold text-white shadow-lg shadow-[#7ccabffa]">
          Wilama Health
        </div>
      </div>
    </section>
  );
}

export default Why;
