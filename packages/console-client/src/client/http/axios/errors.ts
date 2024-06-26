const InvaidArgumentExceptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ThrowIfFalsy: (propName: string, prop: any) => {
    if (!prop) {
      throw new Error(`${propName} cannot be falsy`)
    }
  },
}

export {
  InvaidArgumentExceptions,
}
