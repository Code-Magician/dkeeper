export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({ 'title' : IDL.Text, 'content' : IDL.Text });
  return IDL.Service({
    'addNote' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'deleteNotes' : IDL.Func([IDL.Nat], [], ['oneway']),
    'editNotes' : IDL.Func([IDL.Nat, IDL.Text, IDL.Text], [], ['oneway']),
    'getNotes' : IDL.Func([], [IDL.Vec(Note)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
