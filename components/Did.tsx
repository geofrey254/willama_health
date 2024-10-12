"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { KNOW } from "@/constants";

function Did() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="w-full bg-[#214842fa] flex justify-center items-center p-8 h-[90vh]">
      <div className="container flex flex-col justify-center items-center">
        <div className="headd text-[#214842fa] mb-8">
          <h3 className="text-white text-4xl md:text-6xl font-bold">
            Did you know ?
          </h3>
        </div>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-7xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {KNOW.map((know, id) => (
              <CarouselItem key={id}>
                <div className="p-1">
                  <Card className="h-[40vh] text-center flex justify-center items-center shadow-inner shadow-[#214842fa]">
                    <CardHeader className="flex gap-6">
                      <CardTitle className="text-3xl md:text-5xl font-bold text-[#efc368]">
                        {know.name}
                      </CardTitle>
                      <CardDescription className="text-[#214842fa]">
                        {know.description}
                      </CardDescription>
                    </CardHeader>{" "}
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}

export default Did;
