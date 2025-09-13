import React, { useEffect, useState } from 'react';

const PerformanceMonitor = () => {
  const [fps, setFps] = useState(60);
  const [mem, setMem] = useState(null);

  useEffect(() => {
    let animationId;
    let last = performance.now();
    let frames = 0;

    const loop = (now) => {
      frames += 1;
      if (now - last >= 1000) {
        setFps(frames);
        frames = 0;
        last = now;
        if (performance && performance.memory) {
          const { usedJSHeapSize, jsHeapSizeLimit } = performance.memory;
          const usedMB = usedJSHeapSize / (1024 * 1024);
          const limitMB = jsHeapSizeLimit / (1024 * 1024);
          setMem(`${usedMB.toFixed(0)} / ${limitMB.toFixed(0)} MB`);
        }
      }
      animationId = requestAnimationFrame(loop);
    };

    animationId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed bottom-2 left-2 z-50 px-2 py-1 rounded bg-black/50 text-white text-[10px] leading-none border border-white/10">
      <div>FPS: {fps}</div>
      {mem && <div>Mem: {mem}</div>}
    </div>
  );
};

export default PerformanceMonitor;