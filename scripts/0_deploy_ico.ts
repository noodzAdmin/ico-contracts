import { Deployer, DeployFunction, Network } from '@alephium/cli'
import { Settings } from '../alephium.config'
import { ICO } from '../artifacts/ts'
import { ONE_ALPH } from '@alephium/web3'

// This deploy function will be called by cli deployment tool automatically
// Note that deployment scripts should prefixed with numbers (starting from 0)
const deployIco: DeployFunction<Settings> = async (deployer: Deployer, network: Network<Settings>): Promise<void> => {
  const result = await deployer.deployContract(ICO, {
    initialFields: {
      tokenId: '',
      rate: BigInt(0),
      tokenBalance: BigInt(0),
      alphBalance: BigInt(1),
      selfOwner: ''
    },
    initialAttoAlphAmount: ONE_ALPH
  })
  console.log('ico contract id: ' + result.contractInstance.contractId)
  console.log('ico contract address: ' + result.contractInstance.address)
}

export default deployIco
