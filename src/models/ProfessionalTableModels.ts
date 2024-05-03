import { Professional } from "./professionalModels";

export interface ProfessionalTableProps {
    professionals: Professional[];
    onRowClick: (professional: Professional) => void;
  }
  