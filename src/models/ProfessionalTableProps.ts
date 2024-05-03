import { Professional } from "./professionalModels";

export interface ProfessionalTableProps {
  professionals: Professional[];
  onRowClick: (professional: Professional) => void;
  onEdit: (professional: Professional) => void;
  onDelete: (professional: Professional) => void;
}
  