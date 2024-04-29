"use client";

import React, { createContext, useContext, useState } from "react";

const TitleContext = createContext<string | any>(undefined);

export const useTitle = () => useContext(TitleContext)

export const TitleProvider = ({
    children
}: {
    children: React.ReactNode
}) => {
    const [title, setTitle] = useState("");

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            {children}
        </TitleContext.Provider>
    );
};