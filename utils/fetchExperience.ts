import { Experience } from "@/typings";

export const fetchExperience =async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`)

    const data = await res.json()
    const experience: Experience[] = data.experiences


    return experience;
  } catch (err) {
    console.log('An error occured while fetching experience',experience)
  }
}
