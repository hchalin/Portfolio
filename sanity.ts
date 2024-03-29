
import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

/**
 * doc reference
 * https://www.sanity.io/docs/connect-your-content-to-next-js
 */

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'Production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-03-03",
  useCdn: process.env.NODE_ENV === 'production',
};


export const sanityClient = createClient(config);

//This will turn images into sanity urls for photos
export const urlFor = (source: any )=> {
 return  createImageUrlBuilder(config).image(source)
}

