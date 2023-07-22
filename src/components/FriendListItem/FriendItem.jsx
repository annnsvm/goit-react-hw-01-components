import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendItem = ({ friend }) => {
  return (
    <>
      <li className={css.item}>
        <span
          className={friend.isOnline ? css.statusOnline : css.statusOffline}
        ></span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
