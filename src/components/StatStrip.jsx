import React from 'react';

const Stat = ({ label, value }) => (
  <div className="flex-1 text-center">
    <div className="text-xs text-gray-600 tracking-wide mb-1">{label}</div>
    <div className="text-base sm:text-lg font-semibold text-gray-800">{value}</div>
  </div>
);

const StatStrip = () => {
  return (
    <div className="w-full bg-ghost/80 border border-primary/20 rounded-xl px-4 py-3 flex gap-3 items-center justify-between">
      <Stat label="CAD" value="SolidWorks, Fusion 360, Onshape" />
      <Stat label="Analysis" value="FEA, CFD, GD&T" />
      <Stat label="Manufacturing" value="CNC, sheet metal" />
      <Stat label="Certifications" value="NCCER, ServSafe" />
    </div>
  );
};

export default StatStrip;


