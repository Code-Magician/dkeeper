import Text "mo:base/Text";
import List "mo:base/List";
import Nat "mo:base/Nat";

actor DKeeper {
  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func addNote(titleTxt:Text, contentTxt:Text) {
    let newNote: Note = {
      title= titleTxt;
      content= contentTxt;
    };

    notes := List.push(newNote, notes);
  };

  public query func getNotes() : async [Note] {
    return List.toArray<Note>(notes);
  };

  public func deleteNotes(idx: Nat) {
    let tempList = List.take(notes, idx);
    notes := List.append<Note>(tempList, List.drop(notes, idx+1));
  }
};
