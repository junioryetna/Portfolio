import React from 'react';
import { Dots } from './ui/Dots';
const skills = [
{
  category: 'Languages',
  items: ['TypeScript', 'Lua', 'Python', 'JavaScript']
},
{
  category: 'Databases',
  items: ['SQLite', 'PostgreSQL', 'Mongo']
},
{
  category: 'Tools',
  items: [
  'VSCode',
  'Neovim',
  'Linux',
  'Figma',
  'XFCE',
  'Arch',
  'Git',
  'Font Awesome']

},
{
  category: 'Other',
  items: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja']
},
{
  category: 'Frameworks',
  items: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js']
}];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32">

      {/* Page Header */}
      <div className="mb-16">
        <h1 className="text-3xl text-white font-medium mb-4">
          <span className="text-[#C778DD]">/</span>skills
        </h1>
        <p className="text-[#ABB2BF]">My technical skills</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        {/* Decorative Left Side */}
        <div className="hidden lg:flex flex-1 relative min-h-[300px] items-center justify-center">
          <div className="absolute top-0 left-10">
            <Dots rows={5} cols={5} />
          </div>
          <div className="absolute bottom-10 left-32">
            <Dots rows={5} cols={5} />
          </div>
          <div className="absolute top-20 right-20 w-20 h-20 border border-[#ABB2BF] opacity-50"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 border border-[#C778DD] opacity-50"></div>
        </div>

        {/* Skills Grid */}
        <div className="flex-[2] flex flex-wrap gap-4 justify-end items-start content-start">
          {skills.map((skillGroup, index) =>
          <div
            key={index}
            className="border border-[#ABB2BF] w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] bg-[#282C33]">

              <div className="p-2 border-b border-[#ABB2BF] text-white font-medium">
                {skillGroup.category}
              </div>
              <div className="p-2 text-[#ABB2BF] flex flex-wrap gap-x-2 gap-y-1">
                {skillGroup.items.map((item, i) =>
              <span key={i}>{item}</span>
              )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}