import { StaticImageData } from 'next/image'
import thumBiblio from '../picture/works/biblio1.png'
export type WorkType = {
  id: string
  title: string
  year?: string
  description: string
  platform?: string
  stack?: string
  source?: string
  thumbnail?: string | StaticImageData
  images?: (string | StaticImageData)[]
  features?: string[]
}
export const works: WorkType[] = [
  {
    id: "sistema-asistencia",
    title: "LibraryPy",
    year: "2024",
    description: "Software de escritorio para la gestión de bibliotecas en Bolivia, que permite registrar lectore y libros, gestionar préstamos y devoluciones de libros, y generar reportes en PDF.",
    platform: "Escritorio",
    stack: "Python, Qt Designer, MySQL",
    source: "https://github.com/ARCANIK78/LibraryPy--Sistema-de-gestion-de-biblioteca.git",
    thumbnail: thumBiblio, 
    images: [
      "/picture/bibliopy/biblio1.png",
      "/picture/bibliopy/biblio2.png",
      "/picture/bibliopy/biblio3.png",
      "/picture/bibliopy/biblio4.png"
    ]
  }
]