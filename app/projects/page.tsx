import Project from "@/components/Project";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Octokit } from "octokit";

async function getRepos() {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  const res = await octokit.request("GET /user/repos");

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

const ProjectsPage = async () => {
  const repos = await getRepos();
  console.log("🚀 ~ ProjectsPage ~ repos:", repos);
  const projects = [
    "calculator-app",
    "nft-preview-card",
    "time-tracking-dashboard",
    "interactive-comments",
    "order-summary-component",
    "splitter",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full p-4 justify-center">
      {projects.map((project) => (
        <Project key={project} name={project} />
      ))}
    </div>
  );
};

export default ProjectsPage;
