import Profile from 'social-profile/social-profile';
import Statistics from 'statistics/statistics';
import user from '../data/user.json';
import data from '../data/data.json';

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
    </div>
  );
}
