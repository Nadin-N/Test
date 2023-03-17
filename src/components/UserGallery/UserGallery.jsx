import { useState, useEffect } from 'react';
import storage from 'helpers/storage';
import users from 'data/usersData.json';
import { UserList } from './UserGallery.styled';
import { UserListItem } from 'components/UserGalleryItem/UserGalleryItem';

export const UserGallery = () => {
  const [usersToRender, setUsersToRender] = useState(
    () => storage.loadFromLS('users-list') ?? users
  );
  useEffect(() => {
    storage.saveToLS('users-list', usersToRender);
  }, [usersToRender]);

  const changeUsersToRender = (id, followers, isFollowing) => {
    const newUsers = usersToRender.map(user => {
      if (user.id === id) {
        user.followers = followers;
        user.isFollowing = isFollowing;
      }
      return user;
    });
    setUsersToRender(newUsers);
  };

  return (
    <UserList>
      {usersToRender.map(usersToRender => {
        return (
          <UserListItem
            key={usersToRender.id}
            userInfo={usersToRender}
            changeUsersToRender={changeUsersToRender}
          />
        );
      })}
    </UserList>
  );
};
