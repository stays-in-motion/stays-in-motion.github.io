/**
 * Section layout component for consistent page structure
 * Consolidates section patterns used across the marketing site
 */

import React from 'react';
import { cn } from '../../lib/utils';

interface SectionLayoutProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  headerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  background?: 'default' | 'muted' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  textAlign?: 'left' | 'center' | 'right';
}

const backgroundVariants = {
  default: '',
  muted: 'bg-muted/30',
  gradient: 'bg-gradient-to-r from-primary/5 to-secondary/5',
};

const sizeVariants = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20',
  xl: 'py-24 md:py-32',
};

const textAlignVariants = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/**
 * Reusable section layout with consistent styling
 */
export function SectionLayout({
  id,
  title,
  subtitle,
  children,
  className,
  containerClassName,
  headerClassName,
  titleClassName,
  subtitleClassName,
  background = 'default',
  size = 'lg',
  textAlign = 'center',
}: SectionLayoutProps) {
  return (
    <section id={id} className={cn(sizeVariants[size], backgroundVariants[background], className)}>
      <div className={cn('container mx-auto px-6', containerClassName)}>
        <div className={cn('mb-12 scroll-reveal', textAlignVariants[textAlign], headerClassName)}>
          <h2 className={cn('text-4xl md:text-5xl font-bold mb-4', titleClassName)}>{title}</h2>
          {subtitle && (
            <p
              className={cn(
                'text-xl text-muted-foreground max-w-2xl',
                textAlign === 'center' && 'mx-auto',
                textAlign === 'right' && 'ml-auto',
                subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}

/**
 * Hero section variant with larger text and different styling
 */
export function HeroSectionLayout({
  id = 'hero',
  title,
  subtitle,
  children,
  className,
  backgroundImage,
  overlay = true,
  ...props
}: Omit<SectionLayoutProps, 'size' | 'textAlign'> & {
  backgroundImage?: string;
  overlay?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        'min-h-screen flex items-center justify-center relative',
        backgroundImage && 'bg-cover bg-center',
        className,
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {overlay && backgroundImage && <div className="absolute inset-0 bg-black/50" />}

      <div className={cn('container mx-auto px-6 relative z-10', props.containerClassName)}>
        <div className={cn('text-center scroll-reveal', backgroundImage && 'text-white', props.headerClassName)}>
          <h1 className={cn('text-5xl md:text-7xl font-bold mb-6 leading-tight', props.titleClassName)}>{title}</h1>
          {subtitle && (
            <p
              className={cn(
                'text-xl md:text-2xl max-w-3xl mx-auto mb-8',
                backgroundImage ? 'text-white/90' : 'text-muted-foreground',
                props.subtitleClassName,
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {children}
      </div>
    </section>
  );
}

/**
 * CTA section variant with call-to-action styling
 */
export function CtaSectionLayout({
  id = 'cta',
  title,
  subtitle,
  children,
  className,
  variant = 'primary',
  ...props
}: Omit<SectionLayoutProps, 'background'> & {
  variant?: 'primary' | 'secondary' | 'muted';
}) {
  const variantStyles = {
    primary: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    muted: 'bg-muted text-muted-foreground',
  };

  return (
    <SectionLayout
      id={id}
      title={title}
      subtitle={subtitle}
      className={cn(variantStyles[variant], className)}
      titleClassName={cn(
        variant === 'primary' && 'text-primary-foreground',
        variant === 'secondary' && 'text-secondary-foreground',
        props.titleClassName,
      )}
      subtitleClassName={cn(
        variant === 'primary' && 'text-primary-foreground/80',
        variant === 'secondary' && 'text-secondary-foreground/80',
        props.subtitleClassName,
      )}
      {...props}
    >
      {children}
    </SectionLayout>
  );
}

/**
 * Feature section with grid layout
 */
export function FeatureSectionLayout({
  features,
  columns = 3,
  ...sectionProps
}: SectionLayoutProps & {
  features: React.ReactNode[];
  columns?: 2 | 3 | 4;
}) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <SectionLayout {...sectionProps}>
      <div className={cn('grid gap-8', gridCols[columns])}>
        {features.map((feature, index) => (
          <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 100}ms` }}>
            {feature}
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}

/**
 * Two-column section layout
 */
export function TwoColumnSectionLayout({
  leftContent,
  rightContent,
  imagePosition = 'right',
  ...sectionProps
}: Omit<SectionLayoutProps, 'children'> & {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  imagePosition?: 'left' | 'right';
}) {
  const isImageLeft = imagePosition === 'left';

  return (
    <SectionLayout {...sectionProps}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={cn('scroll-reveal', isImageLeft ? 'lg:order-2' : 'lg:order-1')}>
          {isImageLeft ? rightContent : leftContent}
        </div>

        <div className={cn('scroll-reveal', isImageLeft ? 'lg:order-1' : 'lg:order-2')}>
          {isImageLeft ? leftContent : rightContent}
        </div>
      </div>
    </SectionLayout>
  );
}
