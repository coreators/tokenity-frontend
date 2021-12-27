import {
  SigningCosmosClient,
  // coins,
  // coin,
} from '@cosmjs/launchpad';
import { of } from 'await-of';

export const checkKeplr = async (chainId) => {
  // Need keplr extension.
  if (!window.keplr) {
    let e = new Error('Undefined keplr extension');
    e.name = 'NotFoundError';
    throw e;
  } else {
    // Enabling before using the Keplr is recommended.
    // This method will ask the user whether to allow access if they haven't visited this website.
    // Also, it will request that the user unlock the wallet if the wallet is locked.
    const [, err] = await of(window.keplr.enable(chainId));
    if (err) {
      throw err;
    }
    return true;
  }
};

export const getCosmosClient = async (chainId) => {
  const [, err] = await of(checkKeplr(chainId));
  if (!err) {
    const offlineSigner = window.keplr.getOfflineSigner(chainId);

    // You can get the address/public keys by `getAccounts` method.
    // It can return the array of address/public key.
    // But, currently, Keplr extension manages only one address/public key pair.
    // XXX: This line is needed to set the sender address for SigningCosmosClient.
    const [accounts, err] = await of(offlineSigner.getAccounts());
    if(err){
      console.error(err);
      return null;
    }

    // Initialize the gaia api with the offline signer that is injected by Keplr extension.
    const client = new SigningCosmosClient(
      'https://lcd-cosmoshub.keplr.app',
      accounts[0].address,
      offlineSigner,
    );

    return client;
  } else {
    return null;
  }
};

// export const transaction = async () => {
//   const msg = {
//     type: 'cosmos-sdk/MsgDelegate',
//     value: {
//       delegator_address: address,
//       validator_address: 'cosmosvaloper1yfkkk04ve8a0sugj4fe6q6zxuvmvza8r3arurr',
//       amount: coin(300000, 'ustake'),
//     },
//   };
//   const fee = {
//     amount: coins(2000, 'ucosm'),
//     gas: '180000', // 180k
//   };

//   let signed = await client.sign([msg], fee);
//   console.log('Signed transaction:', signed);

//   // We can broadcast it manually later on
//   const result = await client.broadcastTx(signed);
//   console.log('Broadcasting result:', result);
// };
