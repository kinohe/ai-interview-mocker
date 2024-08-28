/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./util/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-interview-mocker_owner:Un9uzX1SPsGH@ep-red-resonance-a5tncjg8.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
};
