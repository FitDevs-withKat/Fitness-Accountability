import { loadProfiles } from "../util/load-profiles";
import Head from "next/head";
import OverviewCard from "../components/overview-card";
import { ProfileType } from "../types/ProfileType";

export default function Home({ profiles }: { profiles: ProfileType[] }) {
  return (
    <div>
      <Head>
        <title>Fitness-Accountability</title>
      </Head>
      {profiles.map((profile) => (
        <OverviewCard key={profile.name} profile={profile} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const profiles = loadProfiles();
  return {
    props: { profiles },
  };
}
