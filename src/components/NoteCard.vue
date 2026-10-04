<script setup lang="ts">
// Wir importieren dein TypeScript-Interface und die BaseCard
import type { Note } from '../types/note'
import BaseCard from './BaseCard.vue'

// Prop: Die Komponente erwartet von außen exakt eine Notiz
defineProps<{
  note: Note
}>()

// Emit: Ein-Weg-Datenfluss! Die Karte löscht nicht selbst, sie "ruft" nur nach oben
const emit = defineEmits(['delete'])
</script>

<template>
  <BaseCard>
    <!-- Dieser Bereich wird in den <slot name="header" /> der BaseCard gepumpt -->
    <template #header>
      <div class="note-header">
        <h3 style="margin: 0;">{{ note.title }}</h3>
        <button @click="emit('delete', note.id)">Löschen</button>
      </div>
    </template>

    <!-- Alles hier unten landet automatisch im Default-<slot /> der BaseCard -->
    <p>{{ note.content }}</p>
    
    <div style="display: flex; gap: 8px; margin-top: 10px;">
      <span 
        v-for="tag in note.tags" 
        :key="tag" 
        style="background: #e0e0e0; padding: 2px 8px; border-radius: 12px; font-size: 0.8em;"
      >
        #{{ tag }}
      </span>
    </div>
  </BaseCard>
</template>

<style scoped>
.note-header {
  display: flex; 
  justify-content: space-between; 
  align-items: center;
}
button {
  background: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>