import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={40}
        height={24}
        className="logo-svg"
        priority
      />
    </Link>
  );
}
