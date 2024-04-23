/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface CerosRouterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "changeBNBStakingPool"
      | "changeDex"
      | "changePool"
      | "changeProvider"
      | "changeVault"
      | "claim"
      | "claimProfit"
      | "deposit"
      | "depositABNBc"
      | "depositABNBcFrom"
      | "getBNBStakingPoolAddress"
      | "getCeToken"
      | "getCertToken"
      | "getDexAddress"
      | "getPendingWithdrawalOf"
      | "getPoolAddress"
      | "getProfitFor"
      | "getProvider"
      | "getVaultAddress"
      | "getWbnbAddress"
      | "getYieldFor"
      | "initialize"
      | "owner"
      | "paused"
      | "renounceOwnership"
      | "transferOwnership"
      | "withdraw"
      | "withdrawABNBc"
      | "withdrawFor"
      | "withdrawWithSlippage"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "ChangeBNBStakingPool"
      | "ChangeCeToken"
      | "ChangeCeTokenJoin"
      | "ChangeCertToken"
      | "ChangeCollateralToken"
      | "ChangeDao"
      | "ChangeDex"
      | "ChangePool"
      | "ChangeProvider"
      | "ChangeVault"
      | "Claim"
      | "Deposit"
      | "Initialized"
      | "OwnershipTransferred"
      | "Paused"
      | "Unpaused"
      | "Withdrawal"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "changeBNBStakingPool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeDex",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changePool",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeProvider",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeVault",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "claim", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "claimProfit",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "depositABNBc",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositABNBcFrom",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getBNBStakingPoolAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCeToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCertToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDexAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingWithdrawalOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProfitFor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVaultAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getWbnbAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getYieldFor",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawABNBc",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFor",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawWithSlippage",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeBNBStakingPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "changeDex", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "changePool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimProfit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositABNBc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositABNBcFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBNBStakingPoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCertToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDexAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingWithdrawalOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProfitFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVaultAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWbnbAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getYieldFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawABNBc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawWithSlippage",
    data: BytesLike
  ): Result;
}

export namespace ChangeBNBStakingPoolEvent {
  export type InputTuple = [pool: AddressLike];
  export type OutputTuple = [pool: string];
  export interface OutputObject {
    pool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeCeTokenEvent {
  export type InputTuple = [ceToken: AddressLike];
  export type OutputTuple = [ceToken: string];
  export interface OutputObject {
    ceToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeCeTokenJoinEvent {
  export type InputTuple = [ceTokenJoin: AddressLike];
  export type OutputTuple = [ceTokenJoin: string];
  export interface OutputObject {
    ceTokenJoin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeCertTokenEvent {
  export type InputTuple = [certToken: AddressLike];
  export type OutputTuple = [certToken: string];
  export interface OutputObject {
    certToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeCollateralTokenEvent {
  export type InputTuple = [collateralToken: AddressLike];
  export type OutputTuple = [collateralToken: string];
  export interface OutputObject {
    collateralToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeDaoEvent {
  export type InputTuple = [dao: AddressLike];
  export type OutputTuple = [dao: string];
  export interface OutputObject {
    dao: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeDexEvent {
  export type InputTuple = [dex: AddressLike];
  export type OutputTuple = [dex: string];
  export interface OutputObject {
    dex: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangePoolEvent {
  export type InputTuple = [pool: AddressLike];
  export type OutputTuple = [pool: string];
  export interface OutputObject {
    pool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeProviderEvent {
  export type InputTuple = [provider: AddressLike];
  export type OutputTuple = [provider: string];
  export interface OutputObject {
    provider: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ChangeVaultEvent {
  export type InputTuple = [vault: AddressLike];
  export type OutputTuple = [vault: string];
  export interface OutputObject {
    vault: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ClaimEvent {
  export type InputTuple = [
    recipient: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [recipient: string, token: string, amount: bigint];
  export interface OutputObject {
    recipient: string;
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositEvent {
  export type InputTuple = [
    account: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    profit: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    token: string,
    amount: bigint,
    profit: bigint
  ];
  export interface OutputObject {
    account: string;
    token: string;
    amount: bigint;
    profit: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalEvent {
  export type InputTuple = [
    owner: AddressLike,
    recipient: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    owner: string,
    recipient: string,
    token: string,
    amount: bigint
  ];
  export interface OutputObject {
    owner: string;
    recipient: string;
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface CerosRouter extends BaseContract {
  connect(runner?: ContractRunner | null): CerosRouter;
  waitForDeployment(): Promise<this>;

  interface: CerosRouterInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  changeBNBStakingPool: TypedContractMethod<
    [pool: AddressLike],
    [void],
    "nonpayable"
  >;

  changeDex: TypedContractMethod<[dex: AddressLike], [void], "nonpayable">;

  changePool: TypedContractMethod<[pool: AddressLike], [void], "nonpayable">;

  changeProvider: TypedContractMethod<
    [provider: AddressLike],
    [void],
    "nonpayable"
  >;

  changeVault: TypedContractMethod<[vault: AddressLike], [void], "nonpayable">;

  claim: TypedContractMethod<[recipient: AddressLike], [bigint], "nonpayable">;

  claimProfit: TypedContractMethod<
    [recipient: AddressLike],
    [void],
    "nonpayable"
  >;

  deposit: TypedContractMethod<[], [bigint], "payable">;

  depositABNBc: TypedContractMethod<
    [amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  depositABNBcFrom: TypedContractMethod<
    [owner: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getBNBStakingPoolAddress: TypedContractMethod<[], [string], "view">;

  getCeToken: TypedContractMethod<[], [string], "view">;

  getCertToken: TypedContractMethod<[], [string], "view">;

  getDexAddress: TypedContractMethod<[], [string], "view">;

  getPendingWithdrawalOf: TypedContractMethod<
    [account: AddressLike],
    [bigint],
    "view"
  >;

  getPoolAddress: TypedContractMethod<[], [string], "view">;

  getProfitFor: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  getProvider: TypedContractMethod<[], [string], "view">;

  getVaultAddress: TypedContractMethod<[], [string], "view">;

  getWbnbAddress: TypedContractMethod<[], [string], "view">;

  getYieldFor: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  initialize: TypedContractMethod<
    [
      certToken: AddressLike,
      wBnbToken: AddressLike,
      ceToken: AddressLike,
      bondToken: AddressLike,
      vault: AddressLike,
      dexAddress: AddressLike,
      pool: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  paused: TypedContractMethod<[], [boolean], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  withdrawABNBc: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  withdrawFor: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  withdrawWithSlippage: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish, outAmount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changeBNBStakingPool"
  ): TypedContractMethod<[pool: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeDex"
  ): TypedContractMethod<[dex: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changePool"
  ): TypedContractMethod<[pool: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeProvider"
  ): TypedContractMethod<[provider: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeVault"
  ): TypedContractMethod<[vault: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claim"
  ): TypedContractMethod<[recipient: AddressLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "claimProfit"
  ): TypedContractMethod<[recipient: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[], [bigint], "payable">;
  getFunction(
    nameOrSignature: "depositABNBc"
  ): TypedContractMethod<[amount: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "depositABNBcFrom"
  ): TypedContractMethod<
    [owner: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getBNBStakingPoolAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCeToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCertToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getDexAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getPendingWithdrawalOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPoolAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getProfitFor"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getProvider"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getVaultAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getWbnbAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getYieldFor"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      certToken: AddressLike,
      wBnbToken: AddressLike,
      ceToken: AddressLike,
      bondToken: AddressLike,
      vault: AddressLike,
      dexAddress: AddressLike,
      pool: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawABNBc"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawFor"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawWithSlippage"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish, outAmount: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  getEvent(
    key: "ChangeBNBStakingPool"
  ): TypedContractEvent<
    ChangeBNBStakingPoolEvent.InputTuple,
    ChangeBNBStakingPoolEvent.OutputTuple,
    ChangeBNBStakingPoolEvent.OutputObject
  >;
  getEvent(
    key: "ChangeCeToken"
  ): TypedContractEvent<
    ChangeCeTokenEvent.InputTuple,
    ChangeCeTokenEvent.OutputTuple,
    ChangeCeTokenEvent.OutputObject
  >;
  getEvent(
    key: "ChangeCeTokenJoin"
  ): TypedContractEvent<
    ChangeCeTokenJoinEvent.InputTuple,
    ChangeCeTokenJoinEvent.OutputTuple,
    ChangeCeTokenJoinEvent.OutputObject
  >;
  getEvent(
    key: "ChangeCertToken"
  ): TypedContractEvent<
    ChangeCertTokenEvent.InputTuple,
    ChangeCertTokenEvent.OutputTuple,
    ChangeCertTokenEvent.OutputObject
  >;
  getEvent(
    key: "ChangeCollateralToken"
  ): TypedContractEvent<
    ChangeCollateralTokenEvent.InputTuple,
    ChangeCollateralTokenEvent.OutputTuple,
    ChangeCollateralTokenEvent.OutputObject
  >;
  getEvent(
    key: "ChangeDao"
  ): TypedContractEvent<
    ChangeDaoEvent.InputTuple,
    ChangeDaoEvent.OutputTuple,
    ChangeDaoEvent.OutputObject
  >;
  getEvent(
    key: "ChangeDex"
  ): TypedContractEvent<
    ChangeDexEvent.InputTuple,
    ChangeDexEvent.OutputTuple,
    ChangeDexEvent.OutputObject
  >;
  getEvent(
    key: "ChangePool"
  ): TypedContractEvent<
    ChangePoolEvent.InputTuple,
    ChangePoolEvent.OutputTuple,
    ChangePoolEvent.OutputObject
  >;
  getEvent(
    key: "ChangeProvider"
  ): TypedContractEvent<
    ChangeProviderEvent.InputTuple,
    ChangeProviderEvent.OutputTuple,
    ChangeProviderEvent.OutputObject
  >;
  getEvent(
    key: "ChangeVault"
  ): TypedContractEvent<
    ChangeVaultEvent.InputTuple,
    ChangeVaultEvent.OutputTuple,
    ChangeVaultEvent.OutputObject
  >;
  getEvent(
    key: "Claim"
  ): TypedContractEvent<
    ClaimEvent.InputTuple,
    ClaimEvent.OutputTuple,
    ClaimEvent.OutputObject
  >;
  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawal"
  ): TypedContractEvent<
    WithdrawalEvent.InputTuple,
    WithdrawalEvent.OutputTuple,
    WithdrawalEvent.OutputObject
  >;

  filters: {
    "ChangeBNBStakingPool(address)": TypedContractEvent<
      ChangeBNBStakingPoolEvent.InputTuple,
      ChangeBNBStakingPoolEvent.OutputTuple,
      ChangeBNBStakingPoolEvent.OutputObject
    >;
    ChangeBNBStakingPool: TypedContractEvent<
      ChangeBNBStakingPoolEvent.InputTuple,
      ChangeBNBStakingPoolEvent.OutputTuple,
      ChangeBNBStakingPoolEvent.OutputObject
    >;

    "ChangeCeToken(address)": TypedContractEvent<
      ChangeCeTokenEvent.InputTuple,
      ChangeCeTokenEvent.OutputTuple,
      ChangeCeTokenEvent.OutputObject
    >;
    ChangeCeToken: TypedContractEvent<
      ChangeCeTokenEvent.InputTuple,
      ChangeCeTokenEvent.OutputTuple,
      ChangeCeTokenEvent.OutputObject
    >;

    "ChangeCeTokenJoin(address)": TypedContractEvent<
      ChangeCeTokenJoinEvent.InputTuple,
      ChangeCeTokenJoinEvent.OutputTuple,
      ChangeCeTokenJoinEvent.OutputObject
    >;
    ChangeCeTokenJoin: TypedContractEvent<
      ChangeCeTokenJoinEvent.InputTuple,
      ChangeCeTokenJoinEvent.OutputTuple,
      ChangeCeTokenJoinEvent.OutputObject
    >;

    "ChangeCertToken(address)": TypedContractEvent<
      ChangeCertTokenEvent.InputTuple,
      ChangeCertTokenEvent.OutputTuple,
      ChangeCertTokenEvent.OutputObject
    >;
    ChangeCertToken: TypedContractEvent<
      ChangeCertTokenEvent.InputTuple,
      ChangeCertTokenEvent.OutputTuple,
      ChangeCertTokenEvent.OutputObject
    >;

    "ChangeCollateralToken(address)": TypedContractEvent<
      ChangeCollateralTokenEvent.InputTuple,
      ChangeCollateralTokenEvent.OutputTuple,
      ChangeCollateralTokenEvent.OutputObject
    >;
    ChangeCollateralToken: TypedContractEvent<
      ChangeCollateralTokenEvent.InputTuple,
      ChangeCollateralTokenEvent.OutputTuple,
      ChangeCollateralTokenEvent.OutputObject
    >;

    "ChangeDao(address)": TypedContractEvent<
      ChangeDaoEvent.InputTuple,
      ChangeDaoEvent.OutputTuple,
      ChangeDaoEvent.OutputObject
    >;
    ChangeDao: TypedContractEvent<
      ChangeDaoEvent.InputTuple,
      ChangeDaoEvent.OutputTuple,
      ChangeDaoEvent.OutputObject
    >;

    "ChangeDex(address)": TypedContractEvent<
      ChangeDexEvent.InputTuple,
      ChangeDexEvent.OutputTuple,
      ChangeDexEvent.OutputObject
    >;
    ChangeDex: TypedContractEvent<
      ChangeDexEvent.InputTuple,
      ChangeDexEvent.OutputTuple,
      ChangeDexEvent.OutputObject
    >;

    "ChangePool(address)": TypedContractEvent<
      ChangePoolEvent.InputTuple,
      ChangePoolEvent.OutputTuple,
      ChangePoolEvent.OutputObject
    >;
    ChangePool: TypedContractEvent<
      ChangePoolEvent.InputTuple,
      ChangePoolEvent.OutputTuple,
      ChangePoolEvent.OutputObject
    >;

    "ChangeProvider(address)": TypedContractEvent<
      ChangeProviderEvent.InputTuple,
      ChangeProviderEvent.OutputTuple,
      ChangeProviderEvent.OutputObject
    >;
    ChangeProvider: TypedContractEvent<
      ChangeProviderEvent.InputTuple,
      ChangeProviderEvent.OutputTuple,
      ChangeProviderEvent.OutputObject
    >;

    "ChangeVault(address)": TypedContractEvent<
      ChangeVaultEvent.InputTuple,
      ChangeVaultEvent.OutputTuple,
      ChangeVaultEvent.OutputObject
    >;
    ChangeVault: TypedContractEvent<
      ChangeVaultEvent.InputTuple,
      ChangeVaultEvent.OutputTuple,
      ChangeVaultEvent.OutputObject
    >;

    "Claim(address,address,uint256)": TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;
    Claim: TypedContractEvent<
      ClaimEvent.InputTuple,
      ClaimEvent.OutputTuple,
      ClaimEvent.OutputObject
    >;

    "Deposit(address,address,uint256,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;

    "Withdrawal(address,address,address,uint256)": TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
    Withdrawal: TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
  };
}
