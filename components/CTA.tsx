import React from "react";

function CTA() {
  return (
    <section className="cta w-full flex justify-center items-center p-4 md:p-20 bg-[#f5f5e9]">
      <div className="container flex flex-col justify-center items-center gap-6">
        <h3 className="text-3xl md:text-5xl font-bold text-[#214842] hidden md:flex">
          Wilama Health
        </h3>
        <div className="sepa border-4 border-[#214842] w-[100px]"></div>
        <p className="text-[#214842] text-center leading-[30px]">
          Wilama Health is poised to lead a healthcare revolution in Africa,
          bringing advanced genetic testing within reach of all who need it. By
          focusing on the prevention of recessive genetic diseases, we are not
          only saving lives but also empowering communities to break the cycle
          of inherited diseases. Our commitment to innovation, accessibility,
          and social good positions us as a transformative force in African
          healthcare, driving toward a future where every child has the
          opportunity to live a healthy, fulfilling life.
        </p>
      </div>
    </section>
  );
}

export default CTA;
