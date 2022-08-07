import Image from "next/image";
import { ProfileType } from "../types/ProfileType";
import { basePath } from "../util/helper";

export default function OverviewCard({ profile }: { profile: ProfileType }) {
  return (
    <a href={`${basePath}/${profile.username}`}>
      <div className="m-4 flex w-full cursor-pointer flex-col rounded-lg bg-white p-4 transition-all hover:shadow-xl border-8 border-sky-500">
        <div className="text-400 flex items-center text-lg font-semibold">
          <a
            target="_blank"
            rel="noreferrer"
            className="transition-all delay-75 duration-200 hover:underline"
            href={profile.url}
          >
            {profile.name}
          </a>
          <div className="ml-4">@{profile.username}</div>
        </div>

        <div className="mt-4">
          <Image
            className="location-icon"
            alt="SVG of Location Pointer"
            src={"/location.svg"}
            width={48}
            height={48}
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
