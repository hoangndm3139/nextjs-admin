'use client';
import { useAuth } from '@/hooks/use-auth';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { isSignedIn } = useAuth();

  if (!true) {
    return redirect('/auth/sign-in');
  } else {
    redirect('/dashboard/overview');
  }
}
