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
              Willama Health Technology
            </h2>
          </div>
          <p className="text-[#214842a5] text-lg">
            Wilama Health is a medical tech social enterprise focused on
            preventing recessive genetic diseases in Africa through affordable,
            AI-powered testing solutions. It aims to reduce the prevalence of
            conditions like sickle cell anemia and hemophilia by 50% by 2035 and
            80% by 2050.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="/"
              className="bg-[#efc368] p-4 rounded-full font-bold text-[#214842]"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="col-span-2 right hidden md:flex">
          <Image
            src="/img/dnatech.png"
            width={500}
            height={500}
            alt="dna illustration"
            className="w-[500px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
