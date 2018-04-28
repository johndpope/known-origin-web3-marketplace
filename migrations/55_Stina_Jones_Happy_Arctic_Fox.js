const KnownOriginDigitalAsset = artifacts.require('KnownOriginDigitalAsset');

const loadSeedData = require('../scripts/migrations/loadSeedData');
const loadContractCredentials = require('../scripts/migrations/loadContractCredentials');
const blocktimestampPlusOne = require('../scripts/migrations/blocktimestampPlusOne');

const galleryData = {
  'artists': [
    {
      'name': 'Stina Jones',
      'artworks': [
        {
          'ipfsPath': 'stina_jones_happy_fox',
          'edition': 'STJHAPPYFOX00DIG',
          'numberOfEditions': 1,
          'costInEth': 0.1
        },
        {
          'ipfsPath': 'stina_jones_happy_fox',
          'edition': 'STJHAPPYFOX00DIG',
          'numberOfEditions': 1,
          'costInEth': 0.1
        },
        {
          'ipfsPath': 'stina_jones_happy_fox',
          'edition': 'STJHAPPYFOX00DIG',
          'numberOfEditions': 1,
          'costInEth': 0.1
        },
        {
          'ipfsPath': 'stina_jones_happy_fox',
          'edition': 'STJHAPPYFOX00DIG',
          'numberOfEditions': 1,
          'costInEth': 0.1
        },
        {
          'ipfsPath': 'stina_jones_happy_fox',
          'edition': 'STJHAPPYFOX00DIG',
          'numberOfEditions': 1,
          'costInEth': 0.1
        }
      ]
    }
  ]
};


const artistAccount = undefined;

module.exports = async function (deployer, network, accounts) {

  const {_curatorAccount, _developerAccount, _artistAccount} = loadContractCredentials(network, accounts, artistAccount);

  console.log(`Running within network = ${network}`);

  let instance = await KnownOriginDigitalAsset.deployed();
  const _openingTime = await blocktimestampPlusOne(web3);

  console.log(`Deployed contract to address = [${instance.address}] to network [${network}]`);

  if (network === 'ganache' || network === 'live' || network === 'ropsten' || network === 'rinkeby') {
    console.log(`Loading in seed data...`);
    return loadSeedData(instance, _artistAccount, _openingTime, galleryData, _developerAccount);
  } else {
    console.log(`SKIPPING loading seed data as running on ${network}`);
  }

  return instance;

};
