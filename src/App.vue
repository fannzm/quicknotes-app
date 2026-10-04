<script setup>
import { ref } from 'vue'

// 1. Unsere Logik laden 
import { useNotes } from './composables/useNotes.js'

// 2. Unsere UI-Komponenten laden 
import SearchBar from './components/SearchBar.vue'
import NoteForm from './components/NoteForm.vue'
import NoteCard from './components/NoteCard.vue'

// 3. Logik aktivieren
const { addNote, deleteNote, filteredNotes } = useNotes()

// 4. Den Suchtext definieren und an unsere Filter-Funktion übergeben
const suchText = ref('')
const angezeigteNotizen = filteredNotes(suchText)
</script>

<template>
  <main class="app-container">
    <h1>QuickNotes</h1>
    
    <!-- Suchleiste: Ist über v-model mit 'suchText' verbunden (Thema C) -->
    <SearchBar v-model="suchText" />
    
    <!-- Formular: Wenn das Event 'add' gefeuert wird, rufen wir addNote auf -->
    <NoteForm @add="addNote" />

    <!-- Notizen-Liste -->
    <div class="notes-list">
      <p v-if="angezeigteNotizen.length === 0" class="empty-state">
        Keine Notizen gefunden. Leg doch eine an!
      </p>
      
      <!-- Wir iterieren über die gefilterten Notizen -->
      <!-- Wenn die Karte das Event 'delete' feuert, rufen wir deleteNote auf (Thema C) -->
      <NoteCard 
        v-for="note in angezeigteNotizen" 
        :key="note.id" 
        :note="note" 
        @delete="deleteNote" 
      />
    </div>
  </main>
</template>

<style>
/* Ein bisschen Styling, damit die App hübsch aussieht */
body {
  background-color: #f0f2f5;
  margin: 0;
}
.app-container {
  max-width: 600px;
  margin: 40px auto;
  font-family: sans-serif;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
h1 {
  text-align: center;
  color: #333;
}
.empty-state {
  text-align: center;
  color: #888;
  font-style: italic;
  margin-top: 20px;
}
.notes-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>