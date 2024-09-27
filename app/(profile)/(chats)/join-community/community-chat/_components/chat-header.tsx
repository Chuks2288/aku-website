"use client";

import { useTitle } from '@/hooks/use-title'
import { useEffect } from 'react'


type Props = {
    name: string;
}

export const ChatHeader = ({
    name
}: Props) => {

    const { setTitle } = useTitle();

    useEffect(() => {
        setTitle(name);
    }, [name, setTitle]);
    return null
}

