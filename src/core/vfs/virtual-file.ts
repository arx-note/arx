// TODO: Choose a better name
//       I personally do not like names with project's prefix.
//       However, I want to create something like fs for ArxWiki.
//       Project will have arx:// protocol for imports.
export type VirtualFile = {
  name: string
  blob: Blob
}
