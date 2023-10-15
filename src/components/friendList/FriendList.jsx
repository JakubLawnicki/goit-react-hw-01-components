import PropTypes from 'prop-types';

export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        const id = friend.id;
        const isOnline = friend.isOnline;
        const avatar = friend.avatar;
        const name = friend.name;

        return (
          <li key={id} class="item">
            <span class="status">{isOnline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
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
