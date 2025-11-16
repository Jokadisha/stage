import Image from "next/image";

export default function Logo({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      width={width}
      height={height}
      src="/logo.svg"
      alt="logo"
      className={className}
    />
  );
}
