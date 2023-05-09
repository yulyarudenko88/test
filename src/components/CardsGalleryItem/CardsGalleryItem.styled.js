import styled from '@emotion/styled';
import backgroundImage from 'images/picture.png';
import ellipse from 'images/ellipse.png';
import rectangle from 'images/rectangle.png';

export const Card = styled.li`
  width: 380px;
  background-image: url(${backgroundImage}), url(${ellipse}), url(${rectangle});
  background-size: 308px 168px, 90px, 380px 17px;
  background-repeat: no-repeat;
  background-position: 36px 28px, 145px 179px, 0px 215px;
  background-color: #471ca9;
  box-shadow: 0px 6.87px 6.87px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px 20px 36px 20px;

  color: #ebd8ff;
`;

export const Avatar = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-top: 145.5px;
  border-radius: 50%;
`;

export const TweetsQuantity = styled.p`
  text-align: center;
  margin-top: 34.5px;
`;

export const FollowersQuantity = styled.p`
  text-align: center;
  margin-top: 16px;
`;

export const Btn = styled.button`
  width: 196px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 26px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.23);
  color: #373737;
`;
