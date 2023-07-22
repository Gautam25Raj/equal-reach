import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

async function getUserData(email: any) {
  const res = await fetch('http://localhost:3000/api/users/' + email);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    const user = await getUserData(session?.user?.email);
    redirect('/feed/profile/' + user.id);
  }
};
export default page;
