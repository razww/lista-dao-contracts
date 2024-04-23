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

export interface FlashBuyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "auction"
      | "flashBuyAuction"
      | "initialize"
      | "lender"
      | "onFlashLoan"
      | "owner"
      | "renounceOwnership"
      | "transfer"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Initialized" | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(functionFragment: "auction", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "flashBuyAuction",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "lender", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onFlashLoan",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "auction", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "flashBuyAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lender", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
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

export interface FlashBuy extends BaseContract {
  connect(runner?: ContractRunner | null): FlashBuy;
  waitForDeployment(): Promise<this>;

  interface: FlashBuyInterface;

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

  auction: TypedContractMethod<[], [string], "view">;

  flashBuyAuction: TypedContractMethod<
    [
      token: AddressLike,
      auctionId: BigNumberish,
      borrowAm: BigNumberish,
      collateral: AddressLike,
      collateralAm: BigNumberish,
      maxPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [lender_: AddressLike, auction_: AddressLike, dex_: AddressLike],
    [void],
    "nonpayable"
  >;

  lender: TypedContractMethod<[], [string], "view">;

  onFlashLoan: TypedContractMethod<
    [
      initiator: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  transfer: TypedContractMethod<[token: AddressLike], [void], "nonpayable">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "auction"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "flashBuyAuction"
  ): TypedContractMethod<
    [
      token: AddressLike,
      auctionId: BigNumberish,
      borrowAm: BigNumberish,
      collateral: AddressLike,
      collateralAm: BigNumberish,
      maxPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [lender_: AddressLike, auction_: AddressLike, dex_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "lender"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onFlashLoan"
  ): TypedContractMethod<
    [
      initiator: AddressLike,
      token: AddressLike,
      amount: BigNumberish,
      fee: BigNumberish,
      data: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<[token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

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
  };
}
