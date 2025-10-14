// Lyola Design System - Theme Configuration

export const colors = {
    primary: {
      pink: '#E91E63',
      pinkLight: '#FCE4EC',
      pinkDark: '#C2185B',
    },
    accent: {
      gold: '#D4AF37',
      goldLight: '#F4E5B8',
    },
    neutral: {
      cream: '#FDFBF7',
      creamDark: '#F5F1E8',
      charcoal: '#2C2C2C',
      charcoalLight: '#4A4A4A',
    },
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
  } as const;
  
  export const typography = {
    fonts: {
      serif: '"Playfair Display", serif',
      sans: '"Inter", system-ui, sans-serif',
      accent: '"Abril Fatface", serif',
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    weights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
  } as const;
  
  export const spacing = {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  } as const;
  
  export const borderRadius = {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  } as const;
  
  export const shadows = {
    soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
    pink: '0 4px 14px 0 rgba(233, 30, 99, 0.15)',
    gold: '0 4px 14px 0 rgba(212, 175, 55, 0.15)',
    medium: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    large: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  } as const;
  
  export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  } as const;
  
  export const animations = {
    durations: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easings: {
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  } as const;
  
  // African Print Pattern Definitions (for SVG backgrounds)
  export const patterns = {
    kente: {
      colors: ['#E91E63', '#D4AF37', '#4CAF50', '#2196F3'],
      type: 'geometric',
    },
    ankara: {
      colors: ['#E91E63', '#FF9800', '#4CAF50'],
      type: 'circular',
    },
    adire: {
      colors: ['#2196F3', '#FDFBF7'],
      type: 'organic',
    },
  } as const;
  
  export type ColorTheme = typeof colors;
  export type TypographyTheme = typeof typography;
  export type SpacingTheme = typeof spacing;