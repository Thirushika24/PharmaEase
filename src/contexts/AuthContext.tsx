
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('pharmaUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in a real app, this would call an API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        // Check if user exists with this email in localStorage
        const usersJson = localStorage.getItem('pharmaUsers');
        const users = usersJson ? JSON.parse(usersJson) : [];
        const foundUser = users.find((u: User & { password: string }) => 
          u.email === email && u.password === password
        );
        
        if (foundUser) {
          const { password: _, ...userWithoutPassword } = foundUser;
          setUser(userWithoutPassword);
          localStorage.setItem('pharmaUser', JSON.stringify(userWithoutPassword));
          resolve();
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 500);
    });
  };

  const register = async (name: string, email: string, password: string) => {
    // Mock registration - in a real app, this would call an API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const usersJson = localStorage.getItem('pharmaUsers');
        const users = usersJson ? JSON.parse(usersJson) : [];
        
        // Check if email already exists
        if (users.some((u: User) => u.email === email)) {
          reject(new Error('Email already registered'));
          return;
        }
        
        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password
        };
        
        users.push(newUser);
        localStorage.setItem('pharmaUsers', JSON.stringify(users));
        
        const { password: _, ...userWithoutPassword } = newUser;
        setUser(userWithoutPassword);
        localStorage.setItem('pharmaUser', JSON.stringify(userWithoutPassword));
        resolve();
      }, 500);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pharmaUser');
  };

  const resetPassword = async (email: string) => {
    // Mock password reset - in a real app, this would call an API
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const usersJson = localStorage.getItem('pharmaUsers');
        const users = usersJson ? JSON.parse(usersJson) : [];
        
        const userExists = users.some((u: User) => u.email === email);
        
        if (userExists) {
          // In a real app, would send email with reset link
          console.log(`Password reset link sent to ${email}`);
          resolve();
        } else {
          reject(new Error('Email not found'));
        }
      }, 500);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
