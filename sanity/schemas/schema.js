import {createSchema, schemaTypes} from 'sanity'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([skill, pageInfo, experience, social, project]),
})
