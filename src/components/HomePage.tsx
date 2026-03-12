import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from './Hero';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Dots } from './ui/Dots';
import image1 from '../images/Image-1.png';
import { MessageSquare, Mail } from 'lucide-react';
const previewProjects = [
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
  title: 'ProtectX',
  tech: 'React Express Discord.js Node.js',
  description: 'Discord anti-crash bot',
  imageBg: 'bg-[#1E1E1E]',
  imageText: 'ProtectX',
  buttons: [
  {
    label: 'Live <~>',
    variant: 'primary' as const
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

}];

const skillsLeft = [
{
  category: 'Languages',
  items: ['TypeScript', 'JavaScript']
}];

const skillsCenter = [
{
  category: 'Databases',
  items: ['SQLite', 'MySQL']
},
{
  category: 'Other',
  items: ['HTML EJS SCSS', 'tailwind']
}];

const skillsRight = [
{
  category: 'Tools',
  items: ['VSCode Linux', 'XFCE Arch', 'Git Font Awesome']
},
{
  category: 'Frameworks',
  items: ['React.js vue.js', 'Discord.js', 'Flask Express.js']
}];

export function HomePage() {
  return (
    <div>
      <Hero />

      {/* Projects Preview Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading title="projects" className="mb-0 flex-grow" />
          <Link
            to="/projects"
            className="text-white hover:text-[#C778DD] transition-colors ml-4 whitespace-nowrap">

            View all ~~&gt;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewProjects.map((project, index) =>
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
      </section>

      {/* Skills Preview Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title="skills" />

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Decorative Left Side */}
          <div className="hidden lg:flex flex-1 relative min-h-[300px] items-center justify-center">
            <div className="absolute top-0 left-10">
              <Dots rows={5} cols={5} />
            </div>
            <div className="absolute bottom-10 left-32">
              <Dots rows={5} cols={5} />
            </div>
            <div className="absolute top-10 right-20 w-16 h-16 border border-[#ABB2BF] opacity-50"></div>
            <div className="absolute bottom-10 right-10 w-12 h-12 border border-[#ABB2BF] opacity-50"></div>

            {/* Overlapping Squares */}
            <div className="absolute bottom-0 left-10 w-24 h-24">
              <div className="absolute top-0 right-0 w-16 h-16 border border-[#C778DD]"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border border-[#C778DD]"></div>
            </div>
          </div>

          {/* Skills Grid Layout matching the image */}
          <div className="flex-[2] flex flex-wrap lg:flex-nowrap gap-4 justify-end items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-4 w-full sm:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1">
              {skillsLeft.map((skillGroup, index) =>
              <div
                key={index}
                className="border border-[#ABB2BF] bg-[#282C33]">

                  <div className="p-2 border-b border-[#ABB2BF] text-white font-medium">
                    {skillGroup.category}
                  </div>
                  <div className="p-2 text-[#ABB2BF] flex flex-col gap-1">
                    {skillGroup.items.map((item, i) =>
                  <span key={i}>{item}</span>
                  )}
                  </div>
                </div>
              )}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 w-full sm:w-[calc(50%-0.5rem)] lg:w-auto lg:flex-1">
              {skillsCenter.map((skillGroup, index) =>
              <div
                key={index}
                className="border border-[#ABB2BF] bg-[#282C33]">

                  <div className="p-2 border-b border-[#ABB2BF] text-white font-medium">
                    {skillGroup.category}
                  </div>
                  <div className="p-2 text-[#ABB2BF] flex flex-col gap-1">
                    {skillGroup.items.map((item, i) =>
                  <span key={i}>{item}</span>
                  )}
                  </div>
                </div>
              )}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 w-full sm:w-full lg:w-auto lg:flex-1">
              {skillsRight.map((skillGroup, index) =>
              <div
                key={index}
                className="border border-[#ABB2BF] bg-[#282C33]">

                  <div className="p-2 border-b border-[#ABB2BF] text-white font-medium">
                    {skillGroup.category}
                  </div>
                  <div className="p-2 text-[#ABB2BF] flex flex-col gap-1">
                    {skillGroup.items.map((item, i) =>
                  <span key={i}>{item}</span>
                  )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About-Me Preview Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-end mb-12">
          <SectionHeading title="about-me" className="mb-0 flex-grow" />
          <Link
            to="/about-me"
            className="text-white hover:text-[#C778DD] transition-colors ml-4 whitespace-nowrap">

            Read more ~~&gt;
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start mt-8">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <p className="text-[#ABB2BF]">Hello, i'm Jules!</p>
            <p className="text-[#ABB2BF]">
              I'm a self-taught front-end developer based in douala, cameroun. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
            </p>
            <p className="text-[#ABB2BF]">
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <Link to="/about-me">
              <Button variant="primary" className="mt-4">
                Read more -&gt;
              </Button>
            </Link>
          </div>

          {/* Image Area */}
          <div className="flex-1 relative flex justify-center lg:justify-end w-full max-w-md mx-auto md:mx-0">
            <div className="relative z-10 w-full aspect-[3/4] max-w-[350px] border-b border-[#C778DD]">
              <img
                src={image1}
                alt="About me"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity" />

            </div>
            <div className="absolute top-10 right-0 z-20">
              <Dots rows={5} cols={4} className="text-white opacity-30" />
            </div>
            <div className="absolute bottom-20 left-0 z-20">
              <Dots rows={4} cols={5} className="text-white opacity-30" />
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Preview Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute bottom-20 -left-10 hidden lg:block">
          <Dots rows={4} cols={2} />
        </div>

        <SectionHeading title="contacts" />

        <div className="flex flex-col md:flex-row gap-12 mt-8">
          {/* Text Content */}
          <div className="flex-1">
            <p className="text-[#ABB2BF] max-w-md">
              I'm interested in freelance opportunities. However, if you have
              other request or question, don't hesitate to contact me
            </p>
          </div>

          {/* Contact Box */}
          <div className="flex-1 flex justify-start md:justify-end">
            <div className="border border-[#ABB2BF] p-4 bg-[#282C33] inline-block">
              <h3 className="text-white font-medium mb-4">Message me here</h3>
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
      </section>
    </div>);

}