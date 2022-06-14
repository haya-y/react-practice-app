import {
  createContext, Dispatch, SetStateAction, ReactNode, useState, useMemo,
} from 'react';
import { User } from '../types/api/user';

type LoginUserType = User & { isAdmin: boolean; }

export type LoginUserContextType = {
  loginUser: LoginUserType | null,
  setLoginUser: Dispatch<SetStateAction<LoginUserType | null>>
}

export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

export function LoginUserProvider(props: {children: ReactNode}) {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUserType | null>(null);
  const loginInfo = useMemo(() => ({ loginUser, setLoginUser }), [loginUser]);

  return (
    <LoginUserContext.Provider value={loginInfo}>
      {children}
    </LoginUserContext.Provider>
  );
}
