import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r py-8 from-gray-200 to-slate-700 mb-8 rounded-xl">
      <div className="mx-auto px-8  flex flex-col gap-2 sm:flex-row justify-between">
        <div className="mb-8 sm:mb-0 text-center py-12">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            Discover new latest <br />
            collections
          </h1>
        </div>
          <div className=" md:w-1/3 h-1/3  relative aspect-video flex items-center">
            <Image src="/images/model.jpg" fill alt="Banner Image" />
          </div>
      </div>
    </div>
  );
};

export default Banner;
