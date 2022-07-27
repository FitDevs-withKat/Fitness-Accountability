import { loadProfilePaths, loadSingleProfile } from "../util/load-profiles";
import ProfileDetail from "../components/profile_detail/personal-card";
import DetailCard from "../components/profile_detail/detail-card";
import path from "path";

export default function DetailProfile({ profile }) {
  return (
    <div className="no-wrap md:-mx-2 md:flex">
      <div className="w-full md:mx-2 md:w-3/12">
        <ProfileDetail profile={profile} />
      </div>
      <div className="mx-2 h-64 w-full md:w-9/12">
        <DetailCard />
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
