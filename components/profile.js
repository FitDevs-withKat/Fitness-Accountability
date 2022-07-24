export default function Profile({ profile }) {
  return (
    <>
      <div className="flex transition-all hover:shadow-xl cursor-pointer flex-col bg-white rounded-lg p-4 m-4 w-full">
        <div className="text-400 flex text-lg items-center font-semibold">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline transition-all delay-75 duration-200"
            href={profile.url}
          >
            {profile.name}
          </a>
          <div className="ml-4">@{profile.username}</div>
        </div>

        <div className="mt-4">📍 {profile.location}</div>
        <div className="mt-4">
          My goal is:
          <span className="font-semibold ml-1">
            {profile.goal ? profile.goal : "-"}
          </span>
        </div>
      </div>
    </>
  );
}
