import React from "react";

function Tech() {
  return (
    <section className="tech bg-fixed bg-[#fafaf5] w-full flex flex-col md:gap-12 justify-center items-center p-4 md:p-20">
      <div className="container rotate-[-2deg] md:rotate-[-10deg] gap-10 md:gap-8 flex flex-col md:flex-row justify-between items-center bg-white p-8 rounded-3xl shadow-lg shadow-[#214842] ">
        <div className="col-span-3">
          <h2 className="text-5xl md:text-6xl xl:text-6xl font-extrabold text-[#214842]">
            Product and Technology
          </h2>
        </div>
        <div className="col-span-3">
          <p className="text-md md:text-lg xl:text-xl">
            Our state-of-the-art equipment is designed to be small,
            cost-effective, and highly manageable, making it ideal for use in
            low-resource environments. The key features of our technology
            include:
          </p>
        </div>
        <div className="col-span-5">
          <ul className="list list-disc text-xs xl:text-sm flex flex-col gap-4">
            <li>
              <span className="font-bold text-[#021f1a]">
                AI-Integrated Testing:
              </span>{" "}
              Our machines use AI to interpret test results, reducing the need
              for specialist intervention and making genetic counseling more
              accessible and less costly.
            </li>
            <li>
              <span className="font-bold text-[#021f1a]">
                Expanded Carrier Screening and Multi-Test Capability:
              </span>{" "}
              Our equipment is designed to perform comprehensive genetic
              screening, testing for over 100 genetic diseases simultaneously.
              By focusing on recessive genes and integrating multiple tests into
              one streamlined process, we provide individuals and couples with
              detailed insights into their genetic health. This approach reduces
              costs, saves time, and ensures broad coverage, regardless of
              ethnic background or family history.
            </li>
            <li>
              <span className="font-bold text-[#021f1a]">
                User-Friendly Design:
              </span>
              The simplicity and portability of our equipment ensure that it can
              be effectively used in both urban and rural healthcare settings,
              making advanced genetic testing available to all.
            </li>
          </ul>
        </div>
      </div>
      <div className="container rotate-[2deg] md:rotate-[10deg] gap-10 md:gap-8 flex flex-col md:flex-row justify-between items-center bg-[#f5f5d0] p-8 rounded-3xl shadow-lg shadow-[#214842]">
        <div className="col-span-3">
          <h2 className="text-5xl md:text-6xl xl:text-6xl font-extrabold text-[#214842]">
            Commitment to Social Impact.
          </h2>
        </div>
        <div className="col-span-3">
          <p className="text-md md:text-lg xl:text-xl">
            Wilama Health is driven by a commitment to reducing the financial,
            psychological, and emotional burdens associated with genetic
            diseases. Our company aims to:
          </p>
        </div>
        <div className="col-span-5">
          <ul className="list list-disc text-xs xl:text-sm flex flex-col gap-4">
            <li>
              <span className="font-bold text-[#021f1a]">
                Reduce Newborn Genetic Diseases:
              </span>{" "}
              We are committed to reducing the number of newborns affected by
              sickle cell disease and other recessive genetic disorders by 50%
              by 2035, and by 80% by 2050.
            </li>
            <li>
              <span className="font-bold text-[#021f1a]">
                Empower Low-Income Communities:{" "}
              </span>{" "}
              By offering affordable and accessible testing solutions, we aim to
              reach even the most underserved populations, ensuring that
              everyone has the opportunity to benefit from early detection and
              intervention.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tech;
