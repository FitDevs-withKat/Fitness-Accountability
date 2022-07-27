import Image from "next/future/image";
import { useEffect } from "react";
export default function ProfileDetail({ profile }) {
  return (
    <aside className="flex flex-col items-center rounded-xl bg-white p-8 shadow-lg">
      <Image
        alt={`profile picture of ${profile.name}`}
        className="rounded-full"
        height={150}
        width={150}
        src={profile.image}
      />
      <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
        <a
          target="_blank"
          rel="noreferrer"
          className="text-theme-secodary underline decoration-transparent transition-all delay-[50ms] duration-200 hover:decoration-inherit"
          href={profile.url}
        >
          {profile.name}
        </a>
      </h1>
      <div>@{profile.username}</div>
    </aside>
  );
}
