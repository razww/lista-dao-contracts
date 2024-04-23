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

export declare namespace ISnBnbStakeManager {
  export type WithdrawalRequestStruct = {
    uuid: BigNumberish;
    amountInSnBnb: BigNumberish;
    startTime: BigNumberish;
  };

  export type WithdrawalRequestStructOutput = [
    uuid: bigint,
    amountInSnBnb: bigint,
    startTime: bigint
  ] & { uuid: bigint; amountInSnBnb: bigint; startTime: bigint };
}

export interface ISnBnbStakeManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimWithdraw"
      | "convertBnbToSnBnb"
      | "convertSnBnbToBnb"
      | "deposit"
      | "getUserRequestStatus"
      | "getUserWithdrawalRequests"
      | "requestWithdraw"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimWithdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertBnbToSnBnb",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "convertSnBnbToBnb",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getUserRequestStatus",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserWithdrawalRequests",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "requestWithdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "claimWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertBnbToSnBnb",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convertSnBnbToBnb",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getUserRequestStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserWithdrawalRequests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestWithdraw",
    data: BytesLike
  ): Result;
}

export interface ISnBnbStakeManager extends BaseContract {
  connect(runner?: ContractRunner | null): ISnBnbStakeManager;
  waitForDeployment(): Promise<this>;

  interface: ISnBnbStakeManagerInterface;

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

  claimWithdraw: TypedContractMethod<
    [_idx: BigNumberish],
    [void],
    "nonpayable"
  >;

  convertBnbToSnBnb: TypedContractMethod<
    [_amount: BigNumberish],
    [bigint],
    "view"
  >;

  convertSnBnbToBnb: TypedContractMethod<
    [_amountInBnbX: BigNumberish],
    [bigint],
    "view"
  >;

  deposit: TypedContractMethod<[], [void], "payable">;

  getUserRequestStatus: TypedContractMethod<
    [_user: AddressLike, _idx: BigNumberish],
    [[boolean, bigint] & { _isClaimable: boolean; _amount: bigint }],
    "view"
  >;

  getUserWithdrawalRequests: TypedContractMethod<
    [_address: AddressLike],
    [ISnBnbStakeManager.WithdrawalRequestStructOutput[]],
    "view"
  >;

  requestWithdraw: TypedContractMethod<
    [_amountInSnBnb: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimWithdraw"
  ): TypedContractMethod<[_idx: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "convertBnbToSnBnb"
  ): TypedContractMethod<[_amount: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "convertSnBnbToBnb"
  ): TypedContractMethod<[_amountInBnbX: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "getUserRequestStatus"
  ): TypedContractMethod<
    [_user: AddressLike, _idx: BigNumberish],
    [[boolean, bigint] & { _isClaimable: boolean; _amount: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getUserWithdrawalRequests"
  ): TypedContractMethod<
    [_address: AddressLike],
    [ISnBnbStakeManager.WithdrawalRequestStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "requestWithdraw"
  ): TypedContractMethod<[_amountInSnBnb: BigNumberish], [void], "nonpayable">;

  filters: {};
}
