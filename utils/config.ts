import "dotenv/config";

export const config = {
  // WEBSITE_URL_STAGING: process.env.WEBSITE_URL_STAGING as string,
  username: process.env.LOGIN_EMAIL as string,
  password: process.env.LOGIN_PASSWORD as string,
};
