/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
} from "@alephium/web3";
import { default as ICOContractJson } from "../ICO.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace ICOTypes {
  export type Fields = {
    tokenId: HexString;
    rate: bigint;
    tokenBalance: bigint;
    alphBalance: bigint;
    selfOwner: Address;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getRate: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<ICOInstance, ICOTypes.Fields> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as ICOTypes.Fields;
  }

  consts = {
    ErrorCodes: { BalanceExceeded: BigInt(0) },
    OwnedError: { Forbidden: BigInt(90) },
  };

  at(address: string): ICOInstance {
    return new ICOInstance(address);
  }

  tests = {
    assertOwner: async (
      params: TestContractParams<ICOTypes.Fields, { caller: Address }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "assertOwner", params);
    },
    setOwner: async (
      params: TestContractParams<ICOTypes.Fields, { newOwner: Address }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setOwner", params);
    },
    getRate: async (
      params: Omit<TestContractParams<ICOTypes.Fields, never>, "testArgs">
    ): Promise<TestContractResult<bigint>> => {
      return testMethod(this, "getRate", params);
    },
    setRate: async (
      params: TestContractParams<ICOTypes.Fields, { newRate: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "setRate", params);
    },
    deposit: async (
      params: TestContractParams<ICOTypes.Fields, { amountIcoTokens: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "deposit", params);
    },
    withdrawALPH: async (
      params: TestContractParams<ICOTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdrawALPH", params);
    },
    withdrawToken: async (
      params: TestContractParams<ICOTypes.Fields, { amount: bigint }>
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "withdrawToken", params);
    },
    swap: async (
      params: TestContractParams<
        ICOTypes.Fields,
        { amountIcoTokens: bigint; recipient: Address }
      >
    ): Promise<TestContractResult<null>> => {
      return testMethod(this, "swap", params);
    },
  };
}

// Use this object to test and deploy the contract
export const ICO = new Factory(
  Contract.fromJson(
    ICOContractJson,
    "",
    "6eed2e9e0497e9c21d650f438d7f1ce32e955a90baf6c0817bee40c6f8980d53"
  )
);

// Use this class to interact with the blockchain
export class ICOInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<ICOTypes.State> {
    return fetchContractState(ICO, this);
  }

  methods = {
    getRate: async (
      params?: ICOTypes.CallMethodParams<"getRate">
    ): Promise<ICOTypes.CallMethodResult<"getRate">> => {
      return callMethod(
        ICO,
        this,
        "getRate",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends ICOTypes.MultiCallParams>(
    calls: Calls
  ): Promise<ICOTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      ICO,
      this,
      calls,
      getContractByCodeHash
    )) as ICOTypes.MultiCallResults<Calls>;
  }
}