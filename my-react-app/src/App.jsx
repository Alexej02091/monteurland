import MainLayout from "./layouts/MainLayout";
import AppRouter from "./router/AppRouter";

import AuthProvider from "./context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </AuthProvider>
  );
}
