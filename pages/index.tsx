import path from "path";
import fs from "fs";
import Head from "next/head";
import Profile from "../components/Profile";
import { ProfileType } from "../types/ProfileType";
import SearchFilter from "../components/SearchFilter";
import { useCallback, useEffect, useState } from "react";

export default function Home({ profiles }: { profiles: ProfileType[] }) {
  const [searchString, setSearchString] = useState("")
  const [filteredProfiles, setFilteredProfiles] = useState<ProfileType[]>([])

  const filterBySearchString = useCallback(() => {
    if(searchString !== ""){
      const filteredProfiles = profiles.filter(profile => profile.name.toLowerCase().includes(searchString) || profile.location.toLowerCase().includes(searchString))
      setFilteredProfiles(filteredProfiles)
    } else {
      setFilteredProfiles([])
    }
  },[profiles, searchString])

  useEffect(() => {
    filterBySearchString()
  },[searchString, filterBySearchString])

  return (
    <main className="container mx-auto">
      <Head>
        <title>Fitness-Accountability</title>
      </Head>
      <SearchFilter searchString={searchString} setSearchString={setSearchString} />
      { filteredProfiles.length === 0 && searchString === ""
        ? profiles.map((profile) => <Profile key={profile.name} profile={profile} />) 
        : filteredProfiles.map((profile) => <Profile key={profile.name} profile={profile} />) 
      }
    </main>
  );
}

export async function getStaticProps() {
  const readDirectoryPath = path.join(process.cwd(), "data");
  const files = fs.readdirSync(readDirectoryPath);

  const profiles = files.map((file) => {
    const data = JSON.parse(
      fs.readFileSync(`${path.join(process.cwd(), "data", file)}`, "utf8"),
    );

    return {
      username: file.split(".")[0],
      ...data,
    };
  });

  return {
    props: { profiles },
  };
}
