import { loadProfilePaths, loadSingleProfile } from "../util/load-profiles";
import ProfileDetail from "../components/profile_detail/personal-card";
import DetailCard from "../components/profile_detail/detail-card";
import path from "path";
import { ProfileType } from "../types/ProfileType";

export default function DetailProfile({ profile }: { profile: ProfileType }) {
  return (
    <div className="flex justify-center">
        <DetailCard profile={profile} />
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
