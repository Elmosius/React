type AuthLayoutProps = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <main className={'max-w-xl p-4 bg-amber-100 min-h-screen'}>{children}</main>;
}
