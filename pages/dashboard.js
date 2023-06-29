import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
export default function Dashboard() {
  const router = useRouter();
  // Check if the session is active, if not, the page will redirect to index
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session]);
  const handlerSignOut = () => {
    signOut();
  };
  return (
    <section className="flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold">Dashboard</h1>
      <button onClick={handlerSignOut} className="bg-black text-white p-3">
        Sign Out
      </button>
    </section>
  );
}
