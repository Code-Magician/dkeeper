import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper/index";

function App() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		async function fetchNotes() {
			const data = await dkeeper.getNotes();
			setNotes(data);
		} fetchNotes();

	}, []);


	function addNote(newNote) {
		setNotes(prevNotes => {
			dkeeper.addNote(newNote.title, newNote.content);
			return [newNote, ...prevNotes];
		});
	}

	async function deleteNote(id) {
		setNotes(prevNotes => {
			dkeeper.deleteNotes(id);

			return prevNotes.filter((noteItem, index) => {
				return index !== id;
			});
		});
	}

    async function editNotes(id, title, content) {
        console.log(id + " " + title + " " + content);

        setNotes(prevNotes => {
            return prevNotes.map((noteItem, index) => {
                if(index === id) {
                    dkeeper.editNotes(id, title, content);

                    noteItem.title = title;
                    noteItem.content = content;

                    console.log(noteItem);
                }

                return noteItem;
            })
        })
    }

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onDelete={deleteNote}
                        onEdit={editNotes}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
