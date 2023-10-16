import PropTypes from 'prop-types';
import css from './friendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={css['friend-list']}>
      {friends.map(friend => {
        const id = friend.id;
        const isOnline = friend.isOnline;
        const avatar = friend.avatar;
        const name = friend.name;

        return (
          <li key={id} className={css.item}>
            <span className={css.status}>{isOnline}</span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
