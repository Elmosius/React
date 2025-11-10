import { createFileRoute } from '@tanstack/react-router';
import RegisterPage from '@/components/pages/Register.tsx';
import AuthLayout from '@/components/layouts/Auth';

export const Route = createFileRoute('/auth/register')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <AuthLayout>
      <RegisterPage />
    </AuthLayout>
  );
}
