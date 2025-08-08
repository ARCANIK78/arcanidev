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
    description: "Sistema de gestión de biblioteca.",
    platform: "Escritorio",
    stack: "Python,Qt Desginer, MySql, ",
    source: "https://github.com/ARCANIK78/LibraryPy--Sistema-de-gestion-de-biblioteca.git",
    thumbnail: thumBiblio, 
    images: [
      "/picture/biblio1.png",
      "/picture/biblio2.png",
      "/picture/biblio3.png",
      "/picture/biblio4.png",
    ],
    features: [
      "Registro de Lector yLibros",
      "Prestamos de Libros",
      "Devoluciones",
      "Reportes en PDF"
    ]
  }
]