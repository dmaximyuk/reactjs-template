export const generateUniqueId = (): string => {
  const TIMESTAMP_RADIX = 36;
  const RANDOM_RADIX = 36;
  const RANDOM_START_INDEX = 2;
  const RANDOM_END_INDEX = 10;

  const timestamp = Date.now().toString(TIMESTAMP_RADIX);
  // eslint-disable-next-line sonarjs/pseudo-random
  const random = Math.random()
    .toString(RANDOM_RADIX)
    .substring(RANDOM_START_INDEX, RANDOM_END_INDEX);

  return `${timestamp}-${random}`;
};
