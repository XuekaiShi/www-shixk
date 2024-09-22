import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { ListCategory } from '../types/list.d'



export const useListStore = defineStore('list', () => {
  const ListState = ref(ListCategory.All)
  return { ListState }
})