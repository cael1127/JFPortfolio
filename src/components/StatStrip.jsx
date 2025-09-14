import React from 'react';

const Stat = ({ label, value }) => (
  <div className="flex-1 min-w-[150px] text-center">
    <div className="text-xs text-gray-600 tracking-wide mb-1">{label}</div>
    <div className="text-sm sm:text-lg font-semibold text-gray-800 break-words">{value}</div>
  </div>
);

const StatStrip = () => {
  return (
    <div className="w-full bg-ghost/80 border border-primary/20 rounded-xl px-3 sm:px-4 py-3 flex flex-wrap gap-3 items-center justify-between">
      <Stat label="3D Design" value="SolidWorks, Fusion 360, Onshape" />
      <Stat label="Engineering Analysis" value="Strength and fluid simulations; clear dimensions and tolerances" />
      <Stat label="Manufacturing" value="Machining and sheet‑metal work" />
      <Stat label="Certifications" value="Construction training, ServSafe" />
    </div>
  );
};

export default StatStrip;


