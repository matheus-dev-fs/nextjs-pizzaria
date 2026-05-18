"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAuth } from "@/stores/auth.store";
import { AuthStore } from "@/types/stores/auth-store.type";

type Props = {
    initialState: boolean;
};

export const LoginAreaButton: React.FC<Props> = ({ initialState }) => {
    const auth: AuthStore = useAuth();
    const [authState, setAuthState]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(initialState);

    useEffect((): void => {
        setAuthState(auth.accessToken ? true : false);
    }, [auth]);


    const handleLogout = (): void => {
        auth.setToken(null, "access");
        auth.setToken(null, "refresh");
    };

    const handleLoginOrRegister = (): void => {
        auth.setOpen(true);
    };

    return (
        <>
            {authState && (
                <>
                    <Link href="/pedidos">
                        <Button>Meus Pedidos</Button>
                    </Link>
                    <Button onClick={handleLogout}>Sair</Button>
                </>
            )}
            <Button onClick={handleLoginOrRegister}>Login / Cadastro</Button>
        </>
    )
};