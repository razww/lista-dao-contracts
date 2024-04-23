/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  GemJoinLike,
  GemJoinLikeInterface,
} from "../../../contracts/interfaces/GemJoinLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gem",
    outputs: [
      {
        internalType: "contract GemLike",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "join",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class GemJoinLike__factory {
  static readonly abi = _abi;
  static createInterface(): GemJoinLikeInterface {
    return new Interface(_abi) as GemJoinLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): GemJoinLike {
    return new Contract(address, _abi, runner) as unknown as GemJoinLike;
  }
}
