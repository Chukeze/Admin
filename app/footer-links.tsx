'use client'

import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from "next/navigation";

type linkProps = {
    url:string,
    href:string,
    name:string,
}

export default function FooterLinks(props:linkProps) {
    const pathname = usePathname();
  return (
    <Link 
      key={props.url}
      href={props.href}
      className={clsx("flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-slate-300 p-3 text-sm font-medium hover:bg-sky-100 hover:text-slate-600 md:flex-none md:justify-start md:p-2 md:px-3",
        {
            'bg-sky-100 text-blue-350': pathname === props.href,
        }, )}
      >
        <p className="hidden md:block">{props.name}</p>
    </Link>
  )
}