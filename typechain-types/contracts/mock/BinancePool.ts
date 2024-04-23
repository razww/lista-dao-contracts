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

export interface BinancePoolInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "changeBondContract"
      | "changeCertContract"
      | "changeRelayerFee"
      | "getMinimumStake"
      | "getRelayerFee"
      | "initialize"
      | "markedForManualDistribute"
      | "owner"
      | "paused"
      | "pendingClaimerUnstakes"
      | "pendingUnstakesOf"
      | "renounceOwnership"
      | "stake"
      | "stakeAndClaimCerts"
      | "stashedForManualDistributes"
      | "transferOwnership"
      | "unstakeCerts"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "OwnershipTransferred"
      | "Paused"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "changeBondContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeCertContract",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRelayerFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinimumStake",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRelayerFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "markedForManualDistribute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingClaimerUnstakes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingUnstakesOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stake", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakeAndClaimCerts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stashedForManualDistributes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unstakeCerts",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeBondContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeCertContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRelayerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinimumStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRelayerFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "markedForManualDistribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingClaimerUnstakes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingUnstakesOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeAndClaimCerts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stashedForManualDistributes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unstakeCerts",
    data: BytesLike
  ): Result;
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

export interface BinancePool extends BaseContract {
  connect(runner?: ContractRunner | null): BinancePool;
  waitForDeployment(): Promise<this>;

  interface: BinancePoolInterface;

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

  changeBondContract: TypedContractMethod<
    [bondContract: AddressLike],
    [void],
    "nonpayable"
  >;

  changeCertContract: TypedContractMethod<
    [certToken: AddressLike],
    [void],
    "nonpayable"
  >;

  changeRelayerFee: TypedContractMethod<
    [relayerFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  getMinimumStake: TypedContractMethod<[], [bigint], "view">;

  getRelayerFee: TypedContractMethod<[], [bigint], "view">;

  initialize: TypedContractMethod<
    [operator: AddressLike, bcOperator: AddressLike, expireTime: BigNumberish],
    [void],
    "nonpayable"
  >;

  markedForManualDistribute: TypedContractMethod<
    [arg0: BigNumberish],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  paused: TypedContractMethod<[], [boolean], "view">;

  pendingClaimerUnstakes: TypedContractMethod<
    [arg0: AddressLike],
    [bigint],
    "view"
  >;

  pendingUnstakesOf: TypedContractMethod<
    [claimer: AddressLike],
    [bigint],
    "view"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  stake: TypedContractMethod<[], [void], "payable">;

  stakeAndClaimCerts: TypedContractMethod<[], [void], "payable">;

  stashedForManualDistributes: TypedContractMethod<[], [bigint], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  unstakeCerts: TypedContractMethod<
    [recipient: AddressLike, shares: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changeBondContract"
  ): TypedContractMethod<[bondContract: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeCertContract"
  ): TypedContractMethod<[certToken: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "changeRelayerFee"
  ): TypedContractMethod<[relayerFee: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getMinimumStake"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRelayerFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [operator: AddressLike, bcOperator: AddressLike, expireTime: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "markedForManualDistribute"
  ): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "pendingClaimerUnstakes"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "pendingUnstakesOf"
  ): TypedContractMethod<[claimer: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "stakeAndClaimCerts"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "stashedForManualDistributes"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unstakeCerts"
  ): TypedContractMethod<
    [recipient: AddressLike, shares: BigNumberish],
    [void],
    "nonpayable"
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

  filters: {
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
  };
}
