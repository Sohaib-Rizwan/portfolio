import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';
import { SiTypescript, SiMongodb } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';
import { FaWordpress } from 'react-icons/fa';
import { FaElementor } from 'react-icons/fa6';
import { SiNestjs } from "react-icons/si";
import Image from 'next/image'; // Next.js's Image component to load SVG

interface StackItem {
  id: number;
  name: string;
  icon: React.ComponentType | string;
  color: string;
}

const stackItems: StackItem[] = [
  { id: 1, name: 'React', icon: FaReact, color: '#61DAFB' },
  { id: 2, name: 'Node.js', icon: IoLogoNodejs, color: '#339933' },
  { id: 3, name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
  { id: 4, name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { id: 5, name: 'Next.js', icon: RiNextjsFill, color: '#000000' },
  { id: 6, name: 'Wordpress', icon: FaWordpress, color: '#21759B' },
  { id: 7, name: 'Elementor', icon: FaElementor, color: '#92003B' },
  { id: 8, name: 'Nestjs',  icon:  SiNestjs, color : '#E0234E' }, // Nest.js icon as SVG
];

export const Stack: React.FC = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-4xl text-white font-bold mb-8">My Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stackItems.map((item) => (
            <div key={item.id} className="flex flex-col items-center bg-white/10 p-6 rounded-xl shadow-md hover:scale-105 transition-transform">
              {typeof item.icon === 'string' ? (
                <Image src={item.icon} alt={item.name} width={60} height={60} className="mb-4" />
              ) : (
                <item.icon className="w-16 h-16 mb-4" style={{ color: item.color }} />
              )}
              <p className="text-white font-medium text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
