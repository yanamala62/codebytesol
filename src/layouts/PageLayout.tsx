import { useEffect, type ReactNode } from 'react';
import Header from '../components/feature/Header';
import Footer from '../components/feature/Footer';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

/**
 * Full-width page wrapper: sticky Header + 100% main + Footer.
 * Used by every non-home page.
 */
export default function PageLayout({ children, title }: PageLayoutProps) {
  useEffect(() => {
    if (title) document.title = `${title} | CodeByteSol`;
  }, [title]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-bg-primary text-text-primary">
      <Header />
      <main className="flex-1 w-full pt-[80px]">{children}</main>
      <Footer />
    </div>
  );
}
