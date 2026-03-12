import React from 'react';
import { Button } from './ui/Button';
import { Dots } from './ui/Dots';
const completeApps = [
{
  title: 'ChertNodes',
  tech: 'HTML SCSS Python Flask',
  description: 'Minecraft servers hosting',
  imageBg: 'bg-[#1a1a2e]',
  imageText: 'ChertNodes',
  buttons: [
  {
    label: 'Live <~>',
    variant: 'primary' as const
  },
  {
    label: 'Cached >=',
    variant: 'outline' as const
  }]

},
{
  title: 'Kahoot Answers Viewer',
  tech: 'CSS Express Node.js',
  description: 'Get answers to your kahoot quiz',
  imageBg: 'bg-[#4B23A8]',
  imageText: 'Kahoot Answers',
  buttons: [
  {
    label: 'Live <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'ProtectX',
  tech: 'React Express Discord.js Node.js',
  description: 'Discord anti-crash bot',
  imageBg: 'bg-[#1E1E1E]',
  imageText: 'ProtectX',
  buttons: [
  {
    label: 'Cached >=',
    variant: 'outline' as const
  }]

},
{
  title: 'Kotik Bot',
  tech: 'HTML CSS JS',
  description: 'Multi-functional discord bot',
  imageBg: 'bg-[#1a1a2e]',
  imageText: 'Kotik Bot',
  buttons: [
  {
    label: 'Live <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'Portfolio',
  tech: 'Vue TS Less',
  description: "You're using it rn",
  imageBg: 'bg-[#1a1a2e]',
  imageText: 'Elias Portfolio',
  buttons: [
  {
    label: 'Github <~>',
    variant: 'primary' as const
  }]

}];

const smallProjects = [
{
  title: 'Bot boilerplate',
  tech: 'Discord.js TS JS',
  description:
  'Start creating scalable discord.js bot with typescript in seconds',
  buttons: [
  {
    label: 'Github <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'My blog',
  tech: 'VUE CSS JS',
  description: 'Front-end of my future blog website written in vue',
  buttons: [
  {
    label: 'Github <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'Chess pro',
  tech: 'Figma',
  description:
  'Figma landing page about service for viewing chess tournaments',
  buttons: [
  {
    label: 'Figma <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'Crash protect website',
  tech: 'Figma',
  description:
  'Figma template for website about anti-raid, anti-crash discord bot',
  buttons: [
  {
    label: 'Figma <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'CSS experiments',
  tech: 'HTML CSS',
  description: 'Collection of my different little projects in css',
  buttons: [
  {
    label: 'Live <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'Web Dev nvim config',
  tech: 'Lua ReactUI',
  description: 'Config for neovim perfect for web developer',
  buttons: [
  {
    label: 'Github <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'Ooku',
  tech: 'Python Quart HTML',
  description: 'Simple link shortener with auth',
  buttons: [
  {
    label: 'Live <~>',
    variant: 'primary' as const
  }]

},
{
  title: 'School website',
  tech: 'Figma',
  description: 'Figma template website for my school',
  buttons: [
  {
    label: 'Figma <~>',
    variant: 'primary' as const
  }]

}];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-32">

      {/* Decorative Elements */}
      <div className="absolute top-40 -right-20 w-32 h-32 border border-[#ABB2BF] opacity-20 hidden lg:block"></div>
      <div className="absolute top-96 -left-10 hidden lg:block">
        <Dots rows={5} cols={2} />
      </div>
      <div className="absolute bottom-40 -right-10 hidden lg:block">
        <Dots rows={5} cols={4} />
      </div>
      <div className="absolute bottom-80 -left-10 hidden lg:block">
        <Dots rows={4} cols={2} />
      </div>

      {/* Page Header */}
      <div className="mb-16">
        <h1 className="text-3xl text-white font-medium mb-4">
          <span className="text-[#C778DD]">/</span>projects
        </h1>
        <p className="text-[#ABB2BF]">List of my projects</p>
      </div>

      {/* Complete Apps Section */}
      <div className="mb-20">
        <h2 className="text-2xl text-white font-medium mb-8">
          <span className="text-[#C778DD]">#</span>complete-apps
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completeApps.map((project, index) =>
          <div
            key={index}
            className="border border-[#ABB2BF] flex flex-col bg-[#282C33]">

              {/* Project Image Placeholder */}
              <div
              className={`h-48 border-b border-[#ABB2BF] flex items-center justify-center ${project.imageBg}`}>

                <span className="text-white text-xl font-bold opacity-80">
                  {project.imageText}
                </span>
              </div>

              {/* Tech Stack */}
              <div className="p-2 border-b border-[#ABB2BF] text-[#ABB2BF] text-sm">
                {project.tech}
              </div>

              {/* Content */}
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-2xl text-white font-medium mb-4">
                  {project.title}
                </h3>
                <p className="text-[#ABB2BF] mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">
                  {project.buttons.map((btn, btnIndex) =>
                <Button
                  key={btnIndex}
                  variant={btn.variant}
                  className="py-1 px-4">

                      {btn.label}
                    </Button>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Small Projects Section */}
      <div>
        <h2 className="text-2xl text-white font-medium mb-8">
          <span className="text-[#C778DD]">#</span>small-projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {smallProjects.map((project, index) =>
          <div
            key={index}
            className="border border-[#ABB2BF] flex flex-col bg-[#282C33]">

              {/* Tech Stack (No Image for small projects) */}
              <div className="p-2 border-b border-[#ABB2BF] text-[#ABB2BF] text-sm">
                {project.tech}
              </div>

              {/* Content */}
              <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-2xl text-white font-medium mb-4">
                  {project.title}
                </h3>
                <p className="text-[#ABB2BF] mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-4 mt-auto">
                  {project.buttons.map((btn, btnIndex) =>
                <Button
                  key={btnIndex}
                  variant={btn.variant}
                  className="py-1 px-4">

                      {btn.label}
                    </Button>
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}