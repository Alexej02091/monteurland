import { AuthProvider } from "./context/AuthContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </FavoritesProvider>
    </AuthProvider>
  );
}
