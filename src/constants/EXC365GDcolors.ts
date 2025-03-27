export const colors = {
  theme: '#c3eb1e',
  dark: '#2e2e30', // background
  light: '#f8f8f2', // foreground
  gray: '#8f8f8f', // disabled
  blueGray: '#6272a4', // accent
  blue: '#1e76eb', // hyperlink
  yellow: '#fff600', // highlight
  green: '#50fa7b',
  red: '#ff5555',
  purple: '#bd93f9',
  pink: '#ff79c6',
  orange: '#ffb86c',
  keyLime: '#f1fa8c',
  cyan: '#8be9fd',
} as const;

export const darkTheme = {
  background: colors.dark,
  foreground: colors.light,
  accent: {
    primary: colors.blueGray,
    secondary: colors.theme,
  },
  alerts: {
    fail: colors.red,
    warning: colors.orange,
    info: colors.keyLime,
    success: colors.green,
  },
} as const;

export default colors;
