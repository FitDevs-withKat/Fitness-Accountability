import { ProfileType } from "../types/ProfileType";
import { basePath } from "../util/helper";

export default function OverviewCard({ profile }: { profile: ProfileType }) {
  return (
    <a href={`${basePath}/${profile.username}`}>
      <div className="my-4 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-4 text-center transition-all hover:shadow-xl">
        <div className="text-400 flex items-center text-lg font-semibold">
          <span className="text-theme-secodary transition-all delay-[50ms] duration-200">
            {profile.name}
          </span>
          <div className="ml-4">@{profile.username}</div>
        </div>

        <div className="mt-4">
          <img
            className="location-icon"
            alt="SVG of Location Pointer"
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
