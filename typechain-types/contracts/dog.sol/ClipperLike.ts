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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface ClipperLikeInterface extends Interface {
  getFunction(nameOrSignature: "ilk" | "kick"): FunctionFragment;

  encodeFunctionData(functionFragment: "ilk", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "kick",
    values: [BigNumberish, BigNumberish, AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "ilk", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kick", data: BytesLike): Result;
}

export interface ClipperLike extends BaseContract {
  connect(runner?: ContractRunner | null): ClipperLike;
  waitForDeployment(): Promise<this>;

  interface: ClipperLikeInterface;

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

  ilk: TypedContractMethod<[], [string], "view">;

  kick: TypedContractMethod<
    [tab: BigNumberish, lot: BigNumberish, usr: AddressLike, kpr: AddressLike],
    [bigint],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ilk"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "kick"
  ): TypedContractMethod<
    [tab: BigNumberish, lot: BigNumberish, usr: AddressLike, kpr: AddressLike],
    [bigint],
    "nonpayable"
  >;

  filters: {};
}
