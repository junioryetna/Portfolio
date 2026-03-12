import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Instagram } from 'lucide-react';
export function Footer() {
  return (
    <footer className="border-t border-[#ABB2BF] border-opacity-20 pt-8 pb-4 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          {/* Left Side */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <Link to="/" className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-lg">Jules</span>
              </Link>
              <a
                href="mailto:juliodifat55@gmail.com"
                className="text-[#ABB2BF] hover:text-white transition-colors">

                juliodifat55@gmail.com
              </a>
            </div>
            <p className="text-[#ABB2BF]">
              Web designer and full-stack developer
            </p>
          </div>

          {/* Right Side - Media */}
          <div>
            <h3 className="text-white font-medium mb-4 text-xl">Media</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-[#ABB2BF] hover:text-white transition-colors">

                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#ABB2BF] hover:text-white transition-colors">

                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-[#ABB2BF] hover:text-white transition-colors">

                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[#ABB2BF] text-sm">
          © Copyright 2025. Made by Jules
        </div>
      </div>
    </footer>);

}