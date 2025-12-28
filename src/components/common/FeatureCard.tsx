/**
 * Feature card components for consistent feature presentation
 * Consolidates card patterns used across sections
 */

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { cn } from '../../lib/utils';
import { getAccentColorSet, type AccentColorType } from '../../utils/colors';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  accent?: AccentColorType;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  delay?: string;
  variant?: 'default' | 'outlined' | 'gradient' | 'minimal';
  children?: React.ReactNode;
}

/**
 * Base feature card component
 */
export function FeatureCard({
  icon,
  title,
  description,
  accent,
  onClick,
  active = false,
  className,
  delay,
  variant = 'default',
  children,
}: FeatureCardProps) {
  const accentColors = accent ? getAccentColorSet(accent) : null;
  const isClickable = !!onClick;

  const cardVariants = {
    default: 'bg-card hover:shadow-lg transition-all duration-300',
    outlined: 'border-2 bg-transparent hover:bg-card/50 transition-all duration-300',
    gradient: 'bg-gradient-to-br from-card to-card/50 hover:shadow-lg transition-all duration-300',
    minimal: 'bg-transparent border-0 shadow-none hover:bg-card/30 transition-all duration-300',
  };

  return (
    <Card
      className={cn(
        cardVariants[variant],
        isClickable && 'cursor-pointer hover:scale-[1.02]',
        active && 'ring-2 ring-primary',
        accentColors && active && `ring-2 ${accentColors.ring}`,
        className,
      )}
      onClick={onClick}
      style={{ animationDelay: delay }}
    >
      <CardHeader className="text-center">
        {icon && (
          <div
            className={cn(
              'mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4',
              accentColors ? accentColors.bg : 'bg-primary',
              variant === 'minimal' && 'bg-transparent w-16 h-16',
            )}
          >
            <div
              className={cn(
                'w-6 h-6',
                accentColors ? 'text-white' : 'text-primary-foreground',
                variant === 'minimal' && (accentColors ? accentColors.text : 'text-primary'),
              )}
            >
              {icon}
            </div>
          </div>
        )}

        <CardTitle className={cn('text-xl mb-2', accentColors && active && accentColors.text)}>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p
          className={cn(
            'text-muted-foreground text-center leading-relaxed',
            variant === 'minimal' && 'text-foreground/80',
          )}
        >
          {description}
        </p>
        {children}
      </CardContent>
    </Card>
  );
}

/**
 * Interactive feature card with hover states
 */
export function InteractiveFeatureCard({ children, className, ...props }: FeatureCardProps) {
  return (
    <FeatureCard
      variant="outlined"
      className={cn(
        'group hover:border-primary/50 hover:shadow-md',
        'transform transition-all duration-300 hover:-translate-y-1',
        className,
      )}
      {...props}
    >
      {children}
    </FeatureCard>
  );
}

/**
 * Compact feature card for smaller spaces
 */
export function CompactFeatureCard({
  icon,
  title,
  description,
  accent,
  className,
  ...props
}: Omit<FeatureCardProps, 'variant'>) {
  const accentColors = accent ? getAccentColorSet(accent) : null;

  return (
    <div
      className={cn(
        'p-6 rounded-lg border bg-card hover:shadow-md transition-all duration-300',
        'group hover:border-primary/30',
        className,
      )}
      {...props}
    >
      <div className="flex items-start space-x-4">
        {icon && (
          <div
            className={cn(
              'flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center',
              accentColors ? accentColors.bg : 'bg-primary/10',
            )}
          >
            <div className={cn('w-5 h-5', accentColors ? accentColors.text : 'text-primary')}>{icon}</div>
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h3 className={cn('font-semibold text-lg mb-2', accentColors && accentColors.text)}>{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Statistics card for metrics display
 */
export function StatCard({
  label,
  value,
  suffix,
  accent,
  trend,
  className,
}: {
  label: string;
  value: string | number;
  suffix?: string;
  accent?: AccentColorType;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}) {
  const accentColors = accent ? getAccentColorSet(accent) : null;

  const trendColors = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-muted-foreground',
  };

  return (
    <Card className={cn('text-center', className)}>
      <CardContent className="pt-6">
        <div className={cn('text-3xl md:text-4xl font-bold mb-2', accentColors ? accentColors.text : 'text-primary')}>
          {value}
          {suffix && <span className="text-lg text-muted-foreground ml-1">{suffix}</span>}
        </div>

        <p className={cn('text-sm font-medium', trend && trendColors[trend])}>{label}</p>
      </CardContent>
    </Card>
  );
}

/**
 * Testimonial card for user quotes
 */
export function TestimonialCard({
  quote,
  author,
  role,
  avatar,
  className,
}: {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  className?: string;
}) {
  return (
    <Card className={cn('h-full', className)}>
      <CardContent className="pt-6">
        <blockquote className="text-lg italic mb-4 leading-relaxed">"{quote}"</blockquote>

        <div className="flex items-center space-x-3">
          {avatar && <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover" />}

          <div>
            <div className="font-semibold">{author}</div>
            {role && <div className="text-sm text-muted-foreground">{role}</div>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Pricing card for plan display
 */
export function PricingCard({
  title,
  price,
  period = 'month',
  features,
  buttonText = 'Get Started',
  onButtonClick,
  popular = false,
  className,
}: {
  title: string;
  price: string | number;
  period?: string;
  features: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  popular?: boolean;
  className?: string;
}) {
  return (
    <Card className={cn('relative h-full flex flex-col', popular && 'ring-2 ring-primary scale-105', className)}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="text-3xl font-bold">
          ${price}
          <span className="text-sm font-normal text-muted-foreground">/{period}</span>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col justify-between">
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={onButtonClick}
          className={cn(
            'w-full py-2 px-4 rounded-md font-medium transition-colors',
            popular
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          )}
        >
          {buttonText}
        </button>
      </CardContent>
    </Card>
  );
}
