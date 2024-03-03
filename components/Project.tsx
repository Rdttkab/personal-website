import { Octokit } from "octokit";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

async function getRepo(name: string) {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  const res = await octokit.request("GET /repos/{owner}/{repo}", {
    owner: "rdttkab",
    repo: name,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

const Project = async ({ name }: { name: string }) => {
  const repo = await getRepo(name);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{repo.name}</CardTitle>
        <CardDescription>{repo.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Link href=""></Link>
        <Link href={`https://${repo.homepage}`} target="_blank">
          Preview
        </Link>
      </CardFooter>
    </Card>
  );
};

export default Project;
