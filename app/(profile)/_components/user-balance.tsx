"use client";

import { Asterisk, DollarSign, EyeOff, EyeOffIcon } from "lucide-react";
import { EyeOpenIcon } from "@radix-ui/react-icons";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";
import { useState } from "react";

const font = Montserrat({ subsets: ["latin"] });

type Props = {
    balance: any;
}

export const UserBalance = ({
    balance
}: Props) => {

    const [showBalance, setShowBalance] = useState(false);
    const totalBalance = parseFloat(balance).toFixed(2);
    const balanceString = totalBalance.toString();

    const renderAsterisks = () => {
        const asterisks = [];
        for (let i = 0; i < balanceString.length; i++) {
            asterisks.push(<Asterisk className="w-4 h-4 stroke-[3]" key={i} />);
        }
        return asterisks;
    };

    return (
        <div className="w-full flex items-center justify-between bg-green-100 p-1">
            <div className="flex flex-col">
                <h4 className="font-bold text-sm">
                    Balance
                </h4>
                <div className="flex items-center">
                    {showBalance ?
                        <>
                            <DollarSign className="w-4 h-4 stroke-[3] " />
                            <p className={cn(
                                "font-bold text-xl",
                                font.className
                            )}>
                                {totalBalance}
                            </p>
                        </> :
                        <div className="flex items-center -space-x-1">
                            {renderAsterisks()}
                        </div>
                    }
                </div>
            </div>
            <div
                onClick={() => setShowBalance(!showBalance)}
                className="cursor-pointer"
            >
                {showBalance ?
                    <EyeOpenIcon
                        className="w-4 h-4 stroke-[3]"
                    /> :
                    <EyeOffIcon
                        className="w-4 h-4 stroke-[3]"
                    />
                }
            </div>
        </div >
    );
};
