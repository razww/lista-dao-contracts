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
import type { NonPayableOverrides } from "../../../common";
import type { Vat, VatInterface } from "../../../contracts/vat.sol/Vat";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "Line",
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
        internalType: "address",
        name: "bit",
        type: "address",
      },
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "behalf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "can",
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
    name: "debt",
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
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "flux",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "i",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "u",
        type: "address",
      },
      {
        internalType: "int256",
        name: "rate",
        type: "int256",
      },
    ],
    name: "fold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "int256",
        name: "dink",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "dart",
        type: "int256",
      },
    ],
    name: "fork",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "i",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "u",
        type: "address",
      },
      {
        internalType: "address",
        name: "v",
        type: "address",
      },
      {
        internalType: "address",
        name: "w",
        type: "address",
      },
      {
        internalType: "int256",
        name: "dink",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "dart",
        type: "int256",
      },
    ],
    name: "frob",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "gem",
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
        internalType: "bytes32",
        name: "i",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "u",
        type: "address",
      },
      {
        internalType: "address",
        name: "v",
        type: "address",
      },
      {
        internalType: "address",
        name: "w",
        type: "address",
      },
      {
        internalType: "int256",
        name: "dink",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "dart",
        type: "int256",
      },
    ],
    name: "grab",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "hay",
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
        name: "rad",
        type: "uint256",
      },
    ],
    name: "heal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "hope",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "ilks",
    outputs: [
      {
        internalType: "uint256",
        name: "Art",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "line",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dust",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "live",
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
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rad",
        type: "uint256",
      },
    ],
    name: "move",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "nope",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        name: "bit",
        type: "address",
      },
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "regard",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sin",
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
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "int256",
        name: "wad",
        type: "int256",
      },
    ],
    name: "slip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "u",
        type: "address",
      },
      {
        internalType: "address",
        name: "v",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rad",
        type: "uint256",
      },
    ],
    name: "suck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uncage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "urns",
    outputs: [
      {
        internalType: "uint256",
        name: "ink",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "art",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vice",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611d86806100206000396000f3fe608060405234801561001057600080fd5b50600436106101d15760003560e01c806385fd5cd711610105578063bf353dbb1161009d578063bf353dbb1461042e578063d63b23b21461044e578063d7a9b79214610456578063d9638d3614610469578063dc4d20fa146104ce578063f059212a14610505578063f24e23eb14610525578063f2fde38b14610538578063f37ac61c1461054b57600080fd5b806385fd5cd71461035d578063870c616d1461037d5780638da5cb5b14610390578063957aa58c146103ab5780639c52a7f1146103b4578063a3b22fc4146103c7578063b65337df146103ff578063babe8a3f14610412578063bb35783b1461041b57600080fd5b80635216788d116101785780635216788d146102d35780636111be2e146102e657806365fae35e146102f9578063692450091461030c578063715018a614610314578063760887031461031c5780637bab3f401461032f5780637cdd3fde146103425780638129fc1c1461035557600080fd5b80630dca59c1146101d65780631a0b287e146101f2578063214414d5146102075780632424be5c1461023257806329ae8114146102795780632d61a3551461028c5780633b663195146102955780634538c4eb146102a8575b600080fd5b6101df606c5481565b6040519081526020015b60405180910390f35b6102056102003660046119b0565b61055e565b005b6101df6102153660046119f3565b606960209081526000928352604080842090915290825290205481565b6102646102403660046119f3565b60686020908152600092835260408084209091529082529020805460019091015482565b604080519283526020830191909152016101e9565b610205610287366004611a1f565b610678565b6101df606d5481565b6102056102a3366004611a41565b6106de565b6101df6102b6366004611a5a565b606660209081526000928352604080842090915290825290205481565b6102056102e1366004611a5a565b610786565b6102056102f4366004611a84565b6107e2565b610205610307366004611ac8565b6108c5565b610205610933565b610205610969565b61020561032a366004611ae3565b61099f565b61020561033d366004611ae3565b610e26565b610205610350366004611b42565b610f65565b610205610fea565b6101df61036b366004611ac8565b606a6020526000908152604090205481565b61020561038b366004611b77565b611077565b6033546040516001600160a01b0390911681526020016101e9565b6101df606f5481565b6102056103c2366004611ac8565b6112d0565b6102056103d5366004611ac8565b3360009081526066602090815260408083206001600160a01b039490941683529290522060019055565b61020561040d366004611b42565b61133b565b6101df606e5481565b610205610429366004611bc5565b611413565b6101df61043c366004611ac8565b60656020526000908152604090205481565b6102056114db565b610205610464366004611a5a565b611511565b6104a6610477366004611a41565b606760205260009081526040902080546001820154600283015460038401546004909401549293919290919085565b604080519586526020860194909452928401919091526060830152608082015260a0016101e9565b6102056104dc366004611ac8565b3360009081526066602090815260408083206001600160a01b0394909416835292905290812055565b6101df610513366004611ac8565b606b6020526000908152604090205481565b610205610533366004611bc5565b61156c565b610205610546366004611ac8565b611632565b610205610559366004611a41565b6116ca565b336000908152606560205260409020546001146105965760405162461bcd60e51b815260040161058d90611bf1565b60405180910390fd5b606f546001146105b85760405162461bcd60e51b815260040161058d90611c1d565b81631cdc1bdd60e21b14156105e0576000838152606760205260409020600201819055505050565b81636c696e6560e01b1415610608576000838152606760205260409020600301819055505050565b8163191d5cdd60e21b1415610630576000838152606760205260409020600401819055505050565b60405162461bcd60e51b815260206004820152601b60248201527f5661742f66696c652d756e7265636f676e697a65642d706172616d0000000000604482015260640161058d565b336000908152606560205260409020546001146106a75760405162461bcd60e51b815260040161058d90611bf1565b606f546001146106c95760405162461bcd60e51b815260040161058d90611c1d565b81634c696e6560e01b141561063057606e5550565b3360009081526065602052604090205460011461070d5760405162461bcd60e51b815260040161058d90611bf1565b600081815260676020526040902060010154156107635760405162461bcd60e51b815260206004820152601460248201527315985d0bda5b1acb585b1c9958591e4b5a5b9a5d60621b604482015260640161058d565b60009081526067602052604090206b033b2e3c9fd0803ce8000000600190910155565b336000908152606560205260409020546001146107b55760405162461bcd60e51b815260040161058d90611bf1565b6001600160a01b039182166000908152606660209081526040808320939094168252919091522060019055565b336000908152606560205260409020546001146108115760405162461bcd60e51b815260040161058d90611bf1565b61081b8333611750565b6108375760405162461bcd60e51b815260040161058d90611c43565b60008481526069602090815260408083206001600160a01b03871684529091529020546108649082611791565b60008581526069602090815260408083206001600160a01b03888116855292528083209390935584168152205461089b90826117a1565b60009485526069602090815260408087206001600160a01b03909516875293905291909320555050565b336000908152606560205260409020546001146108f45760405162461bcd60e51b815260040161058d90611bf1565b606f546001146109165760405162461bcd60e51b815260040161058d90611c1d565b6001600160a01b0316600090815260656020526040902060019055565b336000908152606560205260409020546001146109625760405162461bcd60e51b815260040161058d90611bf1565b6000606f55565b6033546001600160a01b031633146109935760405162461bcd60e51b815260040161058d90611c6c565b61099d60006117b1565b565b336000908152606560205260409020546001146109ce5760405162461bcd60e51b815260040161058d90611bf1565b606f546001146109f05760405162461bcd60e51b815260040161058d90611c1d565b60008681526068602090815260408083206001600160a01b038916845282528083208151808301835281548152600191820154818501528a85526067845293829020825160a081018452815481529181015493820184905260028101549282019290925260038201546060820152600490910154608082015290610aa95760405162461bcd60e51b815260206004820152601060248201526f15985d0bda5b1acb5b9bdd0b5a5b9a5d60821b604482015260640161058d565b8151610ab59085611803565b82526020820151610ac69084611803565b60208301528051610ad79084611803565b81526020810151600090610aeb9085611838565b90506000610b018360200151856020015161186c565b9050610b0f606c5483611803565b606c81905550610b496000861315610b458560600151610b378760000151886020015161186c565b1115606e54606c5411151690565b1790565b610b8c5760405162461bcd60e51b815260206004820152601460248201527315985d0bd8d95a5b1a5b99cb595e18d95959195960621b604482015260640161058d565b610bb9610ba0600087131560008912151690565b610bb28660000151866040015161186c565b8311151790565b610bf45760405162461bcd60e51b815260206004820152600c60248201526b5661742f6e6f742d7361666560a01b604482015260640161058d565b610c12610c08600087131560008912151690565b610b458b33611750565b610c525760405162461bcd60e51b81526020600482015260116024820152705661742f6e6f742d616c6c6f7765642d7560781b604482015260640161058d565b610c646000871315610b458a33611750565b610ca45760405162461bcd60e51b81526020600482015260116024820152702b30ba17b737ba16b0b63637bbb2b216bb60791b604482015260640161058d565b610cb66000861215610b458933611750565b610cf65760405162461bcd60e51b81526020600482015260116024820152705661742f6e6f742d616c6c6f7765642d7760781b604482015260640161058d565b60208401516080840151821015901517610d3d5760405162461bcd60e51b815260206004820152600860248201526715985d0bd91d5cdd60c21b604482015260640161058d565b60008a81526069602090815260408083206001600160a01b038c168452909152902054610d6a9087611895565b60008b81526069602090815260408083206001600160a01b03808e16855290835281842094909455928a168252606a90522054610da79083611803565b6001600160a01b039788166000908152606a60209081526040808320939093558c8252606881528282209b9099168152998852808a208551815594880151600195860155998952505060678552958790208651815593860151908401555050928201516002840155506060810151600383015560800151600490910155565b33600090815260656020526040902054600114610e555760405162461bcd60e51b815260040161058d90611bf1565b60008681526068602090815260408083206001600160a01b0389168452825280832089845260679092529091208154610e8e9085611803565b82556001820154610e9f9084611803565b60018301558054610eb09084611803565b81556001810154600090610ec49085611838565b60008a81526069602090815260408083206001600160a01b038c168452909152902054909150610ef49086611895565b60008a81526069602090815260408083206001600160a01b03808d168552908352818420949094559289168252606b90522054610f319082611895565b6001600160a01b0387166000908152606b6020526040902055606d54610f579082611895565b606d55505050505050505050565b33600090815260656020526040902054600114610f945760405162461bcd60e51b815260040161058d90611bf1565b60008381526069602090815260408083206001600160a01b0386168452909152902054610fc19082611803565b60009384526069602090815260408086206001600160a01b039095168652939052919092205550565b6000610ff660016118c9565b9050801561100e576000805461ff0019166101001790555b611016611956565b336000908152606560205260409020600190819055606f558015611074576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b336000908152606560205260409020546001146110a65760405162461bcd60e51b815260040161058d90611bf1565b60008581526068602090815260408083206001600160a01b03888116855290835281842090871684528184208985526067909352922082546110e89086611895565b835560018301546110f99085611895565b6001840155815461110a9086611803565b8255600182015461111b9085611803565b826001018190555060006111378460010154836001015461186c565b9050600061114d8460010154846001015461186c565b905061116a61115c8a33611750565b6111668a33611750565b1690565b6111865760405162461bcd60e51b815260040161058d90611c43565b6111988560000154846002015461186c565b8211156111da5760405162461bcd60e51b815260206004820152601060248201526f5661742f6e6f742d736166652d73726360801b604482015260640161058d565b6111ec8460000154846002015461186c565b81111561122e5760405162461bcd60e51b815260206004820152601060248201526f15985d0bdb9bdd0b5cd859994b591cdd60821b604482015260640161058d565b600483015460018601541590831015176112795760405162461bcd60e51b815260206004820152600c60248201526b5661742f647573742d73726360a01b604482015260640161058d565b600483015460018501541590821015176112c45760405162461bcd60e51b815260206004820152600c60248201526b15985d0bd91d5cdd0b591cdd60a21b604482015260640161058d565b50505050505050505050565b336000908152606560205260409020546001146112ff5760405162461bcd60e51b815260040161058d90611bf1565b606f546001146113215760405162461bcd60e51b815260040161058d90611c1d565b6001600160a01b0316600090815260656020526040812055565b3360009081526065602052604090205460011461136a5760405162461bcd60e51b815260040161058d90611bf1565b606f5460011461138c5760405162461bcd60e51b815260040161058d90611c1d565b600083815260676020526040902060018101546113a99083611803565b600182015580546000906113bd9084611838565b6001600160a01b0385166000908152606a60205260409020549091506113e39082611803565b6001600160a01b0385166000908152606a6020526040902055606c546114099082611803565b606c555050505050565b336000908152606560205260409020546001146114425760405162461bcd60e51b815260040161058d90611bf1565b61144c8333611750565b6114685760405162461bcd60e51b815260040161058d90611c43565b6001600160a01b0383166000908152606a602052604090205461148b9082611791565b6001600160a01b038085166000908152606a602052604080822093909355908416815220546114ba90826117a1565b6001600160a01b039092166000908152606a60205260409020919091555050565b3360009081526065602052604090205460011461150a5760405162461bcd60e51b815260040161058d90611bf1565b6001606f55565b336000908152606560205260409020546001146115405760405162461bcd60e51b815260040161058d90611bf1565b6001600160a01b0391821660009081526066602090815260408083209390941682529190915290812055565b3360009081526065602052604090205460011461159b5760405162461bcd60e51b815260040161058d90611bf1565b6001600160a01b0383166000908152606b60205260409020546115be90826117a1565b6001600160a01b038085166000908152606b60209081526040808320949094559185168152606a90915220546115f490826117a1565b6001600160a01b0383166000908152606a6020526040902055606d5461161a90826117a1565b606d55606c5461162a90826117a1565b606c55505050565b6033546001600160a01b0316331461165c5760405162461bcd60e51b815260040161058d90611c6c565b6001600160a01b0381166116c15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161058d565b611074816117b1565b336000818152606b60205260409020546116e49083611791565b6001600160a01b0382166000908152606b6020908152604080832093909355606a905220546117139083611791565b6001600160a01b0382166000908152606a6020526040902055606d546117399083611791565b606d55606c546117499083611791565b606c555050565b6001600160a01b0382811660008181526066602090815260408083209486168084529490915281205490926117889214906001141790565b90505b92915050565b8082038281111561178b57600080fd5b8082018281101561178b57600080fd5b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8181016000821215806118165750828111155b61181f57600080fd5b60008213158061182f5750828110155b61178b57600080fd5b818102600083121561184957600080fd5b81158061182f57508282828161186157611861611ca1565b051461178b57600080fd5b600081158061182f5750508082028282828161188a5761188a611ca1565b041461178b57600080fd5b8082036000821315806118a85750828111155b6118b157600080fd5b60008212158061182f57508281101561178b57600080fd5b60008054610100900460ff1615611910578160ff1660011480156118ec5750303b155b6119085760405162461bcd60e51b815260040161058d90611cb7565b506000919050565b60005460ff8084169116106119375760405162461bcd60e51b815260040161058d90611cb7565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff1661197d5760405162461bcd60e51b815260040161058d90611d05565b61099d600054610100900460ff166119a75760405162461bcd60e51b815260040161058d90611d05565b61099d336117b1565b6000806000606084860312156119c557600080fd5b505081359360208301359350604090920135919050565b80356001600160a01b038116811461195157600080fd5b60008060408385031215611a0657600080fd5b82359150611a16602084016119dc565b90509250929050565b60008060408385031215611a3257600080fd5b50508035926020909101359150565b600060208284031215611a5357600080fd5b5035919050565b60008060408385031215611a6d57600080fd5b611a76836119dc565b9150611a16602084016119dc565b60008060008060808587031215611a9a57600080fd5b84359350611aaa602086016119dc565b9250611ab8604086016119dc565b9396929550929360600135925050565b600060208284031215611ada57600080fd5b611788826119dc565b60008060008060008060c08789031215611afc57600080fd5b86359550611b0c602088016119dc565b9450611b1a604088016119dc565b9350611b28606088016119dc565b92506080870135915060a087013590509295509295509295565b600080600060608486031215611b5757600080fd5b83359250611b67602085016119dc565b9150604084013590509250925092565b600080600080600060a08688031215611b8f57600080fd5b85359450611b9f602087016119dc565b9350611bad604087016119dc565b94979396509394606081013594506080013592915050565b600080600060608486031215611bda57600080fd5b611be3846119dc565b9250611b67602085016119dc565b60208082526012908201527115985d0bdb9bdd0b585d5d1a1bdc9a5e995960721b604082015260600190565b6020808252600c908201526b5661742f6e6f742d6c69766560a01b604082015260600190565b6020808252600f908201526e15985d0bdb9bdd0b585b1b1bddd959608a1b604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601260045260246000fd5b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220299b2859b74fb386f7a1f892d3bc0f5d41e50587a44e35ddcd9ed5e92510e0c964736f6c634300080a0033";

type VatConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VatConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vat__factory extends ContractFactory {
  constructor(...args: VatConstructorParams) {
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
      Vat & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Vat__factory {
    return super.connect(runner) as Vat__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VatInterface {
    return new Interface(_abi) as VatInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Vat {
    return new Contract(address, _abi, runner) as unknown as Vat;
  }
}
