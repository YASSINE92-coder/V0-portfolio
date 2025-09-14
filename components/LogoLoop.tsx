import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';
import './LogoLoop.css';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const toCssLength = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value;

const useResizeObserver = (callback: () => void, elements: HTMLElement[]) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    const observer = new ResizeObserver(callback);
    elements.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [callback, elements]);
};

interface LogoLoopProps {
  logos: React.ReactNode[];
  speed?: number;
  direction?: 'left' | 'right';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    ariaLabel = 'Partner logos',
    className,
    style,
  }: LogoLoopProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [numCopies, setNumCopies] = useState(ANIMATION_CONFIG.MIN_COPIES);

    const calculateCopies = useCallback(() => {
      if (!rootRef.current || !innerRef.current) return;

      const rootWidth = rootRef.current.offsetWidth;
      const innerWidth = innerRef.current.offsetWidth;

      if (innerWidth < rootWidth) {
        setNumCopies(
          Math.max(
            ANIMATION_CONFIG.MIN_COPIES,
            Math.ceil(rootWidth / innerWidth) + ANIMATION_CONFIG.COPY_HEADROOM
          )
        );
      } else {
        setNumCopies(ANIMATION_CONFIG.MIN_COPIES);
      }
    }, []);

    useResizeObserver(calculateCopies, [
      rootRef.current as HTMLDivElement,
      innerRef.current as HTMLDivElement,
    ]);

    const animationDuration = useMemo(() => {
      if (!innerRef.current) return '0s';
      const innerWidth = innerRef.current.offsetWidth;
      return `${innerWidth / speed}s`;
    }, [speed, numCopies]);

    const animationDirection = useMemo(
      () => (direction === 'right' ? 'reverse' : 'normal'),
      [direction]
    );

    const rootStyles = useMemo(
      () =>
        ({
          '--logoloop-gap': toCssLength(gap),
          '--logoloop-logoHeight': toCssLength(logoHeight),
          '--logoloop-speed': animationDuration,
          '--logoloop-direction': animationDirection,
          '--logoloop-fadeColor': fadeOutColor,
          width: toCssLength(width),
          ...style,
        } as React.CSSProperties),
      [gap,
        logoHeight,
        animationDuration,
        animationDirection,
        fadeOutColor,
        width,
        style,]
    );

    return (
      <div
        ref={rootRef}
        className={`logoloop ${className || ''}`}
        style={rootStyles}
        role="marquee"
        aria-label={ariaLabel}
      >
        <div
          className={`logoloop-inner ${pauseOnHover ? 'pause-on-hover' : ''} ${scaleOnHover ? 'scale-on-hover' : ''} ${fadeOut ? 'fade-out' : ''}`}
          ref={innerRef}
        >
          {Array.from({ length: numCopies }).map((_, i) => (
            <div key={i} className="logoloop-copy">
              {logos.map((logo, j) => (
                <div key={j} className="logoloop-logo">
                  {logo}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

