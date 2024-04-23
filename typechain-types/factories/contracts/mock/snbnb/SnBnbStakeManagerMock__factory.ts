/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  SnBnbStakeManagerMock,
  SnBnbStakeManagerMockInterface,
} from "../../../../contracts/mock/snbnb/SnBnbStakeManagerMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "er",
        type: "uint256",
      },
    ],
    name: "changeER",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_snBnb",
        type: "address",
      },
    ],
    name: "changeSnBnb",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
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
    name: "convertBnbToSnBnb",
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
        name: "_amountInSnBnb",
        type: "uint256",
      },
    ],
    name: "convertSnBnbToBnb",
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
            name: "amountInSnBnb",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
        ],
        internalType: "struct ISnBnbStakeManager.WithdrawalRequest[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amountInSnBnb",
        type: "uint256",
      },
    ],
    name: "requestWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506105b0806100206000396000f3fe60806040526004361061007a5760003560e01c8063026e3e7b1461008657806329d8a2eb146100ce5780633038591d146100fc5780636693f3721461011e5780636c9302281461015b578063745400c914610188578063b13acedd146101a8578063ce6298e1146101c8578063d0e30db0146101e857600080fd5b3661008157005b600080fd5b34801561009257600080fd5b506100b26100a1366004610435565b50600191671bc16d674ec800009150565b6040805192151583526020830191909152015b60405180910390f35b3480156100da57600080fd5b506100ee6100e936600461045f565b6101f0565b6040519081526020016100c5565b34801561010857600080fd5b5061011c61011736600461045f565b600155565b005b34801561012a57600080fd5b5061011c610139366004610478565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b34801561016757600080fd5b5061017b610176366004610478565b610218565b6040516100c5919061049a565b34801561019457600080fd5b5061011c6101a336600461045f565b6102b6565b3480156101b457600080fd5b5061011c6101c336600461045f565b610335565b3480156101d457600080fd5b506100ee6101e336600461045f565b61038d565b61011c6103a6565b60015460009061020883670de0b6b3a76400006104f3565b6102129190610520565b92915050565b60408051600180825281830190925260609160009190816020015b61025760405180606001604052806000815260200160008152602001600081525090565b815260200190600190039081610233579050509050604051806060016040528060008152602001671bc16d674ec8000081526020016104d2815250816000815181106102a5576102a5610542565b602090810291909101015292915050565b6000546040516323b872dd60e01b8152336004820152306024820152604481018390526001600160a01b03909116906323b872dd906064016020604051808303816000875af115801561030d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103319190610558565b5050565b604051339061138890671bc16d674ec80000906000818181858888f193505050503d8060008114610382576040519150601f19603f3d011682016040523d82523d6000602084013e610387565b606091505b50505050565b6000670de0b6b3a76400008260015461020891906104f3565b60006103b1346101f0565b6000546040516340c10f1960e01b8152336004820152602481018390529192506001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156103fe57600080fd5b505af1158015610412573d6000803e3d6000fd5b5050505050565b80356001600160a01b038116811461043057600080fd5b919050565b6000806040838503121561044857600080fd5b61045183610419565b946020939093013593505050565b60006020828403121561047157600080fd5b5035919050565b60006020828403121561048a57600080fd5b61049382610419565b9392505050565b602080825282518282018190526000919060409081850190868401855b828110156104e657815180518552868101518786015285015185850152606090930192908501906001016104b7565b5091979650505050505050565b600081600019048311821515161561051b57634e487b7160e01b600052601160045260246000fd5b500290565b60008261053d57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561056a57600080fd5b8151801515811461049357600080fdfea2646970667358221220a743ebf94ce1534449c29a36555d3961807efb155e70c9fa99aa69bbe80a38a064736f6c634300080a0033";

type SnBnbStakeManagerMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SnBnbStakeManagerMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SnBnbStakeManagerMock__factory extends ContractFactory {
  constructor(...args: SnBnbStakeManagerMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SnBnbStakeManagerMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): SnBnbStakeManagerMock__factory {
    return super.connect(runner) as SnBnbStakeManagerMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SnBnbStakeManagerMockInterface {
    return new Interface(_abi) as SnBnbStakeManagerMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SnBnbStakeManagerMock {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SnBnbStakeManagerMock;
  }
}
