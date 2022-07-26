export default function ProfileDetail({ profile }) {
  return (
    <div className="flex flex-col">
      <img
        alt={`profile picture of ${profile.name}`}
        className="h-16 w-16 rounded-full"
        src={profile.image}
      ></img>
    </div>
  );
}
