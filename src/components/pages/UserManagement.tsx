// /* eslint-disable react-hooks/exhaustive-deps */
import {
  memo, useCallback, useEffect, VFC,
} from 'react';
import {
  Center, Spinner, Stack, useDisclosure, Wrap, WrapItem,
} from '@chakra-ui/react';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserCard } from '../organisms/user/UserCard';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';
import { useLoginUser } from '../../hooks/useLoginUser';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  const { onSelectUser, selectedUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => getUsers(), [getUsers]);

  const onClickUser = useCallback((id: number) => {
    onSelectUser({ id, users, onOpen });
  }, [users, onSelectUser, onOpen]);

  console.log('users(UserManagement): ', users);

  return (
    <div>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                id={user.id}
                imageUrl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </div>
  );
});
