import { ResetPasswordForm } from "@/components/auth/auth-forms";
import { AuthPanel } from "@/components/auth/auth-shell";

export default function ResetPasswordPage() {
  return (
    <AuthPanel
      eyebrow="Reset password"
      subtitle="Choose a fresh password for your estate-grid account."
      title="Create New Password"
    >
      <ResetPasswordForm />
    </AuthPanel>
  );
}
