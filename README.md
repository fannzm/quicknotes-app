QucikNotes App

A simple App to add, delete and tag notes.

##Setup

Install the dependencies: Node.js npm available with Node.js

Installation: Download/Clone the project. Navigate to project directory:

cd <project-folder>

Install the prject dependencies:

npm install

Run application: start the development server with:
npm run dev

The terminal will dislay a local URL where the application is available. Open the URL in your browser.

How to use: Create notes by filling in the title, description and an optional tag (seperated by commas) in the form. Click to save and add to your notes. 
Notes can be filtered by titel, description or tag.
Click the delete button on any note card to remove it from the list. 
All notes are automatically saved to your browser's local starage. 

Project structure:
App.vue: Acts as the central layout manager, importing and connecting all components and composables.

components/: Contains the UI elements (NoteForm.vue for creating notes, SearchBar.vue with custom v-model for filtering, NoteCard.vue using slots via BaseCard.vue).

composables/: Houses the reactive logic (useNotes.js for adding, filtering, and deleting notes) and persistence (useLocalStorage.js).

types/: Contains the TypeScript interface (note.ts) for strict typing of notes.

Reflection questions:
Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?
Eine Kindkomponente wie NoteCard darf ihre empfangenen Props nicht direkt manipulieren (z. B. props.note.remove()), da dies den Datenfluss unübersichtlich macht und Fehler extrem schwer nachvollziehbar wären. Stattdessen löst die Komponente über emit ein Event aus, das an die App.vue weitergereicht wird. Die App.vue ruft daraufhin die eigentliche Löschfunktion im Composable (useNotes.js) auf, wo die Änderung zentral und kontrolliert durchgeführt wird.

Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen — teilen sie sich die Notizen oder nicht? Begründet kurz.
Sie teilen sich die Notizen nicht (jeder bekommt eine eigene, leere Liste). Das liegt daran, dass Variablen wie const notes = ref([]) innerhalb der Funktion export function useNotes() definiert sind. Bei jedem Aufruf der Funktion wird dieser Code neu ausgeführt und ein komplett neues, unabhängiges Array erstellt. Um Daten zu teilen (Global State), müsste das ref außerhalb der Funktion deklariert werden. Jedes Mal, wenn eine Komponente useNotes() aufruft, wird der Code in dieser Funktion komplett frisch ausgeführt. Es wird also ein brandneues, eigenes notes-Array im Arbeitsspeicher erstellt.

Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
Der Code würde als reines JavaScript zwar laufen, aber das TypeScript-Interface dient als Bauplan. Es zwingt, exakt die richtigen Datentypen (z.B. id als Zahl, title als Text) zu verwenden. Dadurch gibt es eine bessere Autovervollständigung und der Editor warnt sofort vor Fehlern, noch bevor wir die App im Browser starten.