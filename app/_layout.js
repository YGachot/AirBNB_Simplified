import { Stack } from 'expo-router';
import { LogementsProvider } from '../store/Gists';

export default function RootLayout({ children }) {
  return (
    <LogementsProvider>
      <Stack screenOptions={{ headerShown: false }}>{children}</Stack>
    </LogementsProvider>
  );
}
