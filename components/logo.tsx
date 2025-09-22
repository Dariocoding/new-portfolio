import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Link href="/">
      <Image src="/logo.png" alt="logo" width={75} height={75} />
    </Link>
  );
}
