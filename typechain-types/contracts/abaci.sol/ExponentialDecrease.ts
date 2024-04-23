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

export interface ExponentialDecreaseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cut"
      | "deny"
      | "file"
      | "initialize"
      | "price"
      | "rely"
      | "wards"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Deny" | "File" | "Initialized" | "Rely"
  ): EventFragment;

  encodeFunctionData(functionFragment: "cut", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "file",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "price",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "cut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "file", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
}

export namespace DenyEvent {
  export type InputTuple = [usr: AddressLike];
  export type OutputTuple = [usr: string];
  export interface OutputObject {
    usr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FileEvent {
  export type InputTuple = [what: BytesLike, data: BigNumberish];
  export type OutputTuple = [what: string, data: bigint];
  export interface OutputObject {
    what: string;
    data: bigint;
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

export namespace RelyEvent {
  export type InputTuple = [usr: AddressLike];
  export type OutputTuple = [usr: string];
  export interface OutputObject {
    usr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ExponentialDecrease extends BaseContract {
  connect(runner?: ContractRunner | null): ExponentialDecrease;
  waitForDeployment(): Promise<this>;

  interface: ExponentialDecreaseInterface;

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

  cut: TypedContractMethod<[], [bigint], "view">;

  deny: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  file: TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  price: TypedContractMethod<
    [top: BigNumberish, dur: BigNumberish],
    [bigint],
    "view"
  >;

  rely: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cut"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "file"
  ): TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "price"
  ): TypedContractMethod<
    [top: BigNumberish, dur: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "Deny"
  ): TypedContractEvent<
    DenyEvent.InputTuple,
    DenyEvent.OutputTuple,
    DenyEvent.OutputObject
  >;
  getEvent(
    key: "File"
  ): TypedContractEvent<
    FileEvent.InputTuple,
    FileEvent.OutputTuple,
    FileEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Rely"
  ): TypedContractEvent<
    RelyEvent.InputTuple,
    RelyEvent.OutputTuple,
    RelyEvent.OutputObject
  >;

  filters: {
    "Deny(address)": TypedContractEvent<
      DenyEvent.InputTuple,
      DenyEvent.OutputTuple,
      DenyEvent.OutputObject
    >;
    Deny: TypedContractEvent<
      DenyEvent.InputTuple,
      DenyEvent.OutputTuple,
      DenyEvent.OutputObject
    >;

    "File(bytes32,uint256)": TypedContractEvent<
      FileEvent.InputTuple,
      FileEvent.OutputTuple,
      FileEvent.OutputObject
    >;
    File: TypedContractEvent<
      FileEvent.InputTuple,
      FileEvent.OutputTuple,
      FileEvent.OutputObject
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

    "Rely(address)": TypedContractEvent<
      RelyEvent.InputTuple,
      RelyEvent.OutputTuple,
      RelyEvent.OutputObject
    >;
    Rely: TypedContractEvent<
      RelyEvent.InputTuple,
      RelyEvent.OutputTuple,
      RelyEvent.OutputObject
    >;
  };
}
