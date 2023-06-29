import { useSession } from 'next-auth/react';
export default function Dashboard() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <section className="flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold">Dashboard</h1>
    </section>
  );
}
