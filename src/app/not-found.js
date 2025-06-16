import Link from "next/link";
import { createPocketmonImageUrl } from "../libs/utils";
import Image from "next/image";

export default function NotFound() {
  const imageUrl = createPocketmonImageUrl({ id: 80 });

  return (
    <div className="flex flex-col items-center p-10">
      <h2 className="text-5xl">404 Not Found</h2>
      <Image src={imageUrl} alt="not fount image" width={150} height={150} />
      <p>찾으시는 페이지가 존재하지 않습니다.</p>

      <Link href="/" className="p-2 border">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
