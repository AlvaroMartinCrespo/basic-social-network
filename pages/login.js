import Link from 'next/link';
export default function Login() {
  const handler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="flex h-screen flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="flex gap-5 items-center my-5 ">
        <form onSubmit={handler} className="flex flex-col items-center gap-5">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input name="email" type="text" className="border outline-none p-3" />
          <label htmlFor="email" className="font-bold">
            Contraseña
          </label>
          <input name="email" type="password" className="border outline-none p-3" />
        </form>
      </div>
      <Link href="/">Volver</Link>
    </section>
  );
}
