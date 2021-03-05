
import forge from 'node-forge';

const createId = ({ sort, page, size }) => {
  const digestableString = `${sort}.${page}.${size}`;
  const digest = forge.md.sha256.create().update(digestableString).digest().toHex();

  return digest;
};

export default createId;
