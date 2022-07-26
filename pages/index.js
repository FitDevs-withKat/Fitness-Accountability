import { loadProfiles } from "../util/load-profiles";
import Head from "next/head";
import Profile from "../components/overview-card";

export default function Home({ profiles }) {
  return (
    <main className="container mx-auto">
      <Head>
        <title>Fitness-Accountability</title>
      </Head>
      {profiles.map((profile) => (
        <Profile key={profile.name} profile={profile} />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const profiles = loadProfiles();
  return {
    props: { profiles },
  };
}
