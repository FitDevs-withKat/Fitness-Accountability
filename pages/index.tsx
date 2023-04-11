import { loadProfiles } from "../util/load-profiles";
import Head from "next/head";
import { ProfileType } from "../types/ProfileType";
import SearchFilter from "../components/SearchFilter";
import { useCallback, useEffect, useState } from "react";
import OverviewCard from "../components/Profile";
import { basePath } from "../util/helper";
import Image from "next/image";

export default function Home({ profiles }: { profiles: ProfileType[] }) {
  const [searchString, setSearchString] = useState("")
  const [filteredProfiles, setFilteredProfiles] = useState<ProfileType[]>([])

  const filterBySearchString = useCallback(() => {
    if(searchString !== ""){
      const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(searchString.toLowerCase()) || profile.location.toLowerCase().includes(searchString.toLowerCase()))
      setFilteredProfiles(filteredProfiles)
    } else {
      setFilteredProfiles([])
    }
  },[profiles, searchString])

  useEffect(() => {
    filterBySearchString()
  },[searchString, filterBySearchString])

  return (
    <div>
      <Head>
        <title>Fitness-Accountability</title>
      </Head>
      <div className='py-4 flex justify-center items-end'>
        <a href="https://github.com/FitDevs-withKat/Fitness-Accountability" target="_blank" rel="noreferrer"><Image src={`${basePath}/fitdevslogo.png`} alt="FitDevs Logo" width={200} height={200}/></a>
      </div>
      <SearchFilter searchString={searchString} setSearchString={setSearchString} />
      {filteredProfiles.length === 0 && searchString === ""
        ? profiles.map((profile) => <OverviewCard key={profile.name} profile={profile} />) 
        : filteredProfiles.map((profile) => <OverviewCard key={profile.name} profile={profile} />) 
      }
    </div>
  );
}

export async function getStaticProps() {
  const profiles = loadProfiles();
  return {
    props: { profiles },
  };
}
