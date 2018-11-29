exports.flatten = (items, { prototype: { concat } } = Array) => {
  return concat.apply([], items)
}
