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

export interface SpotterInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "cage"
      | "deny"
      | "file(bytes32,bytes32,uint256)"
      | "file(bytes32,uint256)"
      | "file(bytes32,bytes32,address)"
      | "ilks"
      | "initialize"
      | "live"
      | "par"
      | "poke"
      | "rely"
      | "uncage"
      | "vat"
      | "wards"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Initialized" | "Poke"): EventFragment;

  encodeFunctionData(functionFragment: "cage", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,bytes32,uint256)",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,uint256)",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,bytes32,address)",
    values: [BytesLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "ilks", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;
  encodeFunctionData(functionFragment: "par", values?: undefined): string;
  encodeFunctionData(functionFragment: "poke", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "uncage", values?: undefined): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ilks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "par", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uncage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
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

export namespace PokeEvent {
  export type InputTuple = [ilk: BytesLike, val: BytesLike, spot: BigNumberish];
  export type OutputTuple = [ilk: string, val: string, spot: bigint];
  export interface OutputObject {
    ilk: string;
    val: string;
    spot: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Spotter extends BaseContract {
  connect(runner?: ContractRunner | null): Spotter;
  waitForDeployment(): Promise<this>;

  interface: SpotterInterface;

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

  cage: TypedContractMethod<[], [void], "nonpayable">;

  deny: TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;

  "file(bytes32,bytes32,uint256)": TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;

  "file(bytes32,uint256)": TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;

  "file(bytes32,bytes32,address)": TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, pip_: AddressLike],
    [void],
    "nonpayable"
  >;

  ilks: TypedContractMethod<
    [arg0: BytesLike],
    [[string, bigint] & { pip: string; mat: bigint }],
    "view"
  >;

  initialize: TypedContractMethod<[vat_: AddressLike], [void], "nonpayable">;

  live: TypedContractMethod<[], [bigint], "view">;

  par: TypedContractMethod<[], [bigint], "view">;

  poke: TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;

  rely: TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;

  uncage: TypedContractMethod<[], [void], "nonpayable">;

  vat: TypedContractMethod<[], [string], "view">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "file(bytes32,bytes32,uint256)"
  ): TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "file(bytes32,uint256)"
  ): TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "file(bytes32,bytes32,address)"
  ): TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, pip_: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ilks"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [[string, bigint] & { pip: string; mat: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[vat_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "live"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "par"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "poke"
  ): TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[guy: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "uncage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vat"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Poke"
  ): TypedContractEvent<
    PokeEvent.InputTuple,
    PokeEvent.OutputTuple,
    PokeEvent.OutputObject
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

    "Poke(bytes32,bytes32,uint256)": TypedContractEvent<
      PokeEvent.InputTuple,
      PokeEvent.OutputTuple,
      PokeEvent.OutputObject
    >;
    Poke: TypedContractEvent<
      PokeEvent.InputTuple,
      PokeEvent.OutputTuple,
      PokeEvent.OutputObject
    >;
  };
}
