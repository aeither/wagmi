import { contracts } from 'wagmi-testing'

import { erc20ABI } from '../../constants'
import { getContract } from './getContract'

describe('getContract', () => {
  it('gets contract', () => {
    expect(
      getContract({
        addressOrName: contracts.uniToken,
        contractInterface: erc20ABI,
      }),
    ).toMatchInlineSnapshot(`
      Contract {
        "_runningEvents": {},
        "_wrappedEmits": {},
        "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        "allowance": [Function],
        "allowance(address,address)": [Function],
        "approve": [Function],
        "approve(address,uint256)": [Function],
        "balanceOf": [Function],
        "balanceOf(address)": [Function],
        "callStatic": {
          "allowance": [Function],
          "allowance(address,address)": [Function],
          "approve": [Function],
          "approve(address,uint256)": [Function],
          "balanceOf": [Function],
          "balanceOf(address)": [Function],
          "decimals": [Function],
          "decimals()": [Function],
          "name": [Function],
          "name()": [Function],
          "symbol": [Function],
          "symbol()": [Function],
          "totalSupply": [Function],
          "totalSupply()": [Function],
          "transfer": [Function],
          "transfer(address,uint256)": [Function],
          "transferFrom": [Function],
          "transferFrom(address,address,uint256)": [Function],
        },
        "decimals": [Function],
        "decimals()": [Function],
        "estimateGas": {
          "allowance": [Function],
          "allowance(address,address)": [Function],
          "approve": [Function],
          "approve(address,uint256)": [Function],
          "balanceOf": [Function],
          "balanceOf(address)": [Function],
          "decimals": [Function],
          "decimals()": [Function],
          "name": [Function],
          "name()": [Function],
          "symbol": [Function],
          "symbol()": [Function],
          "totalSupply": [Function],
          "totalSupply()": [Function],
          "transfer": [Function],
          "transfer(address,uint256)": [Function],
          "transferFrom": [Function],
          "transferFrom(address,address,uint256)": [Function],
        },
        "filters": {
          "Approval": [Function],
          "Approval(address,address,uint256)": [Function],
          "Transfer": [Function],
          "Transfer(address,address,uint256)": [Function],
        },
        "functions": {
          "allowance": [Function],
          "allowance(address,address)": [Function],
          "approve": [Function],
          "approve(address,uint256)": [Function],
          "balanceOf": [Function],
          "balanceOf(address)": [Function],
          "decimals": [Function],
          "decimals()": [Function],
          "name": [Function],
          "name()": [Function],
          "symbol": [Function],
          "symbol()": [Function],
          "totalSupply": [Function],
          "totalSupply()": [Function],
          "transfer": [Function],
          "transfer(address,uint256)": [Function],
          "transferFrom": [Function],
          "transferFrom(address,address,uint256)": [Function],
        },
        "interface": Interface {
          "_abiCoder": AbiCoder {
            "coerceFunc": null,
          },
          "_isInterface": true,
          "deploy": ConstructorFragment {
            "_isFragment": true,
            "gas": null,
            "inputs": [],
            "name": null,
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor",
          },
          "errors": {},
          "events": {
            "Approval(address,address,uint256)": EventFragment {
              "_isFragment": true,
              "anonymous": false,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "owner",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "spender",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": false,
                  "name": "value",
                  "type": "uint256",
                },
              ],
              "name": "Approval",
              "type": "event",
            },
            "Transfer(address,address,uint256)": EventFragment {
              "_isFragment": true,
              "anonymous": false,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "from",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "to",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": false,
                  "name": "value",
                  "type": "uint256",
                },
              ],
              "name": "Transfer",
              "type": "event",
            },
          },
          "fragments": [
            FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "name",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "string",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "string",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": false,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_spender",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "_value",
                  "type": "uint256",
                },
              ],
              "name": "approve",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "bool",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "bool",
                },
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "uint256",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": false,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_from",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_to",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "_value",
                  "type": "uint256",
                },
              ],
              "name": "transferFrom",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "bool",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "bool",
                },
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "decimals",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint8",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "uint8",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_owner",
                  "type": "address",
                },
              ],
              "name": "balanceOf",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "balance",
                  "type": "uint256",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "symbol",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "string",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "string",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": false,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_to",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "_value",
                  "type": "uint256",
                },
              ],
              "name": "transfer",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "bool",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "bool",
                },
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
            },
            FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_owner",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_spender",
                  "type": "address",
                },
              ],
              "name": "allowance",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "uint256",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            EventFragment {
              "_isFragment": true,
              "anonymous": false,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "owner",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "spender",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": false,
                  "name": "value",
                  "type": "uint256",
                },
              ],
              "name": "Approval",
              "type": "event",
            },
            EventFragment {
              "_isFragment": true,
              "anonymous": false,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "from",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": true,
                  "name": "to",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": false,
                  "name": "value",
                  "type": "uint256",
                },
              ],
              "name": "Transfer",
              "type": "event",
            },
          ],
          "functions": {
            "allowance(address,address)": FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_owner",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_spender",
                  "type": "address",
                },
              ],
              "name": "allowance",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "uint256",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            "approve(address,uint256)": FunctionFragment {
              "_isFragment": true,
              "constant": false,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_spender",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "_value",
                  "type": "uint256",
                },
              ],
              "name": "approve",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "bool",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "bool",
                },
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
            },
            "balanceOf(address)": FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_owner",
                  "type": "address",
                },
              ],
              "name": "balanceOf",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "balance",
                  "type": "uint256",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            "decimals()": FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "decimals",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint8",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "uint8",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            "name()": FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "name",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "string",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "string",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            "symbol()": FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "symbol",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "string",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "string",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            "totalSupply()": FunctionFragment {
              "_isFragment": true,
              "constant": true,
              "gas": null,
              "inputs": [],
              "name": "totalSupply",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "uint256",
                },
              ],
              "payable": false,
              "stateMutability": "view",
              "type": "function",
            },
            "transfer(address,uint256)": FunctionFragment {
              "_isFragment": true,
              "constant": false,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_to",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "_value",
                  "type": "uint256",
                },
              ],
              "name": "transfer",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "bool",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "bool",
                },
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
            },
            "transferFrom(address,address,uint256)": FunctionFragment {
              "_isFragment": true,
              "constant": false,
              "gas": null,
              "inputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_from",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "address",
                  "components": null,
                  "indexed": null,
                  "name": "_to",
                  "type": "address",
                },
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "uint256",
                  "components": null,
                  "indexed": null,
                  "name": "_value",
                  "type": "uint256",
                },
              ],
              "name": "transferFrom",
              "outputs": [
                ParamType {
                  "_isParamType": true,
                  "arrayChildren": null,
                  "arrayLength": null,
                  "baseType": "bool",
                  "components": null,
                  "indexed": null,
                  "name": null,
                  "type": "bool",
                },
              ],
              "payable": false,
              "stateMutability": "nonpayable",
              "type": "function",
            },
          },
          "structs": {},
        },
        "name": [Function],
        "name()": [Function],
        "populateTransaction": {
          "allowance": [Function],
          "allowance(address,address)": [Function],
          "approve": [Function],
          "approve(address,uint256)": [Function],
          "balanceOf": [Function],
          "balanceOf(address)": [Function],
          "decimals": [Function],
          "decimals()": [Function],
          "name": [Function],
          "name()": [Function],
          "symbol": [Function],
          "symbol()": [Function],
          "totalSupply": [Function],
          "totalSupply()": [Function],
          "transfer": [Function],
          "transfer(address,uint256)": [Function],
          "transferFrom": [Function],
          "transferFrom(address,address,uint256)": [Function],
        },
        "provider": null,
        "resolvedAddress": Promise {},
        "signer": null,
        "symbol": [Function],
        "symbol()": [Function],
        "totalSupply": [Function],
        "totalSupply()": [Function],
        "transfer": [Function],
        "transfer(address,uint256)": [Function],
        "transferFrom": [Function],
        "transferFrom(address,address,uint256)": [Function],
      }
    `)
  })
})
