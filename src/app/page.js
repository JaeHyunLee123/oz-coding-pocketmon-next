import PocketmonCard from "./components/PocketmonCard";

export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/pocketmon`);
  const { data: pocketmons } = await res.json();

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5">
      {pocketmons
        ? pocketmons.map((pocketmon) => (
            <PocketmonCard key={pocketmon.id} pocketmon={pocketmon} />
          ))
        : ""}
    </div>
  );
}
