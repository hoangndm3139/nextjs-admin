'use client';
import { useAuth } from '@/hooks/use-auth';
import { redirect } from 'next/navigation';

export default function Page() {
  const { isSignedIn } = useAuth();

  if (!true) {
    return redirect('/auth/sign-in');
  } else {
    return redirect('/dashboard/overview');
  }
}
