import { createFileRoute } from '@tanstack/react-router';
import LoginPage from '@/components/pages/Login.tsx';
import AuthLayout from '@/components/layouts/Auth';

export const Route = createFileRoute('/auth/login')({
  component: RouteComponent,
});

function RouteComponent() {
  return <AuthLayout>
    <LoginPage />
  </AuthLayout>
}
