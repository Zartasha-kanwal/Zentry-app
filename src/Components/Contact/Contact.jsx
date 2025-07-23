import React from "react";
import img from "../Assests/img/contact-1.webp";
import img2 from "../Assests/img/contact-2.webp";
import swordman_partial from '../Assests/img/swordman-partial.webp';
import swordman from '../Assests/img/swordman.webp';
import Button from "../Button/Button";

const ImgClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} />
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImgClipBox clipClass="contact-clip-path-1" src={img} />
           <ImgClipBox clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" src={img2} />
        </div>


        <div className="absolute -top-40 left-20  w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImgClipBox clipClass="absolute md:scale-125" src={swordman_partial} />
           <ImgClipBox clipClass="sword-man-clip-path md:scale-125" src={swordman} />

        </div>


        <div className="flex flex-col items-center text-center">
            <p className="font-general text-[10px] uppercase"> join Zentry</p>
            <p className="special-font font-zentry mt-10 w-full text-5xl leading-[0.9] md:text-[6rem]">Lets b<b>u</b>ild the<br></br> er<b>a</b> of n<b>e</b>w<br></br> ga<b>m</b>ing to<b>g</b>ether</p>
            <Button title="Contact us"
            containerClass='mt-10 cursor-pointer bg-blue-50'
            
            />

        </div>

        
      </div>
    </div>
  );
};

export default Contact;
