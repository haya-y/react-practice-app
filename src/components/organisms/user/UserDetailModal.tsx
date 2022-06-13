import {
  memo, ReactNode, VFC, useCallback, useEffect,
} from 'react';
import {
  Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton,
  ModalContent, ModalHeader, ModalOverlay, Stack, Text,
} from '@chakra-ui/react';
import { User } from '../../../types/api/user';
import { useLoginUser } from '../../../hooks/useLoginUser';
import { useUpdateUser } from '../../../hooks/useUpdateUser';

type Props = {
  user: User | null
  isOpen: boolean,
  onClose: () => void,
}

type UserDetailKeyName = 'username' | 'name' | 'email' | 'phone'

export const UserDetailModal: VFC<Props> = memo((props) => {
  const { user, isOpen, onClose } = props;
  const { loginUser } = useLoginUser();
  const { updateUser, userDetail, setUserDetail } = useUpdateUser();

  const onClickUpdateButton = useCallback(() => {
    updateUser({ user, onClose });
  }, [updateUser, onClose, user]);

  const onChangeUserDetail = useCallback((
    e: React.ChangeEvent<HTMLInputElement>,
    userDetailKeyName: UserDetailKeyName,
  ) => {
    if (userDetail !== null) {
      setUserDetail({
        ...userDetail,
        [userDetailKeyName]: e.target.value,
      });
    }
  }, [userDetail, setUserDetail]);

  useEffect(() => {
    setUserDetail(
      user !== null
        ? {
          username: user.username,
          name: user.name,
          email: user.email,
          phone: user.phone,
        }
        : null,
    );
  }, [user, setUserDetail]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={5}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={userDetail?.username}
                isReadOnly={!loginUser?.isAdmin}
                onChange={(e) => onChangeUserDetail(e, 'username')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input
                value={userDetail?.name}
                isReadOnly={!loginUser?.isAdmin}
                onChange={(e) => onChangeUserDetail(e, 'name')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={userDetail?.email}
                isReadOnly={!loginUser?.isAdmin}
                onChange={(e) => onChangeUserDetail(e, 'email')}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={userDetail?.phone}
                isReadOnly={!loginUser?.isAdmin}
                onChange={(e) => onChangeUserDetail(e, 'phone')}
              />
            </FormControl>
            {
              loginUser?.isAdmin ? (
                <Button
                  colorScheme="teal"
                  size="md"
                  width={20}
                  onClick={onClickUpdateButton}
                >更新
                </Button>
              )
                : <div />
            }
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
