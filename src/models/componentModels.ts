export interface HeaderProps {
    title: string;
    toggleSidebar: () => void;
}

export interface SidebarProps {
  toggle: () => void;
  isVisible: boolean;
}