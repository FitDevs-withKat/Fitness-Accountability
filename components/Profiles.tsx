import { ProfileType } from "../types/ProfileType";
import { basePath } from "../util/helper";
import Profile from "./Profile";

export default function Profiles({ profiles }: { profiles: any }) {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
      {profiles.map((profile) => (
          <Profile key={profile.name} profile={profile} />
        ))}
      </div>
    </>
  );
}
