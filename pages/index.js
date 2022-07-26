import path from "path";
import fs from "fs";
import Head from "next/head";
import Profile from "../components/profile";

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
