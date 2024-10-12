import React from "react";
import { GiOnTarget } from "react-icons/gi";
import { ImEyePlus } from "react-icons/im";
import { PiListHeartFill } from "react-icons/pi";
import Image from "next/image";

function Mission() {
  return (
    <section className="miss bg-[#214842] w-full flex justify-center items-center p-10 md:p-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <Image
            src="/img/img1.jpg"
            width={500}
            height={500}
            alt="dna image"
            className="rounded-xl border-8 border-[#efc368] w-[700px] md:rotate-[-8deg] shadow-lg shadow-[#d2ef68]"
          />
        </div>
        <div className="left flex flex-col gap-12 ">
          <div className="mission flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="text-white text-4xl xl:text-5xl font-bold">
                Mission
              </h4>
              <GiOnTarget size={30} className="text-white md:scale-150" />
            </div>
            <p className="text-[#fafaf5] text-sm">
              To revolutionize healthcare in Africa by preventing the spread of
              recessive genetic diseases through innovative, AI-powered testing
              solutions that are accessible and affordable for all.
            </p>
          </div>

          <div className="vision flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="text-[#f4d392] text-4xl xl:text-5xl font-bold">
                Vision
              </h4>
              <ImEyePlus size={30} className="text-[#f5d79a] md:scale-150" />
            </div>
            <p className="text-[#f9ecd3] text-sm">
              To create a healthier Africa where the incidence of genetic
              diseases is drastically reduced, ensuring that every child born
              has the opportunity to live a healthy, fulfilling life. We
              envision a future where the burden of genetic diseases is no
              longer a barrier to the wellbeing and prosperity of African
              communities.
            </p>
          </div>

          <div className="vision hidden xl:flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <h4 className="text-white text-4xl xl:text-5xl font-bold">
                Values
              </h4>
              <PiListHeartFill size={30} className="text-white md:scale-150" />
            </div>
            <p className="text-[#fafaf5] text-sm">
              To create a healthier Africa where the incidence of genetic
              diseases is drastically reduced, ensuring that every child born
              has the opportunity to live a healthy, fulfilling life. We
              envision a future where the burden of genetic diseases is no
              longer a barrier to the wellbeing and prosperity of African
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
