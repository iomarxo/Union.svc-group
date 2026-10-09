import React from 'react';
import { Hexagon, Triangle, Command, Activity, Box, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Acme Corp', icon: Hexagon },
  { name: 'Prism', icon: Triangle },
  { name: 'Command', icon: Command },
  { name: 'Pulse', icon: Activity },
  { name: 'Block', icon: Box },
  { name: 'Global', icon: Globe },
];

export const LogoMarquee: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8 }}
      className="py-12 border-b border-neutral-200 bg-white relative overflow-hidden pause-on-hover"
    >
      {/* Fade Masks */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex animate-scroll hover:pause">
        {/* Set 1 */}
        <div className="flex items-center gap-16 px-8 min-w-max">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={`p1-${index}`}
                className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <IconComponent size={24} strokeWidth={1.5} />
                <span className="font-semibold tracking-tight text-lg select-none">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Set 2 (Duplicate for smooth loop) */}
        <div className="flex items-center gap-16 px-8 min-w-max" aria-hidden="true">
          {partners.map((partner, index) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={`p2-${index}`}
                className="flex items-center gap-2 text-neutral-400 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <IconComponent size={24} strokeWidth={1.5} />
                <span className="font-semibold tracking-tight text-lg select-none">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
