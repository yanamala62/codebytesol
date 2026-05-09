import { Link } from 'react-router-dom';
import type { NavItem } from '../../data/navData';

interface MobileAccordionProps {
  label: string;
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

/** Accordion section used inside the mobile navigation menu. */
export default function MobileAccordion({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}: MobileAccordionProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-base font-medium text-gray-700 hover:text-[var(--color-primary-500)] transition-colors duration-300 cursor-pointer py-2"
      >
        {label}
        <i className={`ri-arrow-down-s-line transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="pl-4 mt-2 space-y-2">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              onClick={onClose}
              className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-[var(--color-primary-500)] transition-colors duration-300 cursor-pointer"
            >
              <i className={`${item.icon} text-lg`} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
