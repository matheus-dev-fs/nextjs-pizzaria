import { ComponentProps } from "react";
import { Input } from "../ui/input";
import { checkFieldError } from "@/utils/field.util";
import { ErrorField } from "@/types/errors/error-field.type";

type Props = ComponentProps<"input"> & {
    name: string;
    errors: ErrorField | null;
}

export const CustomInput: React.FC<Props> = (props) => {
    const error: string | false = checkFieldError(props.name, props.errors);

    return (
        <>
            <Input
                {...props}
                className={`${error ? 'border border-red-800' : ''}`}
            />
            {error && (
                <div className="text-sm text-red-800 mt-1">{error}</div>
            )}
        </>
    );
};