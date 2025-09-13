import React from 'react';

const Entry = ({ title, meta, period, bullets }) => (
  <div className="relative pl-6">
    <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary"></div>
    <div className="bg-ghost border border-primary/20 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className="text-xs text-gray-600">{period}</span>
      </div>
      {meta && <div className="text-sm text-gray-600 mb-2">{meta}</div>}
      {bullets && bullets.length > 0 && (
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      )}
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div className="space-y-4">
      <Entry
        title="Texas A&M University–Corpus Christi"
        meta="B.S. Mechanical Engineering"
        period="Expected May 2027"
      />
      <Entry
        title="Port Lavaca Auto Group — Head Porter"
        period="May 2024 — Aug 2024"
        bullets={["Managed personnel and stock to improve workflow and quality.", "Delivered vehicles; maintained organization across departments."]}
      />
      <Entry
        title="Domino’s — Delivery Driver"
        period="June 2025 — Present"
        bullets={["On-time, accurate deliveries with excellent customer service.", "Handled high-volume orders under pressure."]}
      />
    </div>
  );
};

export default Timeline;


