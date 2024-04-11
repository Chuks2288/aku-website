"use client";

import Link from 'next/link';
import { Icon } from '@iconify/react';

import { Logo } from "./logo";
import { socialIcons } from '@/constant';


export const SocialIcons = () => {
    return (
        <div className="space-y-4 flex flex-col">
            <Logo
                width={100}
                height={50}
            />
            <h3 className=''>
                Stay Updated
            </h3>
            <div className="flex items-center gap-x-3">
                {socialIcons.map((icon) => (
                    <Link
                        href={icon.href}
                        key={icon.href}
                        className="text-blue-700"
                    >
                        <Icon icon={icon.icon} fontSize="25px" />
                    </Link>
                ))}
            </div>
        </div>
    )
}

