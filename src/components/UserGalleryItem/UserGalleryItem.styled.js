import styled from 'styled-components';
import cardBackground from 'images/cardBackground.png';

export const ListItem = styled.li`
  justify-self: center;
  width: 280px;
  height: 480px;
  padding: 20px 0;

  background: url(${cardBackground}) center 36px / 278px 168px no-repeat,
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  @media (min-width: 480px) {
    width: 380px;
  }
`;
export const LogoImg = styled.img`
  padding-left: 20px;
  margin-bottom: 145px;
`;
export const UserInfo = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  &::after {
    position: absolute;
    top: 15%;
    left: 0;
    content: '';
    display: block;
    height: 8px;
    width: 100%;
    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;
export const AvatarImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;
export const AvatarImgWrap = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 26px;
  width: 80px;
  height: 80px;
  left: 0px;
  top: 0px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const UserPoints = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 26px;
`;
export const UserPoint = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;
export const FollowButton = styled.button`
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background-color: ${props => (props.changeColor ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;
