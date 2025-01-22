import { type SchemaTypeDefinition } from 'sanity'
import { data } from './data'
// import { product } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [data],
}
