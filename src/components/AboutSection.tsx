import React from 'react';
import { Dots } from './ui/Dots';
import image from '../images/Image.png';
const funFacts = [
'I like winter more than summer',
'I often bike with my friends',
'I like pizza and pasta',
'I love my country',
'I am a student at university',
'I am still in school',
"I have many brothers and sisters",];


export function AboutSection() {
  return (
    <section
      id="about-me"
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32">

      {/* Page Header */}
      <div className="mb-16">
        <h1 className="text-3xl text-white font-medium mb-4">
          <span className="text-[#C778DD]">/</span>about-me
        </h1>
        <p className="text-[#ABB2BF]">Who am i?</p>
      </div>

      {/* Bio & Image Section */}
      <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <p className="text-[#ABB2BF]">Hello, i'm Jules!</p>
          <p className="text-[#ABB2BF]">
            I'm a self-taught front-end developer based in Douala, cameroun. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className="text-[#ABB2BF]">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
        </div>

        {/* Image Area */}
        <div className="flex-1 relative flex justify-center lg:justify-end w-full max-w-md mx-auto md:mx-0">
          <div className="relative z-10 w-full aspect-[3/4] max-w-[350px] border-b border-[#C778DD]">
            <img
              src={image}
              alt="About me"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />

          </div>

          {/* Decorative Dots over image */}
          <div className="absolute top-10 left-0 lg:left-10 z-20">
            <Dots rows={5} cols={4} className="text-white opacity-30" />
          </div>
          <div className="absolute bottom-20 right-0 lg:-right-4 z-20">
            <Dots rows={4} cols={5} className="text-white opacity-30" />
          </div>
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="relative">
        <h2 className="text-2xl text-white font-medium mb-8">
          <span className="text-[#C778DD]">#</span>my-fun-facts
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Facts Grid */}
          <div className="flex-[2] flex flex-wrap gap-4">
            {funFacts.map((fact, index) =>
            <div
              key={index}
              className="border border-[#ABB2BF] p-2 text-[#ABB2BF] bg-[#282C33]">

                {fact}
              </div>
            )}
          </div>

          {/* Decorative Right Side */}
          <div className="flex-1 relative hidden lg:flex items-center justify-center min-h-[200px]">
            <div className="absolute top-0 left-10">
              <Dots rows={4} cols={4} />
            </div>
            {/* Overlapping Squares */}
            <div className="relative w-24 h-24">
              <div className="absolute top-0 right-0 w-16 h-16 border border-[#C778DD]"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border border-[#C778DD]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}