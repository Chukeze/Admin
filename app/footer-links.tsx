'use client'

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

const link = {
    url:'',
    href: '',
    name:'',
}

export default function FooterLinks() {
    const pathname = usePathname();
  return (
    <Link key={link.url}
    href={link.href}
        className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-300 p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-600 md:flex-none md:justify-start md:p-2 md:px-3",
        {
            'bg-sky-100 text-blue-350': pathname === link.href,
        }, )}>
        <p className="hidden md:block">{link.name}</p>
    </Link>
  )
}