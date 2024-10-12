import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section className="w-full hero flex justify-center items-center p-4 md:p-20 bg-[#fafaf5]">
      <div className="container grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-0 justify-center items-center">
        <div className="col-span-3 flex flex-col gap-8 md:gap-6 mt-8 md:mt-0">
          <div className="flex flex-col justify-start gap-2">
            <h4 className="text-xs text-[#214842fa]">
              - Commited to Transforming Africa Healthcare -
            </h4>
            <h2 className="text-5xl md:text-6xl xl:text-5xl font-extrabold text-[#214842]">
              Wilama Health Technology
            </h2>
          </div>
          <p className="text-[#214842a5] text-lg">
            Wilama Health is a pioneering medical technology social enterprise
            dedicated to transforming healthcare in Africa by focusing on early
            detection and prevention of recessive genetic diseases. Our mission
            is to reduce the prevalence of genetic disorders such as sickle cell
            anemia, thalassemia, haemophilia , albinism, etc., by providing
            accessible, affordable, and innovative testing solutions. We are at
            the forefront of integrating advanced AI technology into our testing
            equipment, enabling accurate, rapid, and easy-to-interpret results,
            even in primary healthcare settings. We aim to significantly reduce
            the number of newborns affected by recessive genetic diseases by 50%
            by 2035 and 80% by 2050.
          </p>
        </div>
        <div className="col-span-2 right hidden md:flex">
          <Image
            src="/img/logo.png"
            width={900}
            height={900}
            alt="dna illustration"
            className="w-[900px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
