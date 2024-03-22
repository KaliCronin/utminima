'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.publicActions = void 0
const getEnsAddress_js_1 = require('../../actions/ens/getEnsAddress.js')
const getEnsAvatar_js_1 = require('../../actions/ens/getEnsAvatar.js')
const getEnsName_js_1 = require('../../actions/ens/getEnsName.js')
const getEnsResolver_js_1 = require('../../actions/ens/getEnsResolver.js')
const getEnsText_js_1 = require('../../actions/ens/getEnsText.js')
const call_js_1 = require('../../actions/public/call.js')
const createBlockFilter_js_1 = require('../../actions/public/createBlockFilter.js')
const createContractEventFilter_js_1 = require('../../actions/public/createContractEventFilter.js')
const createEventFilter_js_1 = require('../../actions/public/createEventFilter.js')
const createPendingTransactionFilter_js_1 = require('../../actions/public/createPendingTransactionFilter.js')
const estimateContractGas_js_1 = require('../../actions/public/estimateContractGas.js')
const estimateFeesPerGas_js_1 = require('../../actions/public/estimateFeesPerGas.js')
const estimateGas_js_1 = require('../../actions/public/estimateGas.js')
const estimateMaxPriorityFeePerGas_js_1 = require('../../actions/public/estimateMaxPriorityFeePerGas.js')
const getBalance_js_1 = require('../../actions/public/getBalance.js')
const getBlock_js_1 = require('../../actions/public/getBlock.js')
const getBlockNumber_js_1 = require('../../actions/public/getBlockNumber.js')
const getBlockTransactionCount_js_1 = require('../../actions/public/getBlockTransactionCount.js')
const getBytecode_js_1 = require('../../actions/public/getBytecode.js')
const getChainId_js_1 = require('../../actions/public/getChainId.js')
const getFeeHistory_js_1 = require('../../actions/public/getFeeHistory.js')
const getFilterChanges_js_1 = require('../../actions/public/getFilterChanges.js')
const getFilterLogs_js_1 = require('../../actions/public/getFilterLogs.js')
const getGasPrice_js_1 = require('../../actions/public/getGasPrice.js')
const getLogs_js_1 = require('../../actions/public/getLogs.js')
const getStorageAt_js_1 = require('../../actions/public/getStorageAt.js')
const getTransaction_js_1 = require('../../actions/public/getTransaction.js')
const getTransactionConfirmations_js_1 = require('../../actions/public/getTransactionConfirmations.js')
const getTransactionCount_js_1 = require('../../actions/public/getTransactionCount.js')
const getTransactionReceipt_js_1 = require('../../actions/public/getTransactionReceipt.js')
const multicall_js_1 = require('../../actions/public/multicall.js')
const readContract_js_1 = require('../../actions/public/readContract.js')
const simulateContract_js_1 = require('../../actions/public/simulateContract.js')
const uninstallFilter_js_1 = require('../../actions/public/uninstallFilter.js')
const verifyMessage_js_1 = require('../../actions/public/verifyMessage.js')
const verifyTypedData_js_1 = require('../../actions/public/verifyTypedData.js')
const waitForTransactionReceipt_js_1 = require('../../actions/public/waitForTransactionReceipt.js')
const watchBlockNumber_js_1 = require('../../actions/public/watchBlockNumber.js')
const watchBlocks_js_1 = require('../../actions/public/watchBlocks.js')
const watchContractEvent_js_1 = require('../../actions/public/watchContractEvent.js')
const watchEvent_js_1 = require('../../actions/public/watchEvent.js')
const watchPendingTransactions_js_1 = require('../../actions/public/watchPendingTransactions.js')
const prepareTransactionRequest_js_1 = require('../../actions/wallet/prepareTransactionRequest.js')
const sendRawTransaction_js_1 = require('../../actions/wallet/sendRawTransaction.js')
function publicActions(client) {
	return {
		call: (args) => (0, call_js_1.call)(client, args),
		createBlockFilter: () =>
			(0, createBlockFilter_js_1.createBlockFilter)(client),
		createContractEventFilter: (args) =>
			(0, createContractEventFilter_js_1.createContractEventFilter)(
				client,
				args,
			),
		createEventFilter: (args) =>
			(0, createEventFilter_js_1.createEventFilter)(client, args),
		createPendingTransactionFilter: () =>
			(0, createPendingTransactionFilter_js_1.createPendingTransactionFilter)(
				client,
			),
		estimateContractGas: (args) =>
			(0, estimateContractGas_js_1.estimateContractGas)(client, args),
		estimateGas: (args) => (0, estimateGas_js_1.estimateGas)(client, args),
		getBalance: (args) => (0, getBalance_js_1.getBalance)(client, args),
		getBlock: (args) => (0, getBlock_js_1.getBlock)(client, args),
		getBlockNumber: (args) =>
			(0, getBlockNumber_js_1.getBlockNumber)(client, args),
		getBlockTransactionCount: (args) =>
			(0, getBlockTransactionCount_js_1.getBlockTransactionCount)(client, args),
		getBytecode: (args) => (0, getBytecode_js_1.getBytecode)(client, args),
		getChainId: () => (0, getChainId_js_1.getChainId)(client),
		getEnsAddress: (args) =>
			(0, getEnsAddress_js_1.getEnsAddress)(client, args),
		getEnsAvatar: (args) => (0, getEnsAvatar_js_1.getEnsAvatar)(client, args),
		getEnsName: (args) => (0, getEnsName_js_1.getEnsName)(client, args),
		getEnsResolver: (args) =>
			(0, getEnsResolver_js_1.getEnsResolver)(client, args),
		getEnsText: (args) => (0, getEnsText_js_1.getEnsText)(client, args),
		getFeeHistory: (args) =>
			(0, getFeeHistory_js_1.getFeeHistory)(client, args),
		estimateFeesPerGas: (args) =>
			(0, estimateFeesPerGas_js_1.estimateFeesPerGas)(client, args),
		getFilterChanges: (args) =>
			(0, getFilterChanges_js_1.getFilterChanges)(client, args),
		getFilterLogs: (args) =>
			(0, getFilterLogs_js_1.getFilterLogs)(client, args),
		getGasPrice: () => (0, getGasPrice_js_1.getGasPrice)(client),
		getLogs: (args) => (0, getLogs_js_1.getLogs)(client, args),
		estimateMaxPriorityFeePerGas: (args) =>
			(0, estimateMaxPriorityFeePerGas_js_1.estimateMaxPriorityFeePerGas)(
				client,
				args,
			),
		getStorageAt: (args) => (0, getStorageAt_js_1.getStorageAt)(client, args),
		getTransaction: (args) =>
			(0, getTransaction_js_1.getTransaction)(client, args),
		getTransactionConfirmations: (args) =>
			(0, getTransactionConfirmations_js_1.getTransactionConfirmations)(
				client,
				args,
			),
		getTransactionCount: (args) =>
			(0, getTransactionCount_js_1.getTransactionCount)(client, args),
		getTransactionReceipt: (args) =>
			(0, getTransactionReceipt_js_1.getTransactionReceipt)(client, args),
		multicall: (args) => (0, multicall_js_1.multicall)(client, args),
		prepareTransactionRequest: (args) =>
			(0, prepareTransactionRequest_js_1.prepareTransactionRequest)(
				client,
				args,
			),
		readContract: (args) => (0, readContract_js_1.readContract)(client, args),
		sendRawTransaction: (args) =>
			(0, sendRawTransaction_js_1.sendRawTransaction)(client, args),
		simulateContract: (args) =>
			(0, simulateContract_js_1.simulateContract)(client, args),
		verifyMessage: (args) =>
			(0, verifyMessage_js_1.verifyMessage)(client, args),
		verifyTypedData: (args) =>
			(0, verifyTypedData_js_1.verifyTypedData)(client, args),
		uninstallFilter: (args) =>
			(0, uninstallFilter_js_1.uninstallFilter)(client, args),
		waitForTransactionReceipt: (args) =>
			(0, waitForTransactionReceipt_js_1.waitForTransactionReceipt)(
				client,
				args,
			),
		watchBlocks: (args) => (0, watchBlocks_js_1.watchBlocks)(client, args),
		watchBlockNumber: (args) =>
			(0, watchBlockNumber_js_1.watchBlockNumber)(client, args),
		watchContractEvent: (args) =>
			(0, watchContractEvent_js_1.watchContractEvent)(client, args),
		watchEvent: (args) => (0, watchEvent_js_1.watchEvent)(client, args),
		watchPendingTransactions: (args) =>
			(0, watchPendingTransactions_js_1.watchPendingTransactions)(client, args),
	}
}
exports.publicActions = publicActions
//# sourceMappingURL=public.js.map
