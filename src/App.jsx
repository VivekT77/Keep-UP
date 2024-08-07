import NotesPage from "./pages/notespage";
import NotesProvider from "./context/NoteContext";

 
function App() {
    return (
        <div id = "app">
            <NotesProvider>
                <NotesPage />
            </NotesProvider>
        </div>
    );
}

export default App