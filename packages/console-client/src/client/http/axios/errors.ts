class InvalidArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidArgumentError";
  }
}


const InvaidArgumentError = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AssertNotFalsy: (propName: string, prop: any) => {
    if (!prop) {
      throw new InvalidArgumentError(`${propName} cannot be falsy`)
    }
  },
}

export {
  InvaidArgumentError,
}
