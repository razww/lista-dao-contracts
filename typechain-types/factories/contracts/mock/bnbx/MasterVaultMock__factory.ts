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
  MasterVaultMock,
  MasterVaultMockInterface,
} from "../../../../contracts/mock/bnbx/MasterVaultMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_strategy",
        type: "address",
      },
    ],
    name: "changeStrategy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "strategy",
    outputs: [
      {
        internalType: "contract IBaseStrategy",
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
        name: "strategy_",
        type: "address",
      },
    ],
    name: "strategyParams",
    outputs: [
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "allocation",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawInToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610361806100206000396000f3fe6080604052600436106100555760003560e01c80637a9024bd1461005a578063a8c62e7614610099578063be19b9c5146100d6578063c4c2d9b914610104578063d0e30db01461014f578063f3fef3a314610157575b600080fd5b34801561006657600080fd5b506100976100753660046102cd565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b005b3480156100a557600080fd5b506000546100b9906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100e257600080fd5b506100f66100f13660046102e8565b610177565b6040519081526020016100cd565b34801561011057600080fd5b5061013261011f3660046102cd565b506001906000906729a2241af62c000090565b6040805193151584526020840192909252908201526060016100cd565b6100f66101f7565b34801561016357600080fd5b506100f66101723660046102e8565b610277565b6000805460405163be19b9c560e01b81526001600160a01b038581166004830152602482018590529091169063be19b9c5906044015b6020604051808303816000875af11580156101cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101f09190610312565b9392505050565b60008060009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0346040518263ffffffff1660e01b815260040160206040518083038185885af115801561024d573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906102729190610312565b905090565b6000805460405163f3fef3a360e01b81526001600160a01b038581166004830152602482018590529091169063f3fef3a3906044016101ad565b80356001600160a01b03811681146102c857600080fd5b919050565b6000602082840312156102df57600080fd5b6101f0826102b1565b600080604083850312156102fb57600080fd5b610304836102b1565b946020939093013593505050565b60006020828403121561032457600080fd5b505191905056fea2646970667358221220c9971e5f5b78550a9785693980d151d9b0de3e63b70a3e4a126fc42188036bee64736f6c634300080a0033";

type MasterVaultMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MasterVaultMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MasterVaultMock__factory extends ContractFactory {
  constructor(...args: MasterVaultMockConstructorParams) {
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
      MasterVaultMock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MasterVaultMock__factory {
    return super.connect(runner) as MasterVaultMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterVaultMockInterface {
    return new Interface(_abi) as MasterVaultMockInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MasterVaultMock {
    return new Contract(address, _abi, runner) as unknown as MasterVaultMock;
  }
}
