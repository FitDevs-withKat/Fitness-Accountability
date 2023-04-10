import Link from "next/link";
import { ProfileType } from "../types/ProfileType";
import { basePath } from "../util/helper";
import Image from "next/image";

export default function OverviewCard({ profile }: { profile: ProfileType }) {
  return (
    <Link href={`${basePath}/${profile.username}`}>
      <div className="my-4 mx-auto flex w-full cursor-pointer flex-col rounded-lg bg-white p-4 transition-all hover:shadow-xl ">
        <div className="text-400 flex items-center text-lg font-semibold">
          <a
          target="_blank"
          rel="noreferrer"
          className=""
          href={profile.url}>
            <Image
              alt="User profile picture" 
              src={profile.image}
              className="card-profile-image"
              width={20}
              height={20}
            />
          </a>
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
            alt="SVG of Location Pointer"
            className="location-icon"
            width={16}
            height={16}
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
    </Link>
  );
}
