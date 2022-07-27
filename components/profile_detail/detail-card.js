export default function DetailCard({ profile }) {
  return (
    <div className="flex flex-col rounded-xl bg-white p-8 shadow-lg">
      <div className="grid">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center py-2 px-4 text-center">
            Location 📍
          </div>
          <div className="flex items-center justify-center py-2 px-4 text-center font-semibold">
            {profile.location}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center px-4 py-2 text-center">
            Goal 🥅
          </div>
          <div className="flex items-center justify-center px-4 py-2 text-center font-semibold">
            {profile.goal}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center px-4 py-2 text-center">
            Why ✨
          </div>
          <div className="flex items-center justify-center px-4 py-2 text-center font-semibold">
            {profile.why}
          </div>
        </div>
      </div>
      <hr className="my-8 mx-8 border-gray-200"></hr>
      <div className="grid">
        <div className="grid grid-cols-2">
          <div className="flex items-center justify-center text-center">
            Weekly 🏋️
          </div>
          <div>
            <ul>
              {profile.weekly.map((item) => (
                <li className=" flex items-center justify-center text-center font-semibold">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
