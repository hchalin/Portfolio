import { Project } from "@/typings";

export const fetchProjects =async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`)

    const data = await res.json()
    const projects: Project[] = data.projects
    console.log('fetching...', projects)

    return projects;
  } catch (err) {
    console.log('An error occured while fetching projects',projects)
  }
}
