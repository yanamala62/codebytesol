import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { setUseCasesIndex } from '../../../store/slices/uiSlice';
import type { UseCase } from '../../../types';

interface SlideProps { useCase: UseCase; isActive: boolean; onClick?: () => void; }

function UseCaseSlide({ useCase, isActive, onClick }: SlideProps) {
  return (
    <div
      className={`bg-gray-50 rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60 cursor-pointer hover:opacity-80'}`}
      style={{ height: '320px' }}
      onClick={onClick}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        <div className="w-full h-40 lg:h-full">
          <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover object-top" />
        </div>
        <div className="flex flex-col justify-center p-6">
          <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#00C896]/10 to-[#00D9FF]/10 text-[#00C896] rounded-full text-xs font-semibold mb-2 w-fit">
            {useCase.industry}
          </span>
          <h3 className="font-bold text-gray-900 mb-2 text-lg">{useCase.title}</h3>
          <p className="text-gray-600 mb-3 text-sm leading-relaxed">{useCase.description}</p>
          {isActive && (
            <a href={useCase.link} onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00C896] to-[#00D9FF] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 w-fit text-sm">
              Know More <i className="ri-arrow-right-line" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function UseCases() {
  const dispatch = useAppDispatch();
  const useCases = useAppSelector((s) => s.content.data?.useCases ?? []);
  const current  = useAppSelector((s) => s.ui.useCasesIndex);

  if (!useCases.length) return null;

  const total   = useCases.length;
  const prev    = (current - 1 + total) % total;
  const next    = (current + 1) % total;
  const go      = (i: number) => dispatch(setUseCasesIndex(i));

  return (
    <section id="industries" className="w-full py-24 bg-white">
      <div className="w-full px-6 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Industry <span className="bg-gradient-to-r from-[#00C896] to-[#00D9FF] bg-clip-text text-transparent">Use Cases</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Real-world AI implementations across diverse industries</p>
        </div>

        <div className="relative px-16">
          <div className="grid grid-cols-12 gap-6 items-center" style={{ height: '320px' }}>
            <div className="col-span-2 hidden lg:block h-full">
              <UseCaseSlide useCase={useCases[prev]} isActive={false} onClick={() => go(prev)} />
            </div>
            <div className="col-span-12 lg:col-span-8 h-full">
              <UseCaseSlide useCase={useCases[current]} isActive />
            </div>
            <div className="col-span-2 hidden lg:block h-full">
              <UseCaseSlide useCase={useCases[next]} isActive={false} onClick={() => go(next)} />
            </div>
          </div>

          <button onClick={() => go(prev)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white text-[#00C896] rounded-full hover:bg-[#00C896] hover:text-white transition-all duration-200 shadow-lg border border-gray-200 z-10">
            <i className="ri-arrow-left-line text-xl" />
          </button>
          <button onClick={() => go(next)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white text-[#00C896] rounded-full hover:bg-[#00C896] hover:text-white transition-all duration-200 shadow-lg border border-gray-200 z-10">
            <i className="ri-arrow-right-line text-xl" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {useCases.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              className={`h-2.5 rounded-full transition-all duration-200 ${i === current ? 'bg-[#00C896] w-8' : 'bg-gray-300 hover:bg-gray-400 w-2.5'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
