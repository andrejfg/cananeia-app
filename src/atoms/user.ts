import Usuario from '@/types/Usuario'
import { atom } from 'jotai'

export const userAtom = atom<Usuario | null>(null)
export const typeUserAtom = atom<number>(0)
