import Link from "next/link";
import { ProfileType } from "../../types/ProfileType";
import ProfileDetail from "./personal-card";

export default function DetailCard({ profile }: { profile: ProfileType }) {
 

  return (
    <section className="flex flex-col rounded-xl bg-white p-8 shadow-lg gap-8">
        <Link href={'/'}>
          <span className="inline-flex items-center gap-2 cursor-pointer hover:font-bold">
            <i className="ri-arrow-left-circle-line text-lg "></i>
            Go Back
          </span>
        </Link>

      <ProfileDetail profile={profile}/>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3  ">

              <div className="flex flex-row gap-2">
                  <i className="ri-lightbulb-line text-3xl"></i>
                  <div>
                    <span className="text-2xl">Goal</span>
                    <p className="text-lg">{profile?.goal}</p>
                  </div>
              </div>


              <div className="flex flex-row  gap-2">
                  <i className="ri-question-line text-3xl"></i>
                  <div>
                    <span className="text-2xl">Reason</span>
                    <p className="text-lg">{profile?.why}</p>
                  </div>
              </div>

              <div className="flex flex-row  gap-2 ">
                  <i className="ri-bar-chart-box-line text-3xl"></i>
                  <div>
                    <span className="text-2xl">Commitment</span>
                    <ul >
                      {profile.weekly?.map((item) => (<li key={item} className="text-lg">- {item}</li>))}
                    </ul>
                  </div>
              </div>
      </div>


      
      {/* <div className="grid">
        <div className="grid grid-cols-2">
          <p className="flex items-center  py-2 px-4 text-center">
            Location
          </p>
          <span className="flex items-center  py-2 px-4 text-center font-semibold">
            {profile.location}
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center  px-4 py-2 text-center">
            Goal
          </div>
          <div className="flex items-center  px-4 py-2 text-center font-semibold">
            {profile.goal}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-center  px-4 py-2 text-center">
            Why
          </div>
          <div className="flex items-center  px-4 py-2 text-center font-semibold">
            {profile.why}
          </div>
        </div>
      </div>
      <hr className="my-8 mx-8 border-gray-200"></hr>
      <div className="grid">
        <div className="grid grid-cols-2">
          <div className="flex items-center  text-center">
            Weekly
          </div>
          <div>
            <ul>
              {profile.weekly.map((item) => (
                <li
                  key={item}
                  className=" flex items-center  text-center font-semibold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
}
