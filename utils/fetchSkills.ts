import { Skill } from "@/typings";

export const fetchSkills =async () => {
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)

  const data = await res.json()
  const skills: Skill[] = data.skills


  return skills;
  } catch (err){
    console.log('An error occured while fetching skills', skills)
  }
}
