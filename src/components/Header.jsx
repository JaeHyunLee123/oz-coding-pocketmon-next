import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col">
      <div className="h-12 bg-[#ff0000]" />
      <div className="flex items-center justify-center p-2 bg-black">
        <h1 className="text-4xl text-center text-white">포켓몬 도감</h1>
      </div>
      <div className="flex items-center justify-center gap-2 p-2">
        <Link href="/">메인페이지</Link>
        <Link href="/favorites">찜목록</Link>
      </div>
    </header>
  );
}
