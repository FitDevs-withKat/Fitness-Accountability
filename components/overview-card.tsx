import { ProfileType } from "../types/ProfileType";
import { basePath } from "../util/helper";
import Image from "next/image";

export default function OverviewCard({ profile }: { profile: ProfileType }) {
  return (
    <a href={`${basePath}/${profile.username}`}>
      <div className="m-4 flex w-full cursor-pointer flex-col rounded-lg border-8 border-sky-500 bg-white p-4 transition-all hover:shadow-xl">
        <div className="text-400 flex items-center text-lg font-semibold">
          <a target="_blank" rel="noreferrer" className="transition-all delay-75 duration-200 hover:underline" href={profile.url}>
            {profile.name}
          </a>
          <div className="ml-4">@{profile.username}</div>
        </div>

        <div className="mt-4">
          <Image
            className="location-icon"
            alt="SVG of Location Pointer"
            width={32}
            height={32}
            src={`${basePath}/location.svg`}
          />
          {profile.location}
        </div>
        <div className="mt-4">
          My goal is:
          <span className="ml-1 font-semibold">
            {profile.goal ? profile.goal : "-"}
          </span>
        </div>
      </div>
    </a>
  );
}
