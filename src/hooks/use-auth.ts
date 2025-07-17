import { useCallback, useState } from 'react';

interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  imageUrl?: string;
}

interface UseAuth {
  isLoaded: boolean;
  isSignedIn: boolean;
  user: User | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Mock user data
const MOCK_USER: User = {
  id: '1',
  email: 'demo@example.com',
  firstName: 'Demo',
  lastName: 'User',
  imageUrl: 'https://avatars.githubusercontent.com/u/1'
};

export function useAuth(): UseAuth {
  const [isLoaded] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const signIn = useCallback(async (email: string, password: string) => {
    // Mock sign in logic
    setIsSignedIn(true);
    setUser(MOCK_USER);
  }, []);

  const signUp = useCallback(async (email: string, password: string) => {
    // Mock sign up logic
    setIsSignedIn(true);
    setUser(MOCK_USER);
  }, []);

  const signOut = useCallback(async () => {
    // Mock sign out logic
    setIsSignedIn(false);
    setUser(null);
  }, []);

  return {
    isLoaded,
    isSignedIn,
    user,
    signIn,
    signUp,
    signOut
  };
}
