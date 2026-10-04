import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'
 
export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])
 
  function addNote(note) {
    // TODO: neue Notiz mit eigener id an die Liste hängen
    notes.value.push({
      ...note,
      id: Date.now()
    })
  }
 
  function deleteNote(id) {
    // TODO: Notiz mit dieser id entfernen
    notes.value = notes.value.filter(n => n.id !== id)
  }
 
  function filteredNotes(searchTerm) {
    // TODO: nach Titel, Text oder Tag filtern
    return computed(() => {
      // Wenn das Suchfeld leer ist, zeige einfach alle Notizen
      if (!searchTerm.value) return notes.value
      
      const term = searchTerm.value.toLowerCase()
      
      // Filtere nach Titel, Textinhalt oder einem passenden Tag
      return notes.value.filter(n => 
        n.title.toLowerCase().includes(term) ||
        n.content.toLowerCase().includes(term) ||
        n.tags.some(tag => tag.toLowerCase().includes(term))
      )
    })
  }
  
  return { notes, addNote, deleteNote, filteredNotes }
}
