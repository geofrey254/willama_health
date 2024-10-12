import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <nav className="w-full bg-[#214842] h-[6vh] md:h-[10vh] flex justify-center items-center">
      <div className="container flex justify-center items-center">
        <Image
          src="/img/logo2.png"
          width={300}
          height={300}
          alt="logo png"
          className="w-[100px]"
        />
      </div>
    </nav>
  );
}

export default Navbar;
