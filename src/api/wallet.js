import { Secp256k1HdWallet } from '@cosmjs/launchpad';

export const create = async ({ name, password }) => {
  const wallet = await Secp256k1HdWallet.generate();
  console.log('Mnemonic:', wallet.mnemonic);

  const [{ address }] = await wallet.getAccounts();
  console.log('Address:', address);

  const account = {
    name: name,
    password: password,
    address: address,
    avatar: undefined,
    description: '',
  };
  return account;
};

export const importing = async ({ mnemonic }) => {
  const wallet = await Secp256k1HdWallet.fromMnemonic(mnemonic);

  const [{ address }] = await wallet.getAccounts();
  console.log('Address:', address);

  const account = {
    name: 'importName',
    password: 'importPassword',
    address: address,
    avatar: undefined,
    description: '',
  };
  return account;
};

export const setProfile = async () => {
  return null;
};
