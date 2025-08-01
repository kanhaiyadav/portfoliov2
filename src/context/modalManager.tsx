/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";

export interface ModalContextType {
    type: string | null;
    setType: (type: string | null) => void;
    data: any;
    setData: (data: any) => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [type, setType] = useState<string | null>(null);
    const [data, setData] = useState<any>(null);

    return (
        <ModalContext.Provider value={{ type, setType, data, setData }}>
            {children}
        </ModalContext.Provider>
    );
};

