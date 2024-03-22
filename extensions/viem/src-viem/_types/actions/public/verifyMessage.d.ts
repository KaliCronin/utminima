import type { Client } from '../../clients/createClient.js'
import type { Transport } from '../../clients/transports/createTransport.js'
import type { Chain } from '../../types/chain.js'
import type { ByteArray, Hex, SignableMessage } from '../../types/misc.js'
import { type VerifyHashParameters } from './verifyHash.js'
import type { Address } from 'abitype'
export type VerifyMessageParameters = Omit<VerifyHashParameters, 'hash'> & {
	/** The address that signed the original message. */
	address: Address
	/** The message to be verified. */
	message: SignableMessage
	/** The signature that was generated by signing the message with the address's private key. */
	signature: Hex | ByteArray
}
export type VerifyMessageReturnType = boolean
/**
 * Verify that a message was signed by the provided address.
 *
 * Compatible with Smart Contract Accounts & Externally Owned Accounts via [ERC-6492](https://eips.ethereum.org/EIPS/eip-6492).
 *
 * - Docs {@link https://viem.sh/docs/actions/public/verifyMessage.html}
 *
 * @param client - Client to use.
 * @param parameters - {@link VerifyMessageParameters}
 * @returns Whether or not the signature is valid. {@link VerifyMessageReturnType}
 */
export declare function verifyMessage<TChain extends Chain | undefined>(
	client: Client<Transport, TChain>,
	{ address, message, signature, ...callRequest }: VerifyMessageParameters,
): Promise<VerifyMessageReturnType>
//# sourceMappingURL=verifyMessage.d.ts.map
