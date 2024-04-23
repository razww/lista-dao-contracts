/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IStakeManager,
  IStakeManagerInterface,
} from "../../../../contracts/bnbx/interfaces/IStakeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    name: "claimWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "convertBnbToBnbX",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountInBnbX",
        type: "uint256",
      },
    ],
    name: "convertBnbXToBnb",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    name: "getUserRequestStatus",
    outputs: [
      {
        internalType: "bool",
        name: "_isClaimable",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "getUserWithdrawalRequests",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "uuid",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountInBnbX",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
        ],
        internalType: "struct IStakeManager.WithdrawalRequest[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountInBnbX",
        type: "uint256",
      },
    ],
    name: "requestWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IStakeManager__factory {
  static readonly abi = _abi;
  static createInterface(): IStakeManagerInterface {
    return new Interface(_abi) as IStakeManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IStakeManager {
    return new Contract(address, _abi, runner) as unknown as IStakeManager;
  }
}
