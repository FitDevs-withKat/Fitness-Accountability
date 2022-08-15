import Link from "next/link";
import { ProfileType } from "../types/ProfileType";
import { basePath } from "../util/helper";

export default function OverviewCard({ profile }: { profile: ProfileType }) {
  return (
    <Link href={`/${profile.username}`}>
      <div className="my-4 mx-auto flex w-full cursor-pointer flex-col rounded-lg bg-white p-4 transition-all hover:shadow-xl ">
        <div className="text-400 flex items-center text-lg font-semibold">
          <a
            target="_blank"
            rel="noreferrer"
            className="dely-75 transition-all duration-200 hover:underline"
            href={profile.url}
          >
            {profile.name}
          </a>
          <div className="ml-4">@{profile.username}</div>
        </div>

        <div className="mt-4">
          <picture>
            <img
              className="location-icon"
              alt="SVG of Location Pointer"
              src={`${basePath}/location.svg`}
            />
          </picture>
          {profile.location}
        </div>
        <div className="mt-4">
          My goal is:
          <span className="ml-1 font-semibold">
            {profile.goal ? profile.goal : "-"}
          </span>
        </div>
      </div>
    </Link>
  );
}
