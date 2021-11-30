import s from './friend-list.module.css';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={s.container}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem avatar={friend.avatar} name={friend.name} />
        </li>
      ))}
    </ul>
  );
}
