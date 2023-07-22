import PropTypes from 'prop-types';
import { FriendItem } from '../FriendListItem/FriendItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section>
      <h2 className="title">Friends</h2>
      <ul className={css.friendList}>
        {friends.map(item => (
          <FriendItem key={item.id} friend={item} />
        ))}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
