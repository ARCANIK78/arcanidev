import { StaticImageData } from 'next/image'
import thumBiblio from '../picture/works/biblio1.png'
import hogar from '../picture/works/tu-hogar-ideal.png'
import horro from '../picture/works/horro.png'
import repocapy from '../picture/works/repocapy1.png'
import asistens from '../picture/works/asistens.png'
export type WorkType = {
  id: string
  title: string
  year?: string
  description: string
  platform?: string
  stack?: string
  source?: string[]
  thumbnail?: string | StaticImageData
  images?: (string | StaticImageData)[]
  features?: string[]
}
export const works: WorkType[] = [
  {
  id: "1",
  title: "Multiplatform Attendance Control System",
  year: "2025",
  description: "Attendance Management is a multi-platform system that facilitates staff management through a web-based dashboard for registering, editing, and deleting employees, generating unique QR codes for each user, controlling entry and exit times, viewing attendance, and generating PDF reports. It also includes a desktop application that allows attendance to be recorded by scanning each employee's QR code, and a documented API with Swagger that exposes the services necessary for communication between components. This solution improves the accuracy and efficiency of attendance control in companies, reducing errors and facilitating real-time tracking.",
  platform: "desktop, web system",
  stack: "ASP.NET MVC, Swagger (Swashbuckle), WPF, Razor, Bootstrap, Microsoft SQL Server, Git, GitHub",
  source: [
    "https://github.com/ARCANIK78/appAsistencia.git",
    "https://github.com/ARCANIK78/Web_Services-Asistens",
    "https://github.com/ARCANIK78/appWebAdminAsistens.git ",
  ], 
  thumbnail: asistens,
  images: [
    "/picture/Asistens/Captura1.JPG",
    "/picture/Asistens/Captura2.JPG",
    "/picture/Asistens/Captura3.JPG",
    "/picture/Asistens/Captura4.JPG",
    "/picture/Asistens/Captura5.JPG",
    "/picture/Asistens/Captura6.JPG",
    "/picture/Asistens/Captura.JPG",
  ]
},
  {
    id: "2",
    title: "ReportCapy",
    year: "2024",
    description: "Mobile app that allows users to report potholes in the streets of Trinidad by submitting photos and location data.",
    platform: "Mobile",
    stack: "Kotlin, Firebase",
    source:[ "null"],
    thumbnail: repocapy, 
    images: [
      "/picture/repocapy/WhatsApp Image 2025-08-09 at 2.32.34 PM.jpeg",
      "/picture/repocapy/WhatsApp Image 2025-08-09 at 2.32.34 PM(1).jpeg"
    ]
  },
  {
    id: "3",
    title: "Cinema Landing Page",
    year: "2023",
    description: "A Halloween-themed landing page created for a local cinema in Trinidad to promote a seasonal offer.",
    platform: "Web",
    stack: "HTML, CSS (Tailwind), JavaScript",
    source: ["null"],
    thumbnail: horro, 
    images: [
      "/picture/horror/Captura desde 2025-08-09 09-21-59.png",
      "/picture/horror/Captura desde 2025-08-09 09-22-17.png",
      "/picture/horror/Captura desde 2025-08-09 09-22-33.png"
    ]
  },
  {
    id: "4",
    title: "LibraryPy",
    year: "2024",
    description: "Desktop software for library management in Bolivia. It allows registering readers and books, managing book loans and returns, and generating PDF reports.",
    platform: "Desktop",
    stack: "Python, Qt Designer, MySQL",
    source: ["https://github.com/ARCANIK78/LibraryPy--Sistema-de-gestion-de-biblioteca.git"],
    thumbnail: thumBiblio, 
    images: [
      "/picture/bibliopy/biblio1.png",
      "/picture/bibliopy/biblio2.png",
      "/picture/bibliopy/biblio3.png",
      "/picture/bibliopy/biblio4.png"
    ]
  },
  {
    id: "5",
    title: "TuHogarIdeal",
    year: "2023",
    description: "Web platform for finding and browsing real estate listings, with a focus on houses.",
    platform: "Web",
    stack: "React, Material UI, MongoDB, Node.js (Express)",
    source: ["null"],
    thumbnail: hogar, 
    images: [
      "/picture/hogarIdeal/Captura4.JPG",
      "/picture/hogarIdeal/tu-hogar-ideal.JPG",
      "/picture/hogarIdeal/tu-hogar-ideal3.JPG",
      "/picture/hogarIdeal/tu-hogar-ideal2.JPG"
    ]
  },
]