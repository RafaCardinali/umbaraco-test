export interface FormValues {
    name: string;
    vat: string;
    ic: string;
    birthDate: string;
    email: string;
    phone: string;
    address: string;
    professionalRegistration: string;
    careRegion: string;
    careOption: string;
    photo: File | null;
    consultationValue: string;
    [key: string]: string | File | null | undefined;
}

export interface Professional extends FormValues {
  id: string;
  status: string
}
