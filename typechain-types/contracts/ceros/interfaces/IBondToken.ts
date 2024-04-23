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
} from "../../../common";

export interface IBondTokenInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bondsToShares"
      | "burnAndSetPending"
      | "burnAndSetPendingFor"
      | "burnBonds"
      | "isRebasing"
      | "lockShares"
      | "lockSharesFor"
      | "mintBonds"
      | "pendingBurn"
      | "ratio"
      | "sharesToBonds"
      | "totalSharesSupply"
      | "transferAndLockShares"
      | "unlockShares"
      | "unlockSharesFor"
      | "updatePendingBurning"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "BinancePoolChanged"
      | "CertTokenChanged"
      | "CrossChainBridgeChanged"
      | "Locked"
      | "OperatorChanged"
      | "RatioUpdated"
      | "Unlocked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "bondsToShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnAndSetPending",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnAndSetPendingFor",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBonds",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRebasing",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockSharesFor",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "mintBonds",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingBurn",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "ratio", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sharesToBonds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSharesSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferAndLockShares",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockShares",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockSharesFor",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePendingBurning",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "bondsToShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnAndSetPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "burnAndSetPendingFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "burnBonds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isRebasing", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockShares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockSharesFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mintBonds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingBurn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ratio", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sharesToBonds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSharesSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAndLockShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockSharesFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePendingBurning",
    data: BytesLike
  ): Result;
}

export namespace BinancePoolChangedEvent {
  export type InputTuple = [binancePool: AddressLike];
  export type OutputTuple = [binancePool: string];
  export interface OutputObject {
    binancePool: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CertTokenChangedEvent {
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

export namespace CrossChainBridgeChangedEvent {
  export type InputTuple = [crossChainBridge: AddressLike];
  export type OutputTuple = [crossChainBridge: string];
  export interface OutputObject {
    crossChainBridge: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LockedEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OperatorChangedEvent {
  export type InputTuple = [operator: AddressLike];
  export type OutputTuple = [operator: string];
  export interface OutputObject {
    operator: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RatioUpdatedEvent {
  export type InputTuple = [newRatio: BigNumberish];
  export type OutputTuple = [newRatio: bigint];
  export interface OutputObject {
    newRatio: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnlockedEvent {
  export type InputTuple = [account: AddressLike, amount: BigNumberish];
  export type OutputTuple = [account: string, amount: bigint];
  export interface OutputObject {
    account: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IBondToken extends BaseContract {
  connect(runner?: ContractRunner | null): IBondToken;
  waitForDeployment(): Promise<this>;

  interface: IBondTokenInterface;

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

  bondsToShares: TypedContractMethod<[amount: BigNumberish], [bigint], "view">;

  burnAndSetPending: TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  burnAndSetPendingFor: TypedContractMethod<
    [owner: AddressLike, account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  burnBonds: TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  isRebasing: TypedContractMethod<[], [boolean], "nonpayable">;

  lockShares: TypedContractMethod<[shares: BigNumberish], [void], "nonpayable">;

  lockSharesFor: TypedContractMethod<
    [spender: AddressLike, account: AddressLike, shares: BigNumberish],
    [void],
    "nonpayable"
  >;

  mintBonds: TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  pendingBurn: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  ratio: TypedContractMethod<[], [bigint], "view">;

  sharesToBonds: TypedContractMethod<[amount: BigNumberish], [bigint], "view">;

  totalSharesSupply: TypedContractMethod<[], [bigint], "view">;

  transferAndLockShares: TypedContractMethod<
    [account: AddressLike, shares: BigNumberish],
    [void],
    "nonpayable"
  >;

  unlockShares: TypedContractMethod<
    [shares: BigNumberish],
    [void],
    "nonpayable"
  >;

  unlockSharesFor: TypedContractMethod<
    [account: AddressLike, bonds: BigNumberish],
    [void],
    "nonpayable"
  >;

  updatePendingBurning: TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bondsToShares"
  ): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "burnAndSetPending"
  ): TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnAndSetPendingFor"
  ): TypedContractMethod<
    [owner: AddressLike, account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnBonds"
  ): TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isRebasing"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "lockShares"
  ): TypedContractMethod<[shares: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lockSharesFor"
  ): TypedContractMethod<
    [spender: AddressLike, account: AddressLike, shares: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "mintBonds"
  ): TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "pendingBurn"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "ratio"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sharesToBonds"
  ): TypedContractMethod<[amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSharesSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferAndLockShares"
  ): TypedContractMethod<
    [account: AddressLike, shares: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "unlockShares"
  ): TypedContractMethod<[shares: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unlockSharesFor"
  ): TypedContractMethod<
    [account: AddressLike, bonds: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "updatePendingBurning"
  ): TypedContractMethod<
    [account: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "BinancePoolChanged"
  ): TypedContractEvent<
    BinancePoolChangedEvent.InputTuple,
    BinancePoolChangedEvent.OutputTuple,
    BinancePoolChangedEvent.OutputObject
  >;
  getEvent(
    key: "CertTokenChanged"
  ): TypedContractEvent<
    CertTokenChangedEvent.InputTuple,
    CertTokenChangedEvent.OutputTuple,
    CertTokenChangedEvent.OutputObject
  >;
  getEvent(
    key: "CrossChainBridgeChanged"
  ): TypedContractEvent<
    CrossChainBridgeChangedEvent.InputTuple,
    CrossChainBridgeChangedEvent.OutputTuple,
    CrossChainBridgeChangedEvent.OutputObject
  >;
  getEvent(
    key: "Locked"
  ): TypedContractEvent<
    LockedEvent.InputTuple,
    LockedEvent.OutputTuple,
    LockedEvent.OutputObject
  >;
  getEvent(
    key: "OperatorChanged"
  ): TypedContractEvent<
    OperatorChangedEvent.InputTuple,
    OperatorChangedEvent.OutputTuple,
    OperatorChangedEvent.OutputObject
  >;
  getEvent(
    key: "RatioUpdated"
  ): TypedContractEvent<
    RatioUpdatedEvent.InputTuple,
    RatioUpdatedEvent.OutputTuple,
    RatioUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Unlocked"
  ): TypedContractEvent<
    UnlockedEvent.InputTuple,
    UnlockedEvent.OutputTuple,
    UnlockedEvent.OutputObject
  >;

  filters: {
    "BinancePoolChanged(address)": TypedContractEvent<
      BinancePoolChangedEvent.InputTuple,
      BinancePoolChangedEvent.OutputTuple,
      BinancePoolChangedEvent.OutputObject
    >;
    BinancePoolChanged: TypedContractEvent<
      BinancePoolChangedEvent.InputTuple,
      BinancePoolChangedEvent.OutputTuple,
      BinancePoolChangedEvent.OutputObject
    >;

    "CertTokenChanged(address)": TypedContractEvent<
      CertTokenChangedEvent.InputTuple,
      CertTokenChangedEvent.OutputTuple,
      CertTokenChangedEvent.OutputObject
    >;
    CertTokenChanged: TypedContractEvent<
      CertTokenChangedEvent.InputTuple,
      CertTokenChangedEvent.OutputTuple,
      CertTokenChangedEvent.OutputObject
    >;

    "CrossChainBridgeChanged(address)": TypedContractEvent<
      CrossChainBridgeChangedEvent.InputTuple,
      CrossChainBridgeChangedEvent.OutputTuple,
      CrossChainBridgeChangedEvent.OutputObject
    >;
    CrossChainBridgeChanged: TypedContractEvent<
      CrossChainBridgeChangedEvent.InputTuple,
      CrossChainBridgeChangedEvent.OutputTuple,
      CrossChainBridgeChangedEvent.OutputObject
    >;

    "Locked(address,uint256)": TypedContractEvent<
      LockedEvent.InputTuple,
      LockedEvent.OutputTuple,
      LockedEvent.OutputObject
    >;
    Locked: TypedContractEvent<
      LockedEvent.InputTuple,
      LockedEvent.OutputTuple,
      LockedEvent.OutputObject
    >;

    "OperatorChanged(address)": TypedContractEvent<
      OperatorChangedEvent.InputTuple,
      OperatorChangedEvent.OutputTuple,
      OperatorChangedEvent.OutputObject
    >;
    OperatorChanged: TypedContractEvent<
      OperatorChangedEvent.InputTuple,
      OperatorChangedEvent.OutputTuple,
      OperatorChangedEvent.OutputObject
    >;

    "RatioUpdated(uint256)": TypedContractEvent<
      RatioUpdatedEvent.InputTuple,
      RatioUpdatedEvent.OutputTuple,
      RatioUpdatedEvent.OutputObject
    >;
    RatioUpdated: TypedContractEvent<
      RatioUpdatedEvent.InputTuple,
      RatioUpdatedEvent.OutputTuple,
      RatioUpdatedEvent.OutputObject
    >;

    "Unlocked(address,uint256)": TypedContractEvent<
      UnlockedEvent.InputTuple,
      UnlockedEvent.OutputTuple,
      UnlockedEvent.OutputObject
    >;
    Unlocked: TypedContractEvent<
      UnlockedEvent.InputTuple,
      UnlockedEvent.OutputTuple,
      UnlockedEvent.OutputObject
    >;
  };
}
