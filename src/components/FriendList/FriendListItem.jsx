import PropTypes from 'prop-types';
import { Avatar, Item, Status, Name } from './FrendList.styled';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <Item>
            <Status>{isOnline}</Status>
            <Avatar src={avatar} alt="User avatar" width={30} />
            <Name>{name}</Name>
        </Item>
    );
}; 

FriendListItem.protoType = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
