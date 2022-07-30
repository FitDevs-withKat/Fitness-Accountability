const prodSubfolder = "/Fitness-Accountability";
const isProd = process.env.NODE_ENV === "production";

export const basePath = isProd ? prodSubfolder : "";
