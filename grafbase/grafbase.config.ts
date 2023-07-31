import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.string().optional(),
  linkedinUrl: g.string().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});

const Project = g.model("Project", {
  title:g.string().length({min:3}),
  desciption:g.string(),
  image:g.url(),
  liveSiteUrl:g.string().optional(),
  githubUrl: g.string().optional(),
  category:g.string().search(),
  createdBt:g.relation(()=>User)
});
export default config({
  schema: g,
});
