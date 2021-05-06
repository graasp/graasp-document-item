import { FastifyPluginAsync } from 'fastify';
import { createSchema, updateSchema } from './schemas';

// interface DocumentItemExtra extends UnknownExtra {
//   document: {
//     content: string
//   }
// }

// const ITEM_TYPE = 'document';

const plugin: FastifyPluginAsync = async (fastify) => {
  const { items: { extendCreateSchema, extendExtrasUpdateSchema } } = fastify;

  // "install" custom schema for validating document items creation
  extendCreateSchema(createSchema);

  // "install" custom schema for validating document items update
  extendExtrasUpdateSchema(updateSchema);
};

export default plugin;
