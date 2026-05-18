"use client";

import { AuthStore } from "@/types/stores/auth-store.type";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useAuth } from "@/stores/auth.store";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

type Steps = "EMAIL" | "SIGNUP" | "SIGNIN";

export const LoginAreaDialog: React.FC = () => {
    const auth: AuthStore = useAuth();
    const [step, setStep]: [Steps, Dispatch<SetStateAction<Steps>>] = useState<Steps>("EMAIL");

    const handleOpenChange = (open: boolean): void => {
        auth.setOpen(open);
    }

    const handleBackButton = (): void => {
        setStep("EMAIL");
    }

    return (
        <Dialog
            open={auth.open}
            onOpenChange={handleOpenChange}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2 font-bold">
                        {step !== "EMAIL" && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleBackButton}
                            >
                                <ArrowLeft size={4} />
                            </Button>
                        )}

                        {step === "EMAIL" && "Login / Cadastro"}
                        {step === "SIGNUP" && "Cadastro"}
                        {step === "SIGNIN" && "Login"}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-4">
                    {step === "EMAIL" && (
                        <div>Email</div>
                    )}

                    {step === "SIGNUP" && (
                        <div>Cadastro</div>
                    )}

                    {step === "SIGNIN" && (
                        <div>Login</div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};