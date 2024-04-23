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

export interface DogLikeInterface extends Interface {
  getFunction(nameOrSignature: "chop" | "digs"): FunctionFragment;

  encodeFunctionData(functionFragment: "chop", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "digs",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "chop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "digs", data: BytesLike): Result;
}

export interface DogLike extends BaseContract {
  connect(runner?: ContractRunner | null): DogLike;
  waitForDeployment(): Promise<this>;

  interface: DogLikeInterface;

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

  chop: TypedContractMethod<[arg0: BytesLike], [bigint], "nonpayable">;

  digs: TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "chop"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "digs"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
