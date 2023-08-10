"use client"; // this is a client component
import React from 'react';
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

interface IframeComponentProps {
  url?: string;
}

const CarComponent: React.FC<IframeComponentProps> = ({ url }) => {
  return (
    <section id="car" className="w-full h-screen flex gap-10 flex-col justify-center items-center">
     <h1 className="text-center font-bold text-4xl">
          No Div CAR (CSS Only)
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
      <iframe
        src={url}
        className="w-full h-full border-none"
        title="Harsh Car"
      />
           <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          className="noBlackShadow"
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default CarComponent;
