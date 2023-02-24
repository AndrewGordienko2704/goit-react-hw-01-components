import PropTypes from 'prop-types';
import { Friends} from './FrendList.styled';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <Friends>
      {friends.map(friend => (
        <FriendListItem friend={friend} key={friend.id} />
      ))}
    </Friends>
  );
};


FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};