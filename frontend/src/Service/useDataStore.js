import { create } from 'zustand'
import axios from 'axios'

const useDataStore = create((set) => ({
  alunos: [],
  professores: [],
  turmas: [],

  // Funções para carregar dados
  carregarAlunos: async () => {
    const res = await axios.get('/data/alunos.json')
    set({ alunos: res.data })
  },
  carregarProfessores: async () => {
    const res = await axios.get('/data/professores.json')
    set({ professores: res.data })
  },
  carregarTurmas: async () => {
    const res = await axios.get('/data/turmas.json')
    set({ turmas: res.data })
  },

  // Você pode adicionar setters diretos também
  setAlunos: (alunos) => set({ alunos }),
  setProfessores: (professores) => set({ professores }),
  setTurmas: (turmas) => set({ turmas }),
}))

export default useDataStore