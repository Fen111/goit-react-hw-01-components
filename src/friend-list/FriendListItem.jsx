import PropTypes from 'prop-types';
import s from './friend-list.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={s.wrapper}>
      <span className={s.status}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
