"use client";

import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CustomInput } from "../layout/custom-input.component";
import { Button } from "../ui/button";
import { LoginAreaEmailSchema } from "@/validators/login-area-email.validator";
import { api } from "@/lib/api";
import { ValidateEmailResponse } from "@/interfaces/responses/validate-email-response.interface";
import { ErrorField } from "@/types/errors/error-field.type";

type Props = {
    onValidate: (hasEmail: boolean, email: string) => void;
}

export const LoginAreaStepEmail: React.FC<Props> = ({ onValidate }) => {
    const [loading, setLoading]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);
    const [errors, setErrors]: [ErrorField | null, Dispatch<SetStateAction<ErrorField | null>> ] = useState<ErrorField | null>(null);
    const [emailField, setEmailField]: [string, Dispatch<SetStateAction<string>>] = useState<string>("");

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const value: string = event.target.value;
        setEmailField(value);
    };

    const handleButtonClick = async (): Promise<void> => {
        try {
            setErrors(null);
            const validData = LoginAreaEmailSchema.safeParse({ email: emailField });

            if (!validData.success) {
                setErrors(validData.error.flatten().fieldErrors);
                return;
            }

            setLoading(true);
            
            const email: string = validData.data.email;
            const emailReq = await api.post('/auth/validate_email', { email });
            const emailRes: ValidateEmailResponse = emailReq.data;

            onValidate(emailRes.exists, validData.data.email);
        } catch (error) {
            setLoading(false);
            return;
        }
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