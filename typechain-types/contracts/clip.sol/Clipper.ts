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

export type SaleStruct = {
  pos: BigNumberish;
  tab: BigNumberish;
  lot: BigNumberish;
  usr: AddressLike;
  tic: BigNumberish;
  top: BigNumberish;
};

export type SaleStructOutput = [
  pos: bigint,
  tab: bigint,
  lot: bigint,
  usr: string,
  tic: bigint,
  top: bigint
] & {
  pos: bigint;
  tab: bigint;
  lot: bigint;
  usr: string;
  tic: bigint;
  top: bigint;
};

export interface ClipperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "active"
      | "buf"
      | "calc"
      | "chip"
      | "chost"
      | "count"
      | "cusp"
      | "deny"
      | "dog"
      | "file(bytes32,uint256)"
      | "file(bytes32,address)"
      | "getStatus"
      | "ilk"
      | "initialize"
      | "kick"
      | "kicks"
      | "list"
      | "redo"
      | "rely"
      | "sales"
      | "spotter"
      | "stopped"
      | "tail"
      | "take"
      | "tip"
      | "upchost"
      | "vat"
      | "vow"
      | "wards"
      | "yank"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Deny"
      | "File(bytes32,uint256)"
      | "File(bytes32,address)"
      | "Initialized"
      | "Kick"
      | "Redo"
      | "Rely"
      | "Take"
      | "Yank"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "active",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "buf", values?: undefined): string;
  encodeFunctionData(functionFragment: "calc", values?: undefined): string;
  encodeFunctionData(functionFragment: "chip", values?: undefined): string;
  encodeFunctionData(functionFragment: "chost", values?: undefined): string;
  encodeFunctionData(functionFragment: "count", values?: undefined): string;
  encodeFunctionData(functionFragment: "cusp", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "dog", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,uint256)",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,address)",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ilk", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike, AddressLike, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "kick",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "kicks", values?: undefined): string;
  encodeFunctionData(functionFragment: "list", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redo",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "sales", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "spotter", values?: undefined): string;
  encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
  encodeFunctionData(functionFragment: "tail", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "take",
    values: [BigNumberish, BigNumberish, BigNumberish, AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "tip", values?: undefined): string;
  encodeFunctionData(functionFragment: "upchost", values?: undefined): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;
  encodeFunctionData(functionFragment: "vow", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "yank", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "active", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "calc", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cusp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dog", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getStatus", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ilk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kick", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kicks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redo", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sales", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spotter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tail", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "take", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "upchost", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "yank", data: BytesLike): Result;
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

export namespace File_bytes32_uint256_Event {
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

export namespace File_bytes32_address_Event {
  export type InputTuple = [what: BytesLike, data: AddressLike];
  export type OutputTuple = [what: string, data: string];
  export interface OutputObject {
    what: string;
    data: string;
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

export namespace KickEvent {
  export type InputTuple = [
    id: BigNumberish,
    top: BigNumberish,
    tab: BigNumberish,
    lot: BigNumberish,
    usr: AddressLike,
    kpr: AddressLike,
    coin: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    top: bigint,
    tab: bigint,
    lot: bigint,
    usr: string,
    kpr: string,
    coin: bigint
  ];
  export interface OutputObject {
    id: bigint;
    top: bigint;
    tab: bigint;
    lot: bigint;
    usr: string;
    kpr: string;
    coin: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RedoEvent {
  export type InputTuple = [
    id: BigNumberish,
    top: BigNumberish,
    tab: BigNumberish,
    lot: BigNumberish,
    usr: AddressLike,
    kpr: AddressLike,
    coin: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    top: bigint,
    tab: bigint,
    lot: bigint,
    usr: string,
    kpr: string,
    coin: bigint
  ];
  export interface OutputObject {
    id: bigint;
    top: bigint;
    tab: bigint;
    lot: bigint;
    usr: string;
    kpr: string;
    coin: bigint;
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

export namespace TakeEvent {
  export type InputTuple = [
    id: BigNumberish,
    max: BigNumberish,
    price: BigNumberish,
    owe: BigNumberish,
    tab: BigNumberish,
    lot: BigNumberish,
    usr: AddressLike
  ];
  export type OutputTuple = [
    id: bigint,
    max: bigint,
    price: bigint,
    owe: bigint,
    tab: bigint,
    lot: bigint,
    usr: string
  ];
  export interface OutputObject {
    id: bigint;
    max: bigint;
    price: bigint;
    owe: bigint;
    tab: bigint;
    lot: bigint;
    usr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace YankEvent {
  export type InputTuple = [id: BigNumberish];
  export type OutputTuple = [id: bigint];
  export interface OutputObject {
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Clipper extends BaseContract {
  connect(runner?: ContractRunner | null): Clipper;
  waitForDeployment(): Promise<this>;

  interface: ClipperInterface;

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

  active: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  buf: TypedContractMethod<[], [bigint], "view">;

  calc: TypedContractMethod<[], [string], "view">;

  chip: TypedContractMethod<[], [bigint], "view">;

  chost: TypedContractMethod<[], [bigint], "view">;

  count: TypedContractMethod<[], [bigint], "view">;

  cusp: TypedContractMethod<[], [bigint], "view">;

  deny: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  dog: TypedContractMethod<[], [string], "view">;

  "file(bytes32,uint256)": TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;

  "file(bytes32,address)": TypedContractMethod<
    [what: BytesLike, data: AddressLike],
    [void],
    "nonpayable"
  >;

  getStatus: TypedContractMethod<
    [id: BigNumberish],
    [
      [boolean, bigint, bigint, bigint] & {
        needsRedo: boolean;
        price: bigint;
        lot: bigint;
        tab: bigint;
      }
    ],
    "view"
  >;

  ilk: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [
      vat_: AddressLike,
      spotter_: AddressLike,
      dog_: AddressLike,
      ilk_: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  kick: TypedContractMethod<
    [tab: BigNumberish, lot: BigNumberish, usr: AddressLike, kpr: AddressLike],
    [bigint],
    "nonpayable"
  >;

  kicks: TypedContractMethod<[], [bigint], "view">;

  list: TypedContractMethod<[], [bigint[]], "view">;

  redo: TypedContractMethod<
    [id: BigNumberish, kpr: AddressLike],
    [void],
    "nonpayable"
  >;

  rely: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  sales: TypedContractMethod<[id: BigNumberish], [SaleStructOutput], "view">;

  spotter: TypedContractMethod<[], [string], "view">;

  stopped: TypedContractMethod<[], [bigint], "view">;

  tail: TypedContractMethod<[], [bigint], "view">;

  take: TypedContractMethod<
    [
      id: BigNumberish,
      amt: BigNumberish,
      max: BigNumberish,
      who: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  tip: TypedContractMethod<[], [bigint], "view">;

  upchost: TypedContractMethod<[], [void], "nonpayable">;

  vat: TypedContractMethod<[], [string], "view">;

  vow: TypedContractMethod<[], [string], "view">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  yank: TypedContractMethod<[id: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "active"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "buf"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calc"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "chip"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "chost"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "count"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "cusp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dog"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "file(bytes32,uint256)"
  ): TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "file(bytes32,address)"
  ): TypedContractMethod<
    [what: BytesLike, data: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getStatus"
  ): TypedContractMethod<
    [id: BigNumberish],
    [
      [boolean, bigint, bigint, bigint] & {
        needsRedo: boolean;
        price: bigint;
        lot: bigint;
        tab: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "ilk"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      vat_: AddressLike,
      spotter_: AddressLike,
      dog_: AddressLike,
      ilk_: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "kick"
  ): TypedContractMethod<
    [tab: BigNumberish, lot: BigNumberish, usr: AddressLike, kpr: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "kicks"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "list"
  ): TypedContractMethod<[], [bigint[]], "view">;
  getFunction(
    nameOrSignature: "redo"
  ): TypedContractMethod<
    [id: BigNumberish, kpr: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sales"
  ): TypedContractMethod<[id: BigNumberish], [SaleStructOutput], "view">;
  getFunction(
    nameOrSignature: "spotter"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "stopped"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "tail"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "take"
  ): TypedContractMethod<
    [
      id: BigNumberish,
      amt: BigNumberish,
      max: BigNumberish,
      who: AddressLike,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tip"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "upchost"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vat"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vow"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "yank"
  ): TypedContractMethod<[id: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "Deny"
  ): TypedContractEvent<
    DenyEvent.InputTuple,
    DenyEvent.OutputTuple,
    DenyEvent.OutputObject
  >;
  getEvent(
    key: "File(bytes32,uint256)"
  ): TypedContractEvent<
    File_bytes32_uint256_Event.InputTuple,
    File_bytes32_uint256_Event.OutputTuple,
    File_bytes32_uint256_Event.OutputObject
  >;
  getEvent(
    key: "File(bytes32,address)"
  ): TypedContractEvent<
    File_bytes32_address_Event.InputTuple,
    File_bytes32_address_Event.OutputTuple,
    File_bytes32_address_Event.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "Kick"
  ): TypedContractEvent<
    KickEvent.InputTuple,
    KickEvent.OutputTuple,
    KickEvent.OutputObject
  >;
  getEvent(
    key: "Redo"
  ): TypedContractEvent<
    RedoEvent.InputTuple,
    RedoEvent.OutputTuple,
    RedoEvent.OutputObject
  >;
  getEvent(
    key: "Rely"
  ): TypedContractEvent<
    RelyEvent.InputTuple,
    RelyEvent.OutputTuple,
    RelyEvent.OutputObject
  >;
  getEvent(
    key: "Take"
  ): TypedContractEvent<
    TakeEvent.InputTuple,
    TakeEvent.OutputTuple,
    TakeEvent.OutputObject
  >;
  getEvent(
    key: "Yank"
  ): TypedContractEvent<
    YankEvent.InputTuple,
    YankEvent.OutputTuple,
    YankEvent.OutputObject
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
      File_bytes32_uint256_Event.InputTuple,
      File_bytes32_uint256_Event.OutputTuple,
      File_bytes32_uint256_Event.OutputObject
    >;
    "File(bytes32,address)": TypedContractEvent<
      File_bytes32_address_Event.InputTuple,
      File_bytes32_address_Event.OutputTuple,
      File_bytes32_address_Event.OutputObject
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

    "Kick(uint256,uint256,uint256,uint256,address,address,uint256)": TypedContractEvent<
      KickEvent.InputTuple,
      KickEvent.OutputTuple,
      KickEvent.OutputObject
    >;
    Kick: TypedContractEvent<
      KickEvent.InputTuple,
      KickEvent.OutputTuple,
      KickEvent.OutputObject
    >;

    "Redo(uint256,uint256,uint256,uint256,address,address,uint256)": TypedContractEvent<
      RedoEvent.InputTuple,
      RedoEvent.OutputTuple,
      RedoEvent.OutputObject
    >;
    Redo: TypedContractEvent<
      RedoEvent.InputTuple,
      RedoEvent.OutputTuple,
      RedoEvent.OutputObject
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

    "Take(uint256,uint256,uint256,uint256,uint256,uint256,address)": TypedContractEvent<
      TakeEvent.InputTuple,
      TakeEvent.OutputTuple,
      TakeEvent.OutputObject
    >;
    Take: TypedContractEvent<
      TakeEvent.InputTuple,
      TakeEvent.OutputTuple,
      TakeEvent.OutputObject
    >;

    "Yank(uint256)": TypedContractEvent<
      YankEvent.InputTuple,
      YankEvent.OutputTuple,
      YankEvent.OutputObject
    >;
    Yank: TypedContractEvent<
      YankEvent.InputTuple,
      YankEvent.OutputTuple,
      YankEvent.OutputObject
    >;
  };
}
