import type { Principal } from '@dfinity/principal';
export interface Note { 'title' : string, 'content' : string }
export interface _SERVICE {
  'addNote' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'deleteNotes' : (arg_0: bigint) => Promise<undefined>,
  'editNotes' : (arg_0: bigint, arg_1: string, arg_2: string) => Promise<
      undefined
    >,
  'getNotes' : () => Promise<Array<Note>>,
}
