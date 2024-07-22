import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Caracteristicas", href: "#" },
  { label: "Flujo de trabajo", href: "#" },
  { label: "Precios", href: "#" },
  { label: "Testimonios", href: "#" },
];

export const testimonials = [
  {
    user: "Jorge Cabrera",
    company: "Stellar Soluciones",
    image: user1,
    text: "Estoy extremadamente satisfecho con los servicios prestados. El equipo fue receptivo, profesional y obtuvo resultados que superaron mis expectativas.",
  },
  {
    user: "Andrea Santamarina",
    company: "Patagonia Tech",
    image: user2,
    text: "No podría estar más feliz con el resultado de nuestro proyecto. La creatividad y las habilidades de resolución de problemas del equipo fueron fundamentales para hacer realidad nuestra visión.",
  },
  {
    user: "David Gancedo",
    company: "Quantum Innovaciones",
    image: user3,
    text: "Trabajar con esta empresa fue un placer. Su atención al detalle y compromiso con la excelencia son encomiables. Se los recomendaría a cualquiera que busque un servicio de primer nivel..",
  },
  {
    user: "Rodolfo Ledesma",
    company: "Fusion Dynamics",
    image: user4,
    text: "Trabajar con el equipo de Codigo 9420 fue un punto de inflexión para nuestro proyecto. Su atención al detalle y sus soluciones innovadoras nos ayudaron a alcanzar nuestros objetivos más rápido de lo que creíamos posible. ¡Estamos agradecidos por su experiencia y profesionalismo!",
  },
  {
    user: "Miguel Gonzalez Garcia",
    company: "Visionary Creations",
    image: user5,
    text: "Estoy sorprendido por el nivel de profesionalismo y dedicación mostrado por el equipo. Pudieron superar nuestras expectativas y ofrecer resultados sobresalientes.",
  },
  {
    user: "Emilia Montenegro",
    company: "Synergy Sistemas SA",
    image: user6,
    text: "El equipo hizo todo lo posible para garantizar que nuestro proyecto fuera un éxito. Su experiencia y dedicación son incomparables. Espero volver a trabajar con ellos en el futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Arrastrar y Soltar",
    description:
      "Diseñe y organice fácilmente sus entornos de realidad virtual con una interfaz fácil de usar de arrastrar y soltar.",
  },
  {
    icon: <Fingerprint />,
    text: "Multiplataforma",
    description:
      "Cree aplicaciones de realidad virtual que se ejecuten sin problemas en múltiples plataformas, incluidos dispositivos móviles, de escritorio y auriculares de realidad virtual.",
  },
  {
    icon: <ShieldHalf />,
    text: "Plantillas Integradas",
    description:
      "Impulsa tus proyectos de realidad virtual con una variedad de plantillas integradas para diferentes tipos de aplicaciones y entornos.",
  },
  {
    icon: <BatteryCharging />,
    text: "Vista previa en tiempo real",
    description:
      "Obtenga una vista previa de su aplicación de realidad virtual en tiempo real a medida que realiza cambios, lo que permite iteraciones y ajustes rápidos.",
  },
  {
    icon: <PlugZap />,
    text: "Herramientas de Colaboración",
    description:
      "Trabaje junto con su equipo en tiempo real en proyectos de realidad virtual, lo que permitirá una colaboración fluida y el intercambio de ideas.",
  },
  {
    icon: <GlobeLock />,
    text: "Panel de Analisis",
    description:
      "Obtenga información valiosa sobre las interacciones y el comportamiento de los usuarios dentro de sus aplicaciones de realidad virtual con un panel de análisis integrado.",
  },
];

export const checklistItems = [
  {
    title: "Combinación de código simplificada",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento del usuario.",
  },
  {
    title: "Revisa el código sin preocupaciones",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento del usuario.",
  },
  {
    title: "Asistencia de IA para reducir el tiempo",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento del usuario.",
  },
  {
    title: "Comparte trabajo en minutos",
    description:
      "Realice un seguimiento del rendimiento de sus aplicaciones de realidad virtual y obtenga información sobre el comportamiento del usuario.",
  },
];

export const pricingOptions = [
  {
    title: "Gratis",
    price: "$0",
    features: [
      "Compartir tablero privado",
      "5 Gb Almacenamiento",
      "Analisis de red",
      "Modo privado",
    ],
  },
  {
    title: "Pro",
    price: "u$d 10",
    features: [
      "Compartir tablero privado",
      "10 Gb Almacenamiento",
      "Analisis de red (Avanzado)",
      "Modo privado",
    ],
  },
  {
    title: "Empresas",
    price: "u$d 200",
    features: [
      "Compartir tablero privado",
      "Sin limite de almacenamiento",
      "Red de alto rendimiento",
      "Modo privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Comience ahora" },
  { href: "#", text: "Documentación" },
  { href: "#", text: "Tutoriales" },
  { href: "#", text: "API" },
  { href: "#", text: "Foro de la comunidad" },
];

export const platformLinks = [
  { href: "#", text: "Caracteristicas" },
  { href: "#", text: "Dispositivos soportados" },
  { href: "#", text: "Requerimientos de sistema" },
  { href: "#", text: "Descargas" },
  { href: "#", text: "Notas de lanzamiento" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Reuniones" },
  { href: "#", text: "Conferencias" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Trabajo" },
];
