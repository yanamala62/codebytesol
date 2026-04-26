import { Link } from 'react-router-dom';
import type { NavItem } from '../../data/navData';

interface MegaMenuProps {
  items: NavItem[];
  isOpen: boolean;
  width?: string;
}

/** Generic mega-menu dropdown rendered by the desktop nav. */
export default function MegaMenu({ items, isOpen, width = '800px' }: MegaMenuProps) {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}
      style={{ width }}
    >
      <div className="p-8">
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#00C896]/10 transition-all duration-300 group/item cursor-pointer"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#00C896]/10 rounded-lg group-hover/item:bg-[#00C896]/20 transition-colors duration-300 flex-shrink-0">
                <i className={`${item.icon} text-2xl text-[#00C896]`} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-gray-900 mb-1 group-hover/item:text-[#00C896] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
