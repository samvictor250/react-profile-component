import Profile from "@/components/Profile"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <header className="mb-10">
        <h6 className="text-sm uppercase tracking-widest">
          Site criado para a disciplina Programação Front-End
        </h6>
      </header>

      <Profile/>

    </div>
  );
}
