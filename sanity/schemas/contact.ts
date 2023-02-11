import {title} from 'process'
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'contact',
  type: 'document',
  fields: [
    {
      name: 'header1',
      title: 'Header1',
      description: 'header',
      type: 'string',
    },
    {
      name: 'nameHeading',
      title: 'NameHeading',
      description: 'nameHeading',
      type: 'string',
    },
    {
      name: 'emailHeading',
      title: 'EmailHeading',
      description: 'emailHeading',
      type: 'string',
    },
    {
      name: 'projectHeading',
      title: 'ProjectHeading',
      description: 'projectHeading',
      type: 'string',
    },
    {
      name: 'button',
      title: 'Button',
      description: 'button',
      type: 'string',
    },
    {
      name: 'header2',
      title: 'Header2',
      description: 'header',
      type: 'string',
    },
    {
      name: 'mail',
      title: 'Mail',
      description: 'mail',
      type: 'string',
    },
    {
      name: 'mailValue',
      title: 'MailValue',
      description: 'mailValue',
      type: 'email',
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      description: 'linkedin',
      type: 'string',
    },
    {
      name: 'linkedinValue',
      title: 'LinkedinValue',
      description: 'linkedinValue',
      type: 'string',
    },
  ],
})
