import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <li key={id}>
                        <span>{isOnline}</span>
                        <img src={avatar} alt="User avatar" width={30} />
                        <p>{name}</p>
                    </li>
                );
            })}
        </ul>
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