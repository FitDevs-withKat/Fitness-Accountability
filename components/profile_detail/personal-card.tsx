import { ProfileType } from "../../types/ProfileType";

export default function ProfileDetail({ profile }: { profile: ProfileType }) {
  return (
    <aside className="flex flex-col items-center rounded-xl bg-white p-8 shadow-lg">
      <img
        alt={`profile picture of ${profile.name}`}
        className="rounded-full"
        height={150}
        width={150}
        src={profile.image}
      />
      <div className="my-1 text-xl font-bold leading-8 text-gray-900">
        <a
          target="_blank"
          rel="noreferrer"
          className="text-theme-secodary underline decoration-transparent transition-all delay-[50ms] duration-200 hover:decoration-inherit"
          href={profile.url}
        >
          {profile.name} <span className="text-sm">(@{profile.username})</span>
        </a>
      </div>
      <span>@{profile.location}</span>
    </aside>
  );
}
