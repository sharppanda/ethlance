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

export class Job extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Job entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Job entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Job", id.toString(), this);
  }

  static load(id: string): Job | null {
    return store.get("Job", id) as Job | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get title(): string {
    let value = this.get("title");
    return value.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get budget(): BigInt {
    let value = this.get("budget");
    return value.toBigInt();
  }

  set budget(value: BigInt) {
    this.set("budget", Value.fromBigInt(value));
  }

  get skills(): Array<string | null> {
    let value = this.get("skills");
    return value.toStringArray();
  }

  set skills(value: Array<string | null>) {
    this.set("skills", Value.fromStringArray(value));
  }

  get language(): string {
    let value = this.get("language");
    return value.toString();
  }

  set language(value: string) {
    this.set("language", Value.fromString(value));
  }
}
