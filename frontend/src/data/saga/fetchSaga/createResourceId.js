
import forge from 'node-forge';

const createResourceId = resource => {
  const digestableString = Object.values(resource).map(value => `${value}`).join('');
  const digest = forge.md.sha256.create().update(digestableString).digest().toHex();

  return digest;
};

export default createResourceId;
