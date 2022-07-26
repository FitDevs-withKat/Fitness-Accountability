import fs from "fs";
import path from "path";

export const loadProfilePaths = () => {
  const readDirectoryPath = path.join(process.cwd(), "data");
  const files = fs.readdirSync(readDirectoryPath);

  return files;
};

export const loadProfiles = () => {
  const files = loadProfilePaths();
  const profiles = files.map((file) => {
    const data = JSON.parse(
      fs.readFileSync(`${path.join(process.cwd(), "data", file)}`, "utf8"),
    );

    return {
      username: file.split(".")[0],
      ...data,
    };
  });
  return profiles;
};

export const loadSingleProfile = (username) => {
  const profile = JSON.parse(
    fs.readFileSync(
      `${path.join(process.cwd(), "data", `${username}.json`)}`,
      "utf8",
    ),
  );
  return profile;
};
