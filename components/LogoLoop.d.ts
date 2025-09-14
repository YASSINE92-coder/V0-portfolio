import { ReactNode, CSSProperties } from 'react';

export interface LogoLoopItem {
  node?: ReactNode;
  title?: string;
  href?: string;
  ariaLabel?: string;
  src?: string;
  srcSet?: string;
  sizes?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
}

export interface LogoLoopProps {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: string;
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}
