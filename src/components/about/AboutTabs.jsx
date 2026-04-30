'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Eye, Target, Crosshair, Heart } from 'lucide-react';

const tabData = [
  {
    key: 'vision',
    label: 'Our Vision',
    icon: Eye,
    content: 'To make Transnamic Logistics a key partner in integrated logistics and infrastructure in East and Central Africa, offering a higher quality of goods & service.',
  },
  {
    key: 'mission',
    label: 'Our Mission',
    icon: Target,
    content: 'To provide top quality transport and logistics services and construction material at cost-effective prices, enabling us to deliver consistent value and dependability to all our customers, large and small.',
  },
  {
    key: 'aim',
    label: 'Our Aim',
    icon: Crosshair,
    content: 'To exceed the expectations of our customers through total quality management. Our objective is to provide cost-effective and reliable solutions to help our customers realize their goals.',
  },
  {
    key: 'values',
    label: 'Core Values',
    icon: Heart,
    content: 'Purpose & Growth, Customer Commitment, Professional Standards, Health & Safety, Accountability, and Good Business Relations — these principles guide every project and partnership we undertake.',
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
                ? 'border-red-700/30 bg-red-50/50 dark:bg-red-950/20 shadow-sm'
                : 'border-border/50 bg-card hover:border-border'
            }`}
            onClick={() => setActiveTab(isActive ? null : tab.key)}
          >
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${isActive ? 'bg-red-700 text-white' : 'bg-muted text-muted-foreground'} transition-colors`}>
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
