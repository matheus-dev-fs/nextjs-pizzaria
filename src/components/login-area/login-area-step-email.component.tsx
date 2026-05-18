"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CustomInput } from "../layout/custom-input.component";
import { Button } from "../ui/button";

type Props = {
    onValidate: (hasEmail: boolean, email: string) => void;
}

export const LoginAreaStepEmail: React.FC<Props> = ({ onValidate }) => {
    const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const [errors, setErrors]: [any, Dispatch<SetStateAction<any>>] = useState<any>(null);
    const [emailField, setEmailField]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;
        setEmailField(value);
    };

    const handleButtonClick = async (): Promise<void> => {

    }

    return (
        <>
            <div>
                <p className="mb-2">Digite seu email</p>
                <CustomInput 
                    name="email"
                    errors={errors}
                    disabled={loading}
                    type="email"
                    value={emailField}
                    onChange={handleEmailChange}
                />
            </div>

            <Button
                disabled={loading}
                onClick={handleButtonClick}
            >
                Continuar
            </Button>
        </>
    );
};