import FlipingImage from "@/components/FlipingImage";
import Heart from "@/components/icons/Heart";
import LikeButton from "@/components/LikeButton";

export default async function Detail({ params }) {
  const { pocketmonID } = await params;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/pocketmon/${pocketmonID}`);
  const { data: pocketmon } = await res.json();

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center p-10 space-y-4 bg-white border-b-4 border-r-4 w-96 rounded-2xl">
        <div className="flex items-center justify-center ">
          <h1 className="text-3xl">{pocketmon.name}</h1>
          <LikeButton pocketmonID={pocketmonID} />
        </div>
        <p className="text-center">{pocketmon.description}</p>
        <FlipingImage
          frontImage={pocketmon.frontImage}
          backImage={pocketmon.backImage}
        />
      </div>
    </div>
  );
}
