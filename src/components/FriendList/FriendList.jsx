import PropTypes from 'prop-types';
import { Avatar, Friends, Item, Name, Status } from './FrendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <Friends>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <Item key={id}>
                        <Status>{isOnline}</Status>
                        <Avatar src={avatar} alt="User avatar" width={30} />
                        <Name>{name}</Name>
                    </Item>
                );
            })}
        </Friends>
    );
}


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};