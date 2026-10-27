import { MD3DarkTheme, MD3LightTheme, useTheme } from "react-native-paper";

const brand = {
  primary: "#FF3B30",
};

const lightColors = {
  primary: brand.primary,
  onPrimary: "#FFFFFF",
  primaryContainer: "#FFDAD6",
  onPrimaryContainer: "#410002",
  secondary: "#B3261E",
  onSecondary: "#FFFFFF",
  secondaryContainer: "#FFDAD6",
  onSecondaryContainer: "#410002",
  tertiary: "#C62828",
  onTertiary: "#FFFFFF",
  tertiaryContainer: "#FFDAD6",
  onTertiaryContainer: "#410002",
  background: "#FFFFFF",
  onBackground: "#111111",
  surface: "#FFFFFF",
  onSurface: "#111111",
  surfaceVariant: "#F5F5F5",
  onSurfaceVariant: "#6B6B70",
  outline: "#D6D6DB",
  outlineVariant: "#E5E5EA",
  error: brand.primary,
  onError: "#FFFFFF",
  errorContainer: "#FFDAD6",
  onErrorContainer: "#410002",
  inverseSurface: "#1C1C1E",
  inverseOnSurface: "#F5F5F5",
  inversePrimary: "#FFB4AB",
  shadow: "#000000",
  scrim: "#000000",
  surfaceDisabled: "rgba(17, 17, 17, 0.12)",
  onSurfaceDisabled: "rgba(17, 17, 17, 0.38)",
  backdrop: "rgba(0, 0, 0, 0.5)",
};

const darkColors = {
  primary: brand.primary,
  onPrimary: "#FFFFFF",
  primaryContainer: "#93000A",
  onPrimaryContainer: "#FFDAD6",
  secondary: "#FFB4AB",
  onSecondary: "#690005",
  secondaryContainer: "#93000A",
  onSecondaryContainer: "#FFDAD6",
  tertiary: "#FFB4AB",
  onTertiary: "#690005",
  tertiaryContainer: "#93000A",
  onTertiaryContainer: "#FFDAD6",
  background: "#000000",
  onBackground: "#F5F5F5",
  surface: "#0A0A0A",
  onSurface: "#F5F5F5",
  surfaceVariant: "#1C1C1E",
  onSurfaceVariant: "#A1A1A6",
  outline: "#3A3A3C",
  outlineVariant: "#2C2C2E",
  error: "#FF453A",
  onError: "#FFFFFF",
  errorContainer: "#93000A",
  onErrorContainer: "#FFDAD6",
  inverseSurface: "#F5F5F5",
  inverseOnSurface: "#1C1C1E",
  inversePrimary: "#B3261E",
  shadow: "#000000",
  scrim: "#000000",
  surfaceDisabled: "rgba(245, 245, 245, 0.12)",
  onSurfaceDisabled: "rgba(245, 245, 245, 0.38)",
  backdrop: "rgba(0, 0, 0, 0.5)",
};

const darkElevation = {
  level0: "#000000",
  level1: "#0A0A0A",
  level2: "#121212",
  level3: "#181818",
  level4: "#1E1E1E",
  level5: "#242424",
};

export const lightTheme = {
  ...MD3LightTheme,
  roundness: 8,
  colors: {
    ...MD3LightTheme.colors,
    ...lightColors,
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  roundness: 8,
  colors: {
    ...MD3DarkTheme.colors,
    ...darkColors,
    elevation: {
      ...MD3DarkTheme.colors.elevation,
      ...darkElevation,
    },
  },
};

export type AppTheme = typeof lightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
