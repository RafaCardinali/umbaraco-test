export interface ModalProps {
    onConfirm: () => Promise<void> | void;
    onCancel: () => void;
    children?: React.ReactNode;
}