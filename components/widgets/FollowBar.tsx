import Avatar from '../profile/Avatar';

async function getUsersData() {
  const res = await fetch('http://localhost:3000/api/users');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function FollowBar() {
  // const users = await getUsersData();
  const users = [
    {
      id: '64ba3dcf92c683bc2ee4fc35',
      username: 'TestUser 8',
      name: 'Test User 8',
      email: 'testuser8@equalreach.com',
      image: null,
      coverImage: null,
      profileImage: null,
    },
    {
      id: '64b979c418c4f7538ffac455',
      username: 'TestUser7',
      name: 'Test User6',
      email: 'testus7er@equalreach.com',
      image: null,
      coverImage: null,
      profileImage: null,
    },
    {
      id: '64b9798918c4f7538ffac454',
      username: 'TestUser2',
      name: 'Test User2',
      email: 'testuse2r@equalreach.com',
      image: null,
      coverImage: null,
      profileImage: null,
    },
    {
      id: '64b978d518c4f7538ffac453',
      username: 'TestUser',
      name: 'Test User',
      email: 'testuser@equalreach.com',
      image: null,
      coverImage: null,
      profileImage: null,
    },
    {
      id: '64b953c618c4f7538ffac452',
      username: 'gautam',
      name: 'hi',
      email: 'sfjkf@gmi.com',
      image: null,
      coverImage: null,
      profileImage: '/android-chrome-192x192.png',
    },
  ];

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="w-full px-6 py-4 hidden lg:block border border-gray-300 mt-10 rounded-xl">
      <div className="p-4">
        <h2 className="text-xl font-semibold">New members to Support</h2>

        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4 items-center">
              <Avatar userId={user.id} profileImage={user.profileImage} />

              <div className="flex flex-col">
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-neutral-400 text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
