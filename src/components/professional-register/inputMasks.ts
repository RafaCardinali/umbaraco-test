export type MaskArray = (string | RegExp)[];

export const getInputMask = (fieldKey: string): MaskArray | null => {
    const masks: { [key: string]: MaskArray } = {
        vat: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
        ic: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/],
        phone: ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
        consultationValue: ['R', '$', ' ',/\d/, /\d/, /\d/,',', /\d/, /\d/],
        birthDate: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        cep: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]
    };

    return masks[fieldKey] || null;
};
