import { loadProfilePaths, loadSingleProfile } from "../util/load-profiles";
import ProfileDetail from "../components/profile-detail";
import path from "path";

export default function DetailProfile({ profile }) {
  return (
    <main>
      <ProfileDetail profile={profile} />
    </main>
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
