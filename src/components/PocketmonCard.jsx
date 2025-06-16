/**
 * @typedef {Object} PocketmonCardProps
 * @property {import("@/types").PocketmonData} pocketmon
 */

import Image from "next/image";
import Link from "next/link";
import LikeButton from "./LikeButton";

/**
 * @param {PocketmonCardProps} props
 */
function PocketmonCard({ pocketmon }) {
  return (
    <section
      className="flex flex-col items-center justify-center px-3 py-2 transition-transform ease-in-out bg-white border-b-4 border-r-4 rounded-2xl hover:scale-105"
      key={pocketmon.id}
    >
      <Link href={`/detail/${pocketmon.id}`}>
        <Image
          width={100}
          height={100}
          src={pocketmon.frontImage}
          alt={`${pocketmon.name}-image`}
        />
      </Link>

      <div className="flex items-center justify-center gap-2">
        <span>{pocketmon.name}</span>
        <LikeButton pocketmonID={pocketmon.id} />
      </div>
    </section>
  );
}

export default PocketmonCard;
