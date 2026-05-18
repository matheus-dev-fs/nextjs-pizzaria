import { ErrorField } from "@/types/errors/error-field.type";

export const checkFieldError = (fieldName: string, errors: ErrorField | null): string | false => {
    if (!errors) {
        return false;
    }

    if (!errors[fieldName]) {
        return false;
    }

    return errors[fieldName][0];
};