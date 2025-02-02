import { VirtualFile } from '#/core/vfs/virtual-file.ts'

export abstract class Storage {
  protected constructor() {}

  abstract findDocumentOrNull(name: string): Promise<VirtualFile | null>

  abstract listDocuments(): Promise<VirtualFile[]>
}
