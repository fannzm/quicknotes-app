<script setup>
import { ref } from 'vue'

//Das Formular speichert nicht selbst,
// es schickt die fertigen Daten per Event ('add') nach oben an die App.vue.
const emit = defineEmits(['add'])

// Die reaktiven Variablen für unsere Eingabefelder
const title = ref('')
const content = ref('')
const tagsInput = ref('')

function submitNote() {
  // Sicherheitscheck: Nichts tun, wenn Titel oder Text leer sind
  if (!title.value.trim() || !content.value.trim()) return

  // Tags aus dem Textfeld in ein sauberes Array umwandeln
  const tagsArray = tagsInput.value
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag.length > 0)

  // Die fertige Notiz nach oben schicken (die ID vergibt später useNotes)
  emit('add', {
    title: title.value,
    content: content.value,
    tags: tagsArray
  })

  // Formular danach wieder leeren
  title.value = ''
  content.value = ''
  tagsInput.value = ''
}
</script>

<template>
  <!-- @submit.prevent verhindert, dass die Seite beim Klick auf Speichern neu lädt -->
  <form class="note-form" @submit.prevent="submitNote">
    <h3>Neue Notiz anlegen</h3>
    
    <input v-model="title" placeholder="Titel" required />
    <textarea v-model="content" placeholder="Inhalt..." required rows="3"></textarea>
    <input v-model="tagsInput" placeholder="Tags (kommagetrennt, z.B. uni, sport)" />
    
    <button type="submit">Speichern</button>
  </form>
</template>

<style scoped>
.note-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>