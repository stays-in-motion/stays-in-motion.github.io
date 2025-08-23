import { mock } from 'bun:test';
import { ReactNode } from 'react';

// Mock Card components
export const Card = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <div className={className} onClick={onClick} role="article">
    {children}
  </div>
);

export const CardContent = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const CardHeader = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const CardTitle = ({ children, className }: { children: ReactNode; className?: string }) => (
  <h3 className={className}>{children}</h3>
);

// Mock Button component
export const Button = ({
  children,
  className,
  onClick,
  variant,
  size,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: string;
  size?: string;
}) => (
  <button className={className} onClick={onClick} data-variant={variant} data-size={size}>
    {children}
  </button>
);

// Mock Badge component
export const Badge = ({ children, className }: { children: ReactNode; className?: string }) => (
  <span className={className} role="status">
    {children}
  </span>
);

// Mock form components if needed
export const Input = ({ className, ...props }: any) => <input className={className} {...props} />;

export const Label = ({ children, className }: { children: ReactNode; className?: string }) => (
  <label className={className}>{children}</label>
);
