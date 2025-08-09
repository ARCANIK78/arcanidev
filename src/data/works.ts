import { StaticImageData } from 'next/image'
import thumBiblio from '../picture/works/biblio1.png'
import hogar from '../picture/works/tu-hogar-ideal.png'
import horro from '../picture/works/horro.png'
import repocapy from '../picture/works/repocapy1.png'

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
    id: "1",
    title: "ReportCapy",
    year: "2024",
    description: "Mobile app that allows users to report potholes in the streets of Trinidad by submitting photos and location data.",
    platform: "Mobile",
    stack: "Kotlin, Firebase",
    source: "null",
    thumbnail: repocapy, 
    images: [
      "/picture/repocapy/WhatsApp Image 2025-08-09 at 2.32.34 PM.jpeg",
      "/picture/repocapy/WhatsApp Image 2025-08-09 at 2.32.34 PM(1).jpeg"
    ]
  },
  {
    id: "2",
    title: "Cinema Landing Page",
    year: "2023",
    description: "A Halloween-themed landing page created for a local cinema in Trinidad to promote a seasonal offer.",
    platform: "Web",
    stack: "HTML, CSS (Tailwind), JavaScript",
    source: "null",
    thumbnail: horro, 
    images: [
      "/picture/horror/Captura desde 2025-08-09 09-21-59.png",
      "/picture/horror/Captura desde 2025-08-09 09-22-17.png",
      "/picture/horror/Captura desde 2025-08-09 09-22-33.png"
    ]
  },
  {
    id: "3",
    title: "LibraryPy",
    year: "2024",
    description: "Desktop software for library management in Bolivia. It allows registering readers and books, managing book loans and returns, and generating PDF reports.",
    platform: "Desktop",
    stack: "Python, Qt Designer, MySQL",
    source: "https://github.com/ARCANIK78/LibraryPy--Sistema-de-gestion-de-biblioteca.git",
    thumbnail: thumBiblio, 
    images: [
      "/picture/bibliopy/biblio1.png",
      "/picture/bibliopy/biblio2.png",
      "/picture/bibliopy/biblio3.png",
      "/picture/bibliopy/biblio4.png"
    ]
  },
  {
    id: "4",
    title: "TuHogarIdeal",
    year: "2023",
    description: "Web platform for finding and browsing real estate listings, with a focus on houses.",
    platform: "Web",
    stack: "React, Material UI, MongoDB, Node.js (Express)",
    source: "null",
    thumbnail: hogar, 
    images: [
      "/picture/hogarIdeal/Captura4.JPG",
      "/picture/hogarIdeal/tu-hogar-ideal.JPG",
      "/picture/hogarIdeal/tu-hogar-ideal3.JPG",
      "/picture/hogarIdeal/tu-hogar-ideal2.JPG"
    ]
  },
]