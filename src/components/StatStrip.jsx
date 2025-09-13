import React from 'react';

const Stat = ({ label, value }) => (
  <div className="flex-1 text-center">
    <div className="text-2xl font-bold text-primary">{value}</div>
    <div className="text-xs text-gray-600 uppercase tracking-wide">{label}</div>
  </div>
);

const StatStrip = () => {
  return (
    <div className="w-full bg-ghost/80 border border-primary/20 rounded-xl px-4 py-3 flex gap-3 items-center justify-between">
      <Stat label="CAD Tools" value="SolidWorks • Fusion • Onshape" />
      <Stat label="Analysis" value="FEA • CFD • GD&T" />
      <Stat label="Manufacturing" value="CNC • Sheet Metal" />
      <Stat label="Certs" value="NCCER • ServSafe" />
    </div>
  );
};

export default StatStrip;


