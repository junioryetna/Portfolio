import React from 'react';
import { Dots } from './ui/Dots';
import { MessageSquare, Mail, Coffee, CreditCard } from 'lucide-react';
export function ContactSection() {
  return (
    <section
      id="contacts"
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32">

      {/* Decorative Dots */}
      <div className="absolute top-40 -left-10 hidden lg:block">
        <Dots rows={5} cols={2} />
      </div>

      {/* Page Header */}
      <div className="mb-16">
        <h1 className="text-3xl text-white font-medium mb-4">
          <span className="text-[#C778DD]">/</span>contacts
        </h1>
        <p className="text-[#ABB2BF]">May 2023</p>
      </div>

      {/* Contact Text + Boxes */}
      <div className="flex flex-col md:flex-row gap-12 mt-12">
        {/* Text Content */}
        <div className="flex-1">
          <p className="text-[#ABB2BF] max-w-md">
            I'm interested in freelance opportunities. However, if you have
            other request or question, don't hesitate to contact me
          </p>
        </div>

        {/* Contact Boxes */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4 justify-start md:justify-end">
          {/* Support my Work */}
          <div className="border border-[#ABB2BF] p-4 bg-[#282C33]">
            <h3 className="text-white font-medium mb-4">Support my Work</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-colors">

                <Coffee className="w-5 h-5" />
                <span>Buy me a coffee</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-colors">

                <CreditCard className="w-5 h-5" />
                <span>Sponsor on GitHub</span>
              </a>
            </div>
          </div>

          {/* Message Me Here */}
          <div className="border border-[#ABB2BF] p-4 bg-[#282C33]">
            <h3 className="text-white font-medium mb-4">Message Me Here</h3>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-colors">

                <MessageSquare className="w-5 h-5" />
                <span>!julien#3519</span>
              </a>
              <a
                href="mailto:juliodifat55@gmail.com"
                className="flex items-center gap-2 text-[#ABB2BF] hover:text-white transition-colors">

                <Mail className="w-5 h-5" />
                <span>juliodifat55@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Kell-Media Section */}
      <div className="mt-24">
        <h2 className="text-2xl text-white font-medium mb-6">
          <span className="text-[#C778DD]">#</span>kell-media
        </h2>
        <div className="flex items-center gap-3">
          <span className="border border-[#ABB2BF] px-3 py-1 text-[#ABB2BF] text-sm">
            #kell
          </span>
          <span className="border border-[#ABB2BF] px-3 py-1 text-[#ABB2BF] text-sm">
            #media
          </span>
        </div>
      </div>
    </section>);

}