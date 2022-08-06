import { loadProfiles } from "../util/load-profiles";
import Head from "next/head";
import { ProfileType } from "../types/ProfileType";
import SearchFilter from "../components/SearchFilter";
import { useCallback, useEffect, useState } from "react";
import Profiles from "../components/Profiles";
import Heading from "../components/Heading";

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
    <div className="">
      <Head>
        <title>Fitness-Accountability</title>
      </Head>

      <SearchFilter searchString={searchString} setSearchString={setSearchString} />
        {filteredProfiles.length === 0 && searchString === ""
          ? <Profiles profiles={profiles} /> 
          : <Profiles profiles={filteredProfiles} /> 
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
