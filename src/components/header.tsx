'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Logo } from './logo';

export function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <Logo />
        <div className="nav-links">
          <Link href="/cv" className={`nav-link ${pathname === '/cv' ? 'active' : ''}`}>
            CV
          </Link>
          <Link href="/blog" className={`nav-link ${pathname === '/blog' ? 'active' : ''}`}>
            Blog
          </Link>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="nav-link"
            aria-label="Toggle theme"
          >
            {mounted ? (theme === 'dark' ? '🌞' : '🌙') : null}
          </button>
        </div>
      </nav>
    </header>
  );
}
