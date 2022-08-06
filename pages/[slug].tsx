import { loadProfilePaths, loadSingleProfile } from "../util/load-profiles";
import ProfileDetail from "../components/profile_detail/personal-card";
import DetailCard from "../components/profile_detail/detail-card";
import path from "path";
import Head from "next/head";
import { ProfileType } from "../types/ProfileType";

export default function DetailProfile({ profile }: { profile: ProfileType }) {
  return (
    <div>
      <Head>
        <title>Fitness-Accountability {profile.name}</title>
      </Head>
      <div className="no-wrap mt-8 flex flex-col gap-4 md:flex-row">
        <div className="w-full md:w-1/3">
          <ProfileDetail profile={profile} />
        </div>
        <div className="w-full md:w-3/4">
          <DetailCard profile={profile} />
        </div>
      </div>
    </div>
    
  );
}
export async function getStaticPaths() {
  const paths = loadProfilePaths();
  const trimmedPaths = paths.map((filePath) => {
    return path.parse(filePath).name;
  });

  return {
    paths: trimmedPaths.map((trimmedPath) => {
      return {
        params: { slug: trimmedPath },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const profile = loadSingleProfile(params.slug);
  return {
    props: { profile },
  };
}
