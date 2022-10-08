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

    data.name = capitalizeStrings(data.name);
    data.goal = capitalizeStrings(data.goal);

    return {
      username: file.split(".")[0],
      ...data,
    };
  }).sort(sortByName);
  return profiles;
};

const sortByName = (profile1, profile2) => {
  const name1 = profile1.name.toLowerCase();
  const name2 = profile2.name.toLowerCase();
  if (name1 < name2) {
    return -1;
  }
  if (name1 > name2) {
    return 1;
  }

  return 0;
}

export const loadSingleProfile = (username) => {
  const profile = JSON.parse(
    fs.readFileSync(
      `${path.join(process.cwd(), "data", `${username}.json`)}`,
      "utf8",
    ),
  );
  return {
    username,
    ...profile,
  };
};

function capitalizeStrings(str:String){
  return str.charAt(0).toUpperCase() + str.slice(1);
}