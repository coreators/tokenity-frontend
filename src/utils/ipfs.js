import * as IPFS from 'ipfs-core';

export const addData = async () => {
const ipfs = await IPFS.create();
console.log(ipfs);
  // const { cid } = await ipfs.add('Hello world');
  // console.log(cid);
};
