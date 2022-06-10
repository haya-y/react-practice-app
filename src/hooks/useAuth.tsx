/* eslint-disable no-alert */
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Login } from '../components/pages/Login';
import { User } from '../types/api/user';

export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((result) => {
        if (result.data) {
          history.push('/home');
        } else {
          window.alert('ユーザーが見つかりません');
        }
      })
      .catch(() => {
        window.alert('ログインできません');
      })
      .finally(() => setLoading(false));
  }, []);

  return { login, loading };
};
