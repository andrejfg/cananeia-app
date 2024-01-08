import Usuario from '@/types/Usuario'
import { atom } from 'jotai'

export const userAtom = atom<Usuario | null>(null)
export const typeUserAtom = atom<number>(0)

export const ipDoServidorAtom = atom<string>('http://192.168.0.141:3000')
