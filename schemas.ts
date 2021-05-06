import S from 'fluent-json-schema';

export const updateSchema = S.object()
  // TODO: .additionalProperties(false) in schemas don't seem to work properly and
  // are very counter-intuitive. We should change to JTD format (as soon as it is supported)
  // .additionalProperties(false)
  .prop(
    'document',
    S.object()
      // .additionalProperties(false)
      .prop('content', S.string())
      .required(['content'])
  )
  .required(['document']);

export const createSchema = S.object()
  .prop('type', S.const('document'))
  .prop('extra', updateSchema)
  .required(['type', 'extra']);
