import React from 'react';
import { Button } from './ui/Button';
import images from '../images/Image.png';
import { Dots } from './ui/Dots';
export function Hero() {
  return (
    <section
      id="home"
      className="pt-32 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center">

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-white">
            Jules is a <span className="text-[#C778DD]">web designer</span> and{' '}
            <span className="text-[#C778DD]">full-stack developer</span>
          </h1>
          <p className="text-[#ABB2BF] text-lg max-w-lg">
            He crafts responsive websites where technologies meet creativity
          </p>
          <Button variant="primary" className="mt-4">
            Contact me !!
          </Button>
        </div>

        {/* Hero Graphic / Image Area */}
        <div className="flex-1 relative flex justify-center items-center">
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 z-0">
            <Dots rows={5} cols={5} className="text-[#C778DD]" />
          </div>

          {/* Main Image/Graphic Placeholder */}
          <div className="relative z-10 w-64 h-80 md:w-80 md:h-96 border-b border-[#C778DD] flex flex-col items-center justify-end">
            {/* Abstract hacker silhouette representation using CSS shapes or a placeholder image */}
            <img
              src={images}
              alt="Hacker aesthetic"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />


            {/* Status Badge */}
            <div className="absolute -bottom-4 bg-[#282C33] border border-[#ABB2BF] px-4 py-2 flex items-center gap-2 w-max max-w-full">
              <div className="w-3 h-3 bg-[#C778DD] border border-[#C778DD]"></div>
              <span className="text-sm text-[#ABB2BF]">
                Currently working on{' '}
                <span className="text-white font-medium">Portfolio</span>
              </span>
            </div>
          </div>

          {/* More Decorative Elements */}
          <div className="absolute bottom-20 right-0 z-0">
            <Dots rows={4} cols={5} />
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="mt-32 flex justify-center relative">
        <div className="relative inline-block">
          {/* Top Left Bracket */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#ABB2BF]"></div>

          <div className="border border-[#ABB2BF] p-6 bg-[#282C33] relative z-10">
            <p className="text-xl text-white font-medium">
              With great power comes great electricity bill
            </p>
          </div>

          {/* Bottom Right Bracket */}
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#ABB2BF]"></div>

          {/* Author Tag */}
          <div className="absolute -bottom-10 right-0 border border-[#ABB2BF] p-4 bg-[#282C33]">
            <p className="text-white">- Dr. Who</p>
          </div>
        </div>
      </div>
    </section>);

}