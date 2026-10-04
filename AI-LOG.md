Prompt: "Generiere das Grundgerüst für NoteCard und NoteForm"
Übernommen: Die Nutzung von defineProps, defineEmits und das Füllen des <template #header> Slots.
Geändert/verstanden: Verstanden, dass die Komponenten die Notizen nicht selbst speichern oder löschen, sondern die Daten strikt per Event (emit) an die App zurückgeben.

Prompt: "Verbessere/ ergänze meine Logik für die TODOs in useNotes.js und erkläre die Syntax"
Übernommen: Die Funktionen zum Hinzufügen, Löschen und Filtern der Notizen verbessert und ergänzt.
Geändert/verstanden: Durch gezielte Nachfrage den Spread-Operator (...note). Zudem das Konzept von localStorage als dauerhaften Textspeicher verinnerlicht. Logik und Syntax. 

Prompt: "Der Browser zeigt nach dem Starten nur noch einen weißen Bildschirm."
Übernommen: Die Korrektur des Namenskonflikts (useNote / useNotes) und das Säubern der Klammern in der Composable.
Geändert/verstanden: Verstanden, dass Dateien mit der Endung .js niemals HTML- oder Vue-Tags wie <template> oder <script> enthalten dürfen, da Vite sonst abstürzt, und wie man die Browser-Konsole zum Debuggen nutzt.

Prompt: "Was ist ein v-model und warum brauche ich es in NoteForm?"
Übernommen: Die Nutzung von v-model (title, content, tagsInput) in den HTML-Input-Feldern.
Geändert/verstanden: Gelernt, dass v-model eine Zwei-Wege-Bindung ist. Es hält das Eingabefeld auf dem Bildschirm und die Variable im Code automatisch synchron.

Prompt: "Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen – teilen sie sich die Notizen oder nicht?"
Übernommen: Keine Code-Änderung, nur das theoretische Verständnis.
Geändert/verstanden: Verstanden, dass das ref innerhalb der exportierten Funktion liegt. Jedes Mal, wenn eine Komponente useNotes() aufruft, wird im Speicher ein neues, unabhängiges Notizen-Array erstellt (kein automatischer Global State).
