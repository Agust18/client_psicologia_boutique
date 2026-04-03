export interface Profesional {
  id: string;
  nombre: string;
  titulo: string;
  alt: string;
  bullets: string[];
  bio: string;
  formacion: string[];
  whatsapp: string;
  email: string;
}

export const equipo: Profesional[] = [
  {
    id: "demian",
    nombre: "Dr. Demian Czerwonko",
    titulo: "Médico Clínico Intensivista",
    alt: "Dr. Demian Czerwonko, Médico Clínico Intensivista",
    bullets: [
      "Especialista en Medicina Interna y Cuidados Críticos.",
      "Más de 15 años de experiencia en gestión de paciente crítico.",
      "Coordinador de Terapia Intensiva en Atelier Medical.",
    ],
    bio: "[PENDIENTE]",
    formacion: ["[PENDIENTE]", "[PENDIENTE]"],
    whatsapp: "5491100000000",
    email: "placeholder@email.com",
  },
  {
    id: "sebastian",
    nombre: "Dr. Sebastián Riboldi",
    titulo: "Médico Psiquiatra",
    alt: "Dr. Sebastián Riboldi, Médico Psiquiatra",
    bullets: [
      "Médico Psiquiatra con enfoque sistémico.",
      "Experto en estabilización farmacológica de cuadros complejos.",
      "Dirección de dispositivos clínicos residenciales.",
    ],
    bio: "[PENDIENTE]",
    formacion: ["[PENDIENTE]", "[PENDIENTE]"],
    whatsapp: "5491100000001",
    email: "placeholder@email.com",
  },
  {
    id: "diego",
    nombre: "Lic. Diego Tripelli",
    titulo: "Psicólogo Clínico · TCC",
    alt: "Lic. Diego Tripelli, Psicólogo Clínico",
    bullets: [
      "Psicólogo Clínico — Terapia Cognitivo Conductual.",
      "Abordaje de cuadros refractarios y desestabilización aguda.",
      "Evaluación neurocognitiva y neuropsicológica.",
    ],
    bio: "[PENDIENTE]",
    formacion: ["[PENDIENTE]", "[PENDIENTE]"],
    whatsapp: "5491100000002",
    email: "placeholder@email.com",
  },
];