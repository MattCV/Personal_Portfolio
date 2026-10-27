'use client';

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react';

export type Language = 'en' | 'es';

const en = {
  nav: {
    ariaLabel: 'Main navigation',
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    contact: 'Contact',
    logo: 'Personal Shark Logo',
    available: 'AVAILABLE',
    chooseLanguage: 'Choose language',
    english: 'English',
    spanish: 'Spanish',
  },
  hero: {
    title: 'FULL STACK DEVELOPER',
    subtitle: 'Specialized in Frontend',
    description:
      'Passionate about creating seamless digital experiences. Connecting modern interfaces with robust backend logic and strong databases.',
    scroll: 'Scroll',
    dragToRotate: 'Drag to rotate',
  },
  about: {
    title: 'About Me',
    description:
      'Tenth-semester Software Engineering student at Institución Universitaria Pascual Bravo, with a professional focus oriented towards Full-Stack development and Data Analysis. Highly structured, autonomous, and goal-driven, combining solid front-end expertise (React, Next.js, TypeScript, Tailwind) with analytical skills in databases and Python. Passionate about transforming real world problems into clean, scalable digital solutions while applying agile methodologies and rigorous time management. Currently seeking a professional internship opportunity (Period 2027-1).',
    experience: 'Experience',
    warehouseRole: 'Warehouse Assistant',
    warehouseDate: 'Dec 2025 – Jan 2026',
    warehouseDescription:
      'Managed inventory control, receiving, sorting, and dispatching of goods, ensuring accuracy and organization across logistics workflows during the high-demand holiday season. Strengthened adaptability, time management under pressure, and cross-functional collaboration.',
    holidayRole: 'Holiday Plan Assistant',
    holidayDate: 'Dec 2024 – Jan 2025',
    holidayDescription:
      'Regulated and monitored commercial activities in high-traffic urban areas, ensuring compliance with municipal regulations during peak seasonal periods. Strengthened assertive communication, patience, and conflict-resolution skills in complex, high-demand public environments.',
    studies: 'Studies',
    degree: 'Software Engineering',
    semester: '10th semester',
    degreeDescription: 'Focus on full-stack web development, data analysis, and software architecture.',
    highSchool: 'Technical High School Degree in Informatics',
    completed: 'Completed 2021',
    highSchoolDescription: 'Technical program in partnership with I.U. Pascual Bravo.',
    present: 'PRESENT',
  },
  projects: {
    eyebrow: 'Selected work',
    title: 'Projects',
    technologyStack: 'Technology stack',
    pages: 'Project pages',
    previous: 'Previous projects',
    next: 'Next projects',
    page: 'PAGE',
    cards: [
      {
        name: 'KineticLab',
        subtitle: 'Interactive Performance Platform',
        role: 'FRONTEND APP',
        category: 'INTERACTIVE',
        status: 'IN PROGRESS',
        description:
          'An interactive training and performance platform for mouse-based motor precision (aim training) and typing agility. It prioritizes a minimal, fluid, low-latency interface to optimize user response.',
      },
      {
        name: 'Kontrox',
        subtitle: 'Personal Finance & Debt Management',
        role: 'MOBILE APP',
        category: 'FINTECH',
        status: 'CONCEPTUALIZATION',
        description:
          'A mobile app designed to streamline personal and household budgeting, track income and everyday expenses, and forecast debt repayments through a mobile-first experience.',
      },
      {
        name: 'Dekache',
        subtitle: 'Operations Management System',
        role: 'WEB APP',
        category: '',
        status: 'COMPLETED',
        description:
          'A comprehensive operations system designed to digitize a fast-food business and replace inefficient manual processes. It centralizes real-time order tracking through a dynamic four-stage board (To Do, In Progress, Completed, and Delivered), smart inventory management with automated restocking alerts, and financial reports for daily closing and profitability analysis.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    description:
      "Have a question, a proposal, or want to work together? Send me a message and I'll get back to you within 24 to 48 hours.",
    reason: 'Reason',
    reasons: {
      job: 'Job opportunity',
      freelance: 'Freelance project',
      collaboration: 'Collaboration',
      other: 'Other inquiry',
    },
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    subject: 'Subject',
    message: 'Message',
    messagePlaceholder: 'Tell me how I can help...',
    submit: 'Send message',
    sending: 'Sending...',
    subjectPrefix: 'Portfolio Contact',
    notConfigured: 'The contact form is not configured yet. Please try again later.',
    sendFailed: 'Your message could not be sent. Please try again in a few minutes.',
    connectionFailed: 'Your message could not be sent. Check your connection and try again.',
    sent:
      "Message sent successfully! 🚀 Thanks for reaching out. I've received your message and will get back to you within 24 to 48 hours.",
  },
  footer: {
    inspired: "Inspired by Vercel's interactive 3D badge concept",
    rights: 'All rights reserved.',
  },
} as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer Item)[]
    ? readonly Widen<Item>[]
    : { [Key in keyof T]: Widen<T[Key]> };

type Translation = Widen<typeof en>;

const es: Translation = {
  nav: {
    ariaLabel: 'Navegación principal',
    home: 'Inicio',
    about: 'Sobre mí',
    projects: 'Proyectos',
    contact: 'Contacto',
    logo: 'Logo personal de tiburón',
    available: 'DISPONIBLE',
    chooseLanguage: 'Elegir idioma',
    english: 'Inglés',
    spanish: 'Español',
  },
  hero: {
    title: 'DESARROLLADOR FULL STACK',
    subtitle: 'Especializado en Frontend',
    description:
      'Me apasiona crear experiencias digitales fluidas. Conecto interfaces modernas con lógica backend robusta y bases de datos sólidas.',
    scroll: 'Desliza',
    dragToRotate: 'Arrastra para girar',
  },
  about: {
    title: 'Sobre mí',
    description:
      'Estudiante de décimo semestre de Ingeniería de Software en la Institución Universitaria Pascual Bravo, con enfoque profesional en desarrollo Full Stack y análisis de datos. Soy una persona organizada, autónoma y orientada a objetivos; combino conocimientos sólidos de frontend (React, Next.js, TypeScript y Tailwind) con habilidades analíticas en bases de datos y Python. Me apasiona transformar problemas reales en soluciones digitales claras y escalables, aplicando metodologías ágiles y una gestión rigurosa del tiempo. Actualmente busco una oportunidad de práctica profesional (periodo 2027-1).',
    experience: 'Experiencia',
    warehouseRole: 'Auxiliar de bodega',
    warehouseDate: 'Dic 2025 – Ene 2026',
    warehouseDescription:
      'Gestioné el control de inventario, la recepción, clasificación y despacho de mercancía, garantizando precisión y organización en los procesos logísticos durante la temporada de alta demanda. Fortalecí mi adaptabilidad, gestión del tiempo bajo presión y colaboración entre equipos.',
    holidayRole: 'Auxiliar del Plan Navidad',
    holidayDate: 'Dic 2024 – Ene 2025',
    holidayDescription:
      'Regulé y supervisé actividades comerciales en zonas urbanas de alto flujo, verificando el cumplimiento de las normas municipales durante las temporadas de mayor actividad. Fortalecí la comunicación asertiva, la paciencia y la resolución de conflictos en entornos públicos complejos y exigentes.',
    studies: 'Formación académica',
    degree: 'Ingeniería de Software',
    semester: 'Décimo semestre',
    degreeDescription: 'Enfoque en desarrollo web full stack, análisis de datos y arquitectura de software.',
    highSchool: 'Bachiller técnico en Informática',
    completed: 'Finalizado en 2021',
    highSchoolDescription: 'Programa técnico en convenio con la I.U. Pascual Bravo.',
    present: 'ACTUALIDAD',
  },
  projects: {
    eyebrow: 'Proyectos destacados',
    title: 'Proyectos',
    technologyStack: 'Tecnologías utilizadas',
    pages: 'Páginas de proyectos',
    previous: 'Proyectos anteriores',
    next: 'Proyectos siguientes',
    page: 'PÁGINA',
    cards: [
      {
        name: 'KineticLab',
        subtitle: 'Plataforma interactiva de rendimiento',
        role: 'APLICACIÓN FRONTEND',
        category: 'INTERACTIVO',
        status: 'EN DESARROLLO',
        description:
          'Plataforma interactiva de entrenamiento y rendimiento para mejorar la precisión motriz con el mouse (entrenamiento de puntería) y la agilidad al escribir. Prioriza una interfaz minimalista, fluida y de baja latencia para optimizar la respuesta del usuario.',
      },
      {
        name: 'Kontrox',
        subtitle: 'Finanzas personales y gestión de deudas',
        role: 'APLICACIÓN MÓVIL',
        category: 'FINTECH',
        status: 'EN CONCEPTUALIZACIÓN',
        description:
          'Aplicación móvil diseñada para simplificar la planificación financiera personal y del hogar, registrar ingresos y gastos cotidianos, y proyectar pagos de deudas desde una experiencia pensada para dispositivos móviles.',
      },
      {
        name: 'Dekache',
        subtitle: 'Sistema de gestión de operaciones',
        role: 'APLICACIÓN WEB',
        category: '',
        status: 'COMPLETADO',
        description:
          'Sistema integral de operaciones que digitaliza un negocio de comida rápida y reemplaza procesos manuales ineficientes. Centraliza el seguimiento de pedidos en tiempo real mediante un tablero dinámico de cuatro etapas (Por hacer, En proceso, Completado y Entregado), la gestión inteligente de inventario con alertas automáticas de reposición y los informes financieros para el cierre diario y el análisis de rentabilidad.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    description:
      '¿Tienes una pregunta, una propuesta o te gustaría trabajar conmigo? Envíame un mensaje y te responderé en un plazo de 24 a 48 horas.',
    reason: 'Motivo',
    reasons: {
      job: 'Oportunidad laboral',
      freelance: 'Proyecto freelance',
      collaboration: 'Colaboración',
      other: 'Otra consulta',
    },
    name: 'Nombre',
    namePlaceholder: 'Tu nombre',
    email: 'Correo electrónico',
    emailPlaceholder: 'yo@ejemplo.com',
    subject: 'Asunto',
    message: 'Mensaje',
    messagePlaceholder: 'Cuéntame cómo puedo ayudarte...',
    submit: 'Enviar mensaje',
    sending: 'Enviando...',
    subjectPrefix: 'Contacto del portafolio',
    notConfigured: 'El formulario de contacto aún no está configurado. Inténtalo más tarde.',
    sendFailed: 'No se pudo enviar tu mensaje. Inténtalo de nuevo en unos minutos.',
    connectionFailed: 'No se pudo enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo.',
    sent:
      '¡Mensaje enviado correctamente! 🚀 Gracias por escribirme. Ya lo recibí y te responderé en un plazo de 24 a 48 horas.',
  },
  footer: {
    inspired: 'Inspirado en el concepto de insignia 3D interactiva de',
    rights: 'Todos los derechos reservados.',
  },
};

const translations: Record<Language, Translation> = { en, es };
const languageChangeEvent = 'portfolio-language-change';
let languageOverride: Language | null = null;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  copy: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getBrowserLanguage(): Language {
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
}

function getCurrentLanguage(): Language {
  if (languageOverride) {
    return languageOverride;
  }

  try {
    const savedLanguage = window.localStorage.getItem('portfolio-language');
    if (savedLanguage === 'en' || savedLanguage === 'es') {
      return savedLanguage;
    }
  } catch (error) {
    console.error('Unable to read the saved language preference.', error);
  }

  return getBrowserLanguage();
}

function getServerLanguage(): Language {
  return 'en';
}

function subscribeToLanguage(onChange: () => void) {
  window.addEventListener(languageChangeEvent, onChange);
  window.addEventListener('storage', onChange);

  return () => {
    window.removeEventListener(languageChangeEvent, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function updateLanguage(language: Language) {
  languageOverride = language;

  try {
    window.localStorage.setItem('portfolio-language', language);
  } catch (error) {
    console.error('Unable to save the language preference.', error);
  }

  window.dispatchEvent(new Event(languageChangeEvent));
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getCurrentLanguage,
    getServerLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: updateLanguage, copy: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}
