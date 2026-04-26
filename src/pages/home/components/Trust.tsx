import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../../store/hooks';

interface ScrollTrackProps {
  images: string[];
  direction: 'ltr' | 'rtl';
}

function ScrollTrack({ images, direction }: ScrollTrackProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let pos = direction === 'rtl' ? container.scrollWidth / 2 : 0;
    container.scrollLeft = pos;
    let frameId: number;
    const animate = () => {
      if (!container) return;
      if (direction === 'rtl') {
        pos -= 0.5;
        if (pos <= 0) pos = container.scrollWidth / 2;
      } else {
        pos += 0.5;
        if (pos >= container.scrollWidth / 2) pos = 0;
      }
      container.scrollLeft = pos;
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [direction]);

  const doubled = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div ref={ref} className="flex items-center gap-6 overflow-hidden whitespace-nowrap" style={{ scrollBehavior: 'auto' }}>
        {doubled.map((file, i) => (
          <div key={i} className="flex-shrink-0 px-2">
            <img src={encodeURI(`/assets/${file}`)} alt={`Partner ${i}`}
              className="h-14 md:h-16 lg:h-20 w-28 md:w-32 lg:w-36 object-contain mix-blend-multiply" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Trust() {
  const trustImages = useAppSelector((s) => s.content.data?.trustImages ?? []);
  const mid = Math.ceil(trustImages.length / 2);

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="w-full px-6 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
        </div>
        <div className="space-y-8">
          <ScrollTrack images={trustImages.slice(0, mid)} direction="rtl" />
          <ScrollTrack images={trustImages.slice(mid)}    direction="ltr" />
        </div>
      </div>
    </section>
  );
}
