import { useState } from 'react';
import { User } from '../types/api/user';

type Props = {
  user: User | null,
  onClose: () => void,
}

type UserDetailType = {
  username: string,
  name: string,
  email: string,
  phone: string,
}

export const useUpdateUser = () => {
  const [userDetail, setUserDetail] = useState<UserDetailType | null>(null);

  const updateUser = (props: Props) => {
    const { user, onClose } = props;
    if (user && userDetail) {
      user.username = userDetail.username;
      user.name = userDetail.name;
      user.email = userDetail.email;
      user.phone = userDetail.phone;
    }
    onClose();
  };

  return { updateUser, userDetail, setUserDetail };
};
