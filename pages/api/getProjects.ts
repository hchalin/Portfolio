import { NextApiRequest,NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Project } from "@/typings";

const query = groq`*[_type == "project"] {
  ...,
  technologies[] ->
}`


type Data = {
  skills: Skill[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const socials: Skill[] = await sanityClient.fetch(query)

  res.status(200).json({ skills })
}






