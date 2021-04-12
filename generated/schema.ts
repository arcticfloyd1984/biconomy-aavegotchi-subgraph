// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class MetaTransaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save MetaTransaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save MetaTransaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("MetaTransaction", id.toString(), this);
  }

  static load(id: string): MetaTransaction | null {
    return store.get("MetaTransaction", id) as MetaTransaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get userAddress(): Bytes {
    let value = this.get("userAddress");
    return value.toBytes();
  }

  set userAddress(value: Bytes) {
    this.set("userAddress", Value.fromBytes(value));
  }

  get relayerAddress(): Bytes {
    let value = this.get("relayerAddress");
    return value.toBytes();
  }

  set relayerAddress(value: Bytes) {
    this.set("relayerAddress", Value.fromBytes(value));
  }
}
