import { useAuth } from "@src/contexts/auth";
import { Redirect } from "expo-router";

export default function Index() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  return isAuthenticated ? (
    <Redirect href="/(tabs)" />
  ) : (
    <Redirect href="/(onboarding)/send-otp" />
  );
}
