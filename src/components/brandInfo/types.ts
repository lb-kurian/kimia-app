export interface NavItemProps {
  icon: string;
  label: string;
  alt: string;
}

export interface BrandInfoTabProps {
  label: string;
  isActive?: boolean;
}

export interface IconButtonProps {
  icon: string;
  alt: string;
  onClick?: () => void;
}
