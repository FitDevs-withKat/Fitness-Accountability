import { useRouter } from "next/router";

export default function Profile({ profile }) {
  const handleClick = async () => {
    await router.push(`/${profile.username}`);
  };
  const router = useRouter();
  return (
    <>
      <div
        onClick={() => handleClick()}
        className="m-4 flex w-full cursor-pointer flex-col rounded-lg bg-white p-4 transition-all hover:shadow-xl"
      >
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

        <div className="mt-4">📍 {profile.location}</div>
        <div className="mt-4">
          My goal is:
          <span className="ml-1 font-semibold">
            {profile.goal ? profile.goal : "-"}
          </span>
        </div>
      </div>
    </>
  );
}
