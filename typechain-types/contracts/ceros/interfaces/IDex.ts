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
} from "../../../common";

export interface IDexInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "WETH"
      | "factory"
      | "getAmountIn"
      | "getAmountOut"
      | "getAmountsIn"
      | "getAmountsOut"
      | "quote"
      | "swapExactETHForTokens"
      | "swapExactTokensForETH"
      | "swapExactTokensForTokens"
      | "swapTokensForExactTokens"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountIn",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountOut",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsIn",
    values: [BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "quote",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [BigNumberish, AddressLike[], AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForETH",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactTokensForTokens",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapTokensForExactTokens",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike[],
      AddressLike,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsIn",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForETH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactTokensForTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapTokensForExactTokens",
    data: BytesLike
  ): Result;
}

export interface IDex extends BaseContract {
  connect(runner?: ContractRunner | null): IDex;
  waitForDeployment(): Promise<this>;

  interface: IDexInterface;

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

  WETH: TypedContractMethod<[], [string], "view">;

  factory: TypedContractMethod<[], [string], "view">;

  getAmountIn: TypedContractMethod<
    [
      amountOut: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getAmountOut: TypedContractMethod<
    [amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish],
    [bigint],
    "view"
  >;

  getAmountsIn: TypedContractMethod<
    [amountOut: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getAmountsOut: TypedContractMethod<
    [amountIn: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;

  quote: TypedContractMethod<
    [amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish],
    [bigint],
    "view"
  >;

  swapExactETHForTokens: TypedContractMethod<
    [
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;

  swapExactTokensForETH: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapExactTokensForTokens: TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  swapTokensForExactTokens: TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "factory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getAmountIn"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      reserveIn: BigNumberish,
      reserveOut: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountOut"
  ): TypedContractMethod<
    [amountIn: BigNumberish, reserveIn: BigNumberish, reserveOut: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountsIn"
  ): TypedContractMethod<
    [amountOut: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getAmountsOut"
  ): TypedContractMethod<
    [amountIn: BigNumberish, path: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "quote"
  ): TypedContractMethod<
    [amountA: BigNumberish, reserveA: BigNumberish, reserveB: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "swapExactETHForTokens"
  ): TypedContractMethod<
    [
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForETH"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapExactTokensForTokens"
  ): TypedContractMethod<
    [
      amountIn: BigNumberish,
      amountOutMin: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swapTokensForExactTokens"
  ): TypedContractMethod<
    [
      amountOut: BigNumberish,
      amountInMax: BigNumberish,
      path: AddressLike[],
      to: AddressLike,
      deadline: BigNumberish
    ],
    [bigint[]],
    "nonpayable"
  >;

  filters: {};
}
