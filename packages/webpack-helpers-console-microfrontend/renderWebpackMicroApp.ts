
export default function renderWebpackMicroApp (
  mount: () => void,
  unmount: () => void,
  bootstrap: () => void
) {
  return {
    mount,
    unmount,
    bootstrap
  }
}