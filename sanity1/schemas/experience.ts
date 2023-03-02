import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
   {
    name: 'company',
    title: 'Company',
    type: 'string'
   },
   {
    name: 'role',
    title: 'Role',
    type: 'string'
   },
   {
    name: 'companyImg',
    title: 'companyImg',
    type: 'image',
    options: {
      // this allows you to adjust the focal point
      hotspot: true,
    }
   },
   {
    name: 'startDate',
    title: 'StartDate',
    type: 'string'
   },
   {
    name: 'endDate',
    title: 'EndDate',
    type: 'string',
    }
   },
   {
    name: 'technology',
    title: 'Technology',
    type: 'array'
    // refers to other skill objects
    of :[{type: 'reference', to: {type: 'skill'}}]
   },
   {
    name: 'summary',
    title: 'Summary',
    type: 'array',
    // refers to an array of string types
    of: [{type: 'string'}]
   }

  ],


})
