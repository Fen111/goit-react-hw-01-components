import Profile from 'social-profile/social-profile';
import Statistics from 'statistics/statistics';
import FriendList from 'friend-list/FriendList';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
