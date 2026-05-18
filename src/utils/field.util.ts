export const checkFieldError = (fieldName: string, errors: any) => {
    if (!errors) {
        return false;
    }

    if (!errors[fieldName]) {
        return false;
    }

    return errors[fieldName][0];
};