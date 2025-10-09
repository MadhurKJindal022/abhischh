import React from "react";

/**
 * Main Card container
 * - Black background
 * - Rounded corners
 * - Gold borders and hover glow
 */
export const Card = ({ children, className = "", ...props }) => (
  <div
    className={`
      bg-black 
      border border-gold/30 
      hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] 
      hover:border-gold/50 
      transition-all duration-500 
      rounded-xl overflow-hidden
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

/**
 * Card content container
 * - Default padding
 * - Can be overridden via className
 */
export const CardContent = ({ children, className = "p-6", ...props }) => (
  <div className={`${className} text-gray-200`} {...props}>
    {children}
  </div>
);

/**
 * Card header section
 * - Bottom gold border
 * - Padding for spacing
 */
export const CardHeader = ({ children, className = "", ...props }) => (
  <div
    className={`p-4 border-b border-gold/40 ${className}`}
    {...props}
  >
    {children}
  </div>
);

/**
 * Card title
 * - Luxury styled heading
 * - Gold accent text for highlights
 */
export const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`luxury-text text-xl lg:text-2xl font-bold text-gold ${className}`}
    {...props}
  >
    {children}
  </h3>
);

/**
 * Optional Card footer
 * - Top gold border
 * - Ideal for buttons or links
 */
export const CardFooter = ({ children, className = "", ...props }) => (
  <div
    className={`p-4 border-t border-gold/40 ${className}`}
    {...props}
  >
    {children}
  </div>
);
