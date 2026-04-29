'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, History, Heart } from 'lucide-react';

const tabData = [
  {
    key: 'mission',
    label: 'Our Mission',
    icon: Target,
    content: 'Our mission is to deliver outstanding, innovative construction solutions that consistently exceed expectations. We combine technical expertise with creative problem-solving to create spaces that inspire and endure.',
  },
  {
    key: 'history',
    label: 'Our History',
    icon: History,
    content: "Founded in 2012, we've grown from a small local contractor to a leading regional construction firm. Our journey has been marked by landmark projects, continuous innovation, and an unwavering commitment to quality.",
  },
  {
    key: 'values',
    label: 'Our Values',
    icon: Heart,
    content: 'Integrity, excellence, and innovation form the cornerstone of our operations. We believe in sustainable practices, fostering strong relationships, and creating lasting value for our clients and communities.',
  },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="flex flex-col gap-3">
      {tabData.map((tab) => {
        const isActive = activeTab === tab.key;
        const Icon = tab.icon;

        return (
          <div
            key={tab.key}
            className={`rounded-xl border transition-all duration-300 cursor-pointer ${
              isActive
                ? 'border-amber-600/30 bg-amber-50/50 dark:bg-amber-950/20 shadow-sm'
                : 'border-border/50 bg-card hover:border-border'
            }`}
            onClick={() => setActiveTab(isActive ? null : tab.key)}
          >
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-amber-600 text-white' : 'bg-muted text-muted-foreground'} transition-colors`}>
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{tab.label}</h3>
              </div>
              <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`} />
            </div>

            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {tab.content}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default AboutTabs;
