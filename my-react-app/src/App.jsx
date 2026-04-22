import { AuthProvider } from "./context/AuthContext";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </AuthProvider>
  );
}
