import { createHash } from 'crypto';

export const getHash = (s) => {
  return createHash('sha256').update(s).digest('hex');
};
