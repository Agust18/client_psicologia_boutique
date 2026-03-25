# Atelier Medical Landing Page

Proyecto Astro para la landing page de Atelier Medical, una consultora integral e interdisciplinaria.

## Características

- **Framework**: Astro para rendimiento óptimo
- **Estilos**: Tailwind CSS con configuración personalizada
- **Modular**: Componentes separados por responsabilidad (SOLID)
- **SEO**: Meta tags optimizados
- **Optimización**: Imágenes con lazy loading
- **Escalable**: Estructura de carpetas clara para futuras expansiones

## Estructura del Proyecto

```
src/
├── components/
│   ├── NavBar.astro
│   ├── HeroSection.astro
│   ├── AboutSection.astro
│   ├── LeadershipSection.astro
│   ├── BoutiquePhilosophySection.astro
│   ├── AreasInterventionSection.astro
│   ├── FeaturedInterventionsSection.astro
│   ├── OrganizationalPsychologySection.astro
│   ├── ContactSection.astro
│   └── Footer.astro
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Instalación y Uso

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Construir para producción:
   ```bash
   npm run build
   ```

4. Vista previa de producción:
   ```bash
   npm run preview
   ```

## Principios SOLID

- **Single Responsibility**: Cada componente maneja una sola sección
- **Open-Closed**: Componentes extensibles sin modificar código existente
- **Liskov Substitution**: Componentes intercambiables
- **Interface Segregation**: Interfaces minimalistas
- **Dependency Inversion**: Dependencias abstractas

## SEO y Optimización

- Meta tags en BaseLayout
- Fuentes optimizadas con preload
- Imágenes con lazy loading
- Estructura semántica HTML

## Escalabilidad

- Componentes reutilizables
- Configuración centralizada de estilos
- Estructura modular para agregar nuevas secciones
