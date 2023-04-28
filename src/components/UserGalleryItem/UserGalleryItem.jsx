import { useState, useEffect } from 'react';
import logo from 'images/logo.png';
import { addDelimiter } from 'helpers/addDelimiter';
import PropTypes from 'prop-types';

import {
  AvatarImg,
  AvatarImgWrap,
  FollowButton,
  LogoImg,
  UserInfo,
  UserPoint,
  UserPoints,
  ListItem,
} from './UserGalleryItem.styled';

export const UserListItem = ({ userInfo, changeUsersToRender }) => {
  const { id, avatar, user, tweets, followers, isFollowing } = userInfo;
  const [currentFollowers, setCurrentFollowers] = useState(followers);

  const [isItemFollowing, setItemIsFollowing] = useState(isFollowing);

  const toggleFollow = () => {
    setItemIsFollowing(!isItemFollowing);
    if (isItemFollowing) {
      setCurrentFollowers(currentFollowers - 1);
    } else {
      setCurrentFollowers(currentFollowers + 1);
    }
  };

  useEffect(() => {
    changeUsersToRender(id, currentFollowers, isItemFollowing);
  }, [id, currentFollowers, isItemFollowing]);

  return (
    <ListItem>
      <LogoImg src={logo} alt="Go IT logo" />
      <UserInfo>
        <AvatarImgWrap>
          <AvatarImg src={avatar} alt={user} />
        </AvatarImgWrap>
        <UserPoints>
          <UserPoint>{tweets} Tweets</UserPoint>
          <UserPoint>
            {addDelimiter(currentFollowers)}
            <span> Followers</span>
          </UserPoint>
        </UserPoints>
        <FollowButton
          type="button"
          onClick={toggleFollow}
          changeColor={isItemFollowing}
        >
          {isItemFollowing ? 'Following' : 'Follow'}
        </FollowButton>
      </UserInfo>
    </ListItem>
  );
};

UserListItem.propTypes = {
  userInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    isFollowing: PropTypes.bool.isRequired,
  }).isRequired,
  changeUsersToRender: PropTypes.func.isRequired,
};
