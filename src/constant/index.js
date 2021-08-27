import Vue from 'vue'
import VueI18n from 'vue-i18n'
import prodConfig from '../productionConfig.js'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: prodConfig.lang == 'EN' ? 'EN' : 'CN',
  messages: {
    CN: require('../../lang/CN-Cindy'),
    EN: require('../../lang/EN-Cindy'),
  },
})

// 链上
export const TX_TYPE = {
  // service
  define_service: 'define_service',
  bind_service: 'bind_service',
  call_service: 'call_service',
  respond_service: 'respond_service',
  update_service_binding: 'update_service_binding',
  disable_service_binding: 'disable_service_binding',
  enable_service_binding: 'enable_service_binding',
  refund_service_deposit: 'refund_service_deposit',
  pause_request_context: 'pause_request_context',
  start_request_context: 'start_request_context',
  kill_request_context: 'kill_request_context',
  update_request_context: 'update_request_context',
  service_set_withdraw_address: 'service/set_withdraw_address',
  withdraw_earned_fees: 'withdraw_earned_fees',
  // Record
  create_record: 'create_record',
  // nft
  burn_nft: 'burn_nft',
  transfer_nft: 'transfer_nft',
  edit_nft: 'edit_nft',
  issue_denom: 'issue_denom',
  mint_nft: 'mint_nft',
  // Token
  issue_token: 'issue_token',
  edit_token: 'edit_token',
  mint_token: 'mint_token',
  transfer_token_owner: 'transfer_token_owner',
  burn_token: 'burn_token',
  //Bank
  send: 'send',
  multisend: 'multisend',
  //Crisis
  verify_invariant: 'verify_invariant',
  //Evidence
  submit_evidence: 'submit_evidence',
  //Staking
  begin_unbonding: 'begin_unbonding',
  edit_validator: 'edit_validator',
  create_validator: 'create_validator',
  delegate: 'delegate',
  begin_redelegate: 'begin_redelegate',
  // Slashing
  unjail: 'unjail',
  // Distribution
  set_withdraw_address: 'set_withdraw_address',
  withdraw_delegator_reward: 'withdraw_delegator_reward',
  withdraw_validator_commission: 'withdraw_validator_commission',
  fund_community_pool: 'fund_community_pool',
  // Gov
  deposit: 'deposit',
  vote: 'vote',
  submit_proposal: 'submit_proposal',
  // Coinswap
  add_liquidity: 'add_liquidity',
  remove_liquidity: 'remove_liquidity',
  swap_order: 'swap_order',
  // Htlc
  create_htlc: 'create_htlc',
  claim_htlc: 'claim_htlc',
  // refund_htlc: 'refund_htlc', //删除
  // Guardian
  add_profiler: 'add_profiler',
  delete_profiler: 'delete_profiler',
  add_trustee: 'add_trustee',
  delete_trustee: 'delete_trustee',
  // Oracle
  create_feed: 'create_feed',
  start_feed: 'start_feed',
  pause_feed: 'pause_feed',
  edit_feed: 'edit_feed',

  // Identity
  create_identity: 'create_identity',
  update_identity: 'update_identity',
  // IBC
  transfer: 'transfer',
  timeout_packet: 'timeout_packet',
  recv_packet: 'recv_packet',     //和公有链ibc交易类型名称一致
  create_client: 'create_client', //和公有链ibc交易类型名称一致
  update_client: 'update_client', //和公有链ibc交易类型名称一致

  // IBC => Other
  // create_client: 'create_client',
  // update_client: 'update_client',
  
  upgrade_client: 'upgrade_client',
  submit_misbehaviour: 'submit_misbehaviour',
  connection_open_init: 'connection_open_init',
  connection_open_try: 'connection_open_try',
  connection_open_ack: 'connection_open_ack',
  connection_open_confirm: 'connection_open_confirm',
  channel_open_init: 'channel_open_init',
  channel_open_try: 'channel_open_try',
  channel_open_ack: 'channel_open_ack',
  channel_open_confirm: 'channel_open_confirm',
  channel_close_init: 'channel_close_init',
  channel_close_confirm: 'channel_close_confirm',
  timeout_on_close_packet: 'timeout_on_close_packet',
  acknowledge_packet: 'acknowledge_packet',

  // Random
  request_rand: 'request_rand',
}

// todo duanjie 临时更改
// 展示
export const TX_TYPE_DISPLAY = {
  // service
  define_service: '服务定义',
  bind_service: '服务绑定',
  call_service: '服务请求',
  respond_service: '服务响应',
  update_service_binding: '更新服务绑定',
  disable_service_binding: '禁用服务绑定',
  enable_service_binding: '允许服务绑定',
  refund_service_deposit: '退还服务押金',
  pause_request_context: '暂停请求上下文',
  start_request_context: '启动请求上下文',
  kill_request_context: '中止请求上下文',
  update_request_context: '更新请求上下文',
  'service/set_withdraw_address': 'Service Set Withdraw Address',
  withdraw_earned_fees: 'Withdraw Earned Fees',
   // Record
   create_record: '创建存证',
  // nft
  burn_nft: '销毁数据对象',
  transfer_nft: '转移数据对象',
  edit_nft: '编辑数据对象',
  issue_denom: '定义数据对象类型',
  mint_nft: '创建数据对象',
  // Token
  issue_token: 'Issue Token',
  edit_token: 'Edit Token',
  mint_token: 'Mint Token',
  transfer_token_owner: 'Transfer Token Owner',
  burn_token: 'Burn Token',
  //Bank
  send: '转移',
  multisend: 'Multi Send',
  //Crisis
  verify_invariant: 'VerifyInvariant',
  //Evidence
  submit_evidence: 'SubmitEvidence',
  //Staking
  begin_unbonding: 'Undelegate',
  edit_validator: 'Edit Validator',
  create_validator: 'Create Validator',
  delegate: 'Delegate',
  begin_redelegate: 'Begin Redelegate',
  // Slashing
  unjail: 'Unjail',
  // Distribution
  set_withdraw_address: 'Set Withdraw Address',
  withdraw_delegator_reward: 'Withdraw Delegator Reward',
  withdraw_validator_commission: 'Withdraw Validator Commission',
  fund_community_pool: 'Fund Community Pool',
  // Gov
  deposit: 'Deposit',
  vote: 'Vote',
  submit_proposal: 'Submit Proposal',
  // Coinswap
  add_liquidity: 'Add Liquidity',
  remove_liquidity: 'Remove Liquidity',
  swap_order: 'Swap Order',
  // Htlc
  create_htlc: 'Create Hash Lock',
  claim_htlc: 'Claim Hash Lock',
  // refund_htlc: 'RefundHTLC', // 删除
  // Guardian
  add_profiler: 'AddProfiler',
  delete_profiler: 'DeleteProfiler',
  add_trustee: 'AddTrustee',
  delete_trustee: 'DeleteTrustee',
  // Oracle
  create_feed: 'Create Feed',
  start_feed: 'Start Feed',
  pause_feed: 'Pause Feed',
  edit_feed: 'Edit Feed',
  // CrossChain 联盟链
  recv_packet: '跨链验证',     //和公有链ibc交易类型名称一致
  create_client: '创建跨链连接', //和公有链ibc交易类型名称一致
  update_client: '更新跨链证明', //和公有链ibc交易类型名称一致
  // Identity
  create_identity: '创建全局身份',
  update_identity: '更新全局身份',
  // IBC
  transfer: 'IBC Transfer Out',
  timeout_packet: 'IBC Timeout Packet',
  // recv_packet: 'recv_packet',

  // IBC => Other
  // create_client: 'create_client',
  // update_client: 'update_client',
  upgrade_client: 'IBC Upgrade Client',
  submit_misbehaviour: 'IBC Submit Misbehaviour',
  connection_open_init: 'IBC Connection Open Init',
  connection_open_try: 'IBC Connection Open Try',
  connection_open_ack: 'IBC Connection Open Ack',
  connection_open_confirm: 'IBC Connection Open Confirm',
  channel_open_init: 'IBC Channel Open Init',
  channel_open_try: 'IBC Channel Open Try',
  channel_open_ack: 'IBC Channel Open Ack',
  channel_open_confirm: 'IBC Channel Open Confirm',
  channel_close_init: 'IBC Channel Close Init',
  channel_close_confirm: 'IBC Channel Close Confirm',
  timeout_on_close_packet: 'IBC Timeout On Close Packet',
  acknowledge_packet: 'IBC Acknowledge Packet',

  // Random
  request_rand: 'Request Rand',
}

//todo duanjie  一级菜单，临时更改
export const LEVEL_TX_TYPE = {
  Transfer: '转移',
  Staking: 'Staking',
  iService: '服务',
  NFT: '数据对象',
  Coinswap: 'Coinswap',
  Identity: '全局身份',
  IBC: 'IBC',
  HTLC: 'Hash Lock',
  Oracle: 'Oracle',
  Random: 'Random',
  Record: '存证',
  Asset: 'Asset',
  Gov: 'Gov',
  Other: 'Others',
  crossChain: '跨链'
}

export const TX_STATUS = {
  success: 1,
  fail: 0,
}

export const ValidatorStatus = {
  bonded: 'bonded',
  unbonding: 'unbonding',
  unbonded: 'unbonded',
}

export const ColumnMinWidth = {
  txHash: '135',
  txHashShort: '113', // Validator Details
  addressTxHash: '135',
  respondHash: '138',
  requestHash: '138',
  blockHeight: '85',
  blockListHeight: '85',
  txType: '258',
  minTxType: '150',
  govTxType: '120',
  address: '165',
  iaaAddress: '139',
  time: prodConfig.isShowUTC === false ? '158' : '205',
  txn: '115',
  blockAge: '150',
  // validatirName: '120',
  validatirName: '155',
  votingPower: '120',
  publickKey: '450',
  denom: '150',
  tokenId: '120',
  denomId: '150',
  schema: '380',
  URI: '260',
  respondTimes: '129',
  available: '100',
  qos: '195',
  // requestId: '150',
  requestId: '155',
  state: '127',
  serviceName: '135',
  No: '50',
  price: '120',
  deposit: '120',
  nftCount: '100',
  identity: '300',
  idPubKey: '220',
  idPubKeyFull: '650',
  pubKeyAlgo: '120',
  certificate: '220',
  certificateFull: '650',
  credentials: '220',
  commission: '110',
  bondedTokens: '155',
  uptime: '100',
  // selfBond: '125',
  selfBond: '130',
  delegators: '121',
  bondHeight: '122',
  unbondingHeight: '155',
  // amount: '115',
  amount: '130',
  amountAndDenom: '150',
  delegationsAmount: '165',
  delegationTxsAmount: '155',
  delegationTxsFrom: '146',
  shares: '251',
  fee: '85',
  // feeAndDenom: "110",
  consensus: '340',
  proposerPriority: '200',
  message: '90',
  validatorMoniker: '150',
  validatorSelfBond: '150',
  nftListDenom: '100',
  nftListDate: '280',
  // timestamp: '145',
  timestamp:  prodConfig.isShowUTC === false ? '158' : '205',
  symbol: '121',
  assetListowner: '430',
  totalSupply: '160',
  maxSupply: '150',
  mintable: '120',
  proposalId: '56',
  proposalID: '105',
  proposalTitle: '185',
  proposalType: '173',
  proposalStatusIcon: '133',
  proposalStatus: '115',
  strip: '120',
  voteOption: '120',
  submited: '128',
  proposer: '245',
  validatorValue: '120',
  votingPowerValue: '120',
  ownerDetailDelegationsAmount: '135',
}

export const ModuleMap = {
  '100': {
    title: '区块浏览',
    link: '/blocks',
  },
  '101': {
    title: '交易浏览',
    link: '/txs',
  },
  '102': {
    title: '共识节点',
    link: '/validators',
  },
  '103': {
    title: '数据对象',
    link: '/nftAsset',
  },
  '104': {
    title: '数据类别',
    link: '/denoms',
  },
  '105': {
    title: '服务浏览',
    link: '/services',
  },
  '106': {
    title: '身份ID',
    link: '/identities',
  },
  '107': {
    title: 'Validators',
    link: '/staking',
  },
  '108': {
    title: 'Delegation Txs',
    link: '/txs/delegations',
  },
  '109': {
    title: 'Validation Txs',
    link: '/txs/validations',
  },
  '110': {
    title: 'Native Asset',
    link: '/assets/ntvassets',
  },
  '111': {
    title: 'Native Asset',
    link: '/assets/ntvassetstxs',
  },
  '112': {
    title: 'Proposals',
    link: '/gov/proposals',
  },
  '113': {
    title: 'Gov Txs',
    link: '/txs/governance',
  },
   '114': {
    title: '${mainToken} Rich List',
    link: '/stats/rich',
  },
   '115': {
    title: '${mainToken} Stats',
    link: '/stats/stats',
  },

}

const CHAINID = {}
CHAINID.IRISHUB = 'Mainnet IRISHUB'
CHAINID.FUXI = 'Testnet FUXI'
CHAINID.NYANCAT = 'Testnet NYANCAT'
CHAINID.GOZTESTNET = 'Testnet GOZ'
CHAINID.BIFROST = 'Testnet BIFROST'
CHAINID.STARGATE = 'Testnet STARGATE'
CHAINID.COSMOSHUB = 'Mainnet CosmosHub'

export const pageTitleConfig = {
  BlockchainBlocks: 'Block List',
  BlockchainBlocksBlockDetails: 'Block Details',
  BlockchainTransactions: 'Transaction List',
  BlockchainTransactionsTransactionDetails: 'Transaction Details',
  StakingValidators: 'Validator List',
  StakingValidatorsValidatorDetails: 'Validator Details',
  StakingDelegationTxs: 'Delegation Txs List',
  StakingValidationTxs: 'Validation Txs List',
  Transfer: 'Transfer List',
  AssetNativeAsset: 'Native Asset List',
  AssetNativeAssetTxs: 'Native Asset Txs List',
  GovParameters: 'Parameter List',
  GovProposals: 'Proposal List',
  GovProposalsProposalDetails: 'Proposal Details',
  GovGovTxs: 'Gov Txs List',
  StatsRichList: '${mainToken} Rich List',
  StatsRichListAddress: 'Address',
  StatsStats: '${mainToken} Stats Analyse',
}

export const PubKeyAlgorithm = {
  '0': 'UnknownPubKeyAlgorithm',
  '1': 'RSA',
  '2': 'DSA',
  '3': 'ECDSA',
  '4': 'ED25519',
  '5': 'SM2',
}

export const TxStatus = {
  '0': 'Fail',
  '1': 'Success',
}

export const numFormat = {
  num: '0.00',
}

export const validator_Status = {
  active: 'Active',
  candidate: 'Candidate',
  jailed: 'Jailed',
}

export const decimals = {
  amount: 2,
  fee: prodConfig.fee && prodConfig.fee.decimals || 2,
  shares: 4,
}

export default {
  CHAINID,
}

export const monikerNum = {
  validatorList: 8,
  home: 12,
  otherTable: 11,
}

export const proposalStatus = {
  passed: 'Passed',
  rejected: 'Rejected',
  votingPeriod: 'VotingPeriod',
  depositPeriod: 'DepositPeriod',
}

export const proposalType = {
  ParameterChangeProposal: 'ParameterChange',
  SoftwareUpgradeProposal: 'SoftwareUpgrade',
  CancelSoftwareUpgradeProposal: 'CancelSoftwareUpgrade',
  CommunityPoolSpendProposal: 'CommunityPoolSpend',
  TextProposal:'Text'
}

export const voteOptions = {
  1: 'yes',
  2: 'abstain',
  3: 'no',
  4: 'no_with_veto'
}

export const formatVoteOptions = {
  'yes': 'Yes',
  'abstain': 'Abstain',
  'no': 'No',
  'no_with_veto': 'NoWithVeto'
}

// 需和配置文件的产品名一致
export const product = {
  bifrost: 'Bifrost',
  stargate: 'STARGATE',
  cosmosHub: 'Cosmos Hub',
  nyancat: 'NYANCAT',
  irishub: 'IRISHUB',
  cschainOtc: 'CSChain-OTC'
}

export const ibcDenomPrefix = 'ibc/'

export const DISTRIBUTION = {
    '1-5':{
        name:'No. 1-5',
    },
    '6-10':{
        name:'No. 6-10',
    },
    '11-50':{
        name:'No. 11-50',
    },
    '51-100':{
        name:'No. 51-100',
    },
    '101-500':{
        name:'No. 101-500',
    },
    '501-1000':{
        name:'No. 501-1000',
    },
    '1001-':{
        name:'No. 1001-',
    },
}

export const COSMOS_ADDRESS_PREFIX = 'cosmos';
export const IRIS_ADDRESS_PREFIX = 'iaa';
