export const translations = {
	es: {
		description: "Daniel Guzmán — Level Designer & Technical Designer. Explorando mundos, construyendo experiencias.",
		navLabel: "Navegación principal", navProjects: "Proyectos", navAbout: "Sobre mí", languageLabel: "Idioma", themeSwitch: "Usar fondo claro",
		portfolioLabel: "GAME DEVELOPMENT PORTFOLIO", avatarLabel: "Girar el avatar para ver la otra cara",
		role: "DESARROLLADOR DE VIDEOJUEGOS", intro: "Me enfoco en crear niveles que combinan exploración, composición visual y mecánicas de juego, transformando ideas en espacios interactivos con propósito.",
		heroInvitation: "¿Quieres conocer más sobre mi trabajo? Sigue explorando.", viewProjects: "Ver proyectos", available: "AVAILABLE FOR OPPORTUNITIES",
		sectionProjects: "01 / SELECTED WORK", projectsTitle: "Proyectos", projectsSubtitle: "Los mundos que he ayudado a construir.",
		galleryHint: "DESLIZA PARA EXPLORAR", galleryLeft: "Desplazar proyectos hacia la izquierda", galleryRight: "Desplazar proyectos hacia la derecha", projectGallery: "Galería horizontal de proyectos",
		projectCard0: "Abrir ficha del proyecto BUNRAKU", projectCard1: "Abrir ficha de The Librarian's Curse", projectCard2: "Abrir ficha de Totally normal 2d game",
		projectNote0: "Brawler multijugador · Hasta 8 jugadores", projectNote1: "Game jam · ATRAPADO EN UN BUCLE", projectNote2: "Game jam · TWO WORLDS",
		closeProject: "Cerrar ficha del proyecto", projectMedia: "Espacio reservado para imagen o video del proyecto", mediaPlaceholder: "Reemplaza este bloque con una imagen o video",
		projectOverview: "PROJECT OVERVIEW", myContribution: "MI PARTICIPACIÓN", viewProject: "Ver proyecto", previous: "← Anterior", next: "Siguiente →",
		sectionAbout: "02 / THE CREATOR", aboutTitle: "Diseñar espacios.<br /><span>Crear experiencias.</span>", profileTitle: "Perfil profesional",
		profileParagraph1: "Como desarrollador de videojuegos formado en el SENA y en el bootcamp de Unity de Generation, he tenido la oportunidad de trabajar tanto en estudios independientes como en Efecto Studios. Me especializo en dar forma a espacios jugables, abarcando desde los primeros blockouts hasta la integración de assets y pruebas de jugabilidad.",
		profileParagraph2: "Lo que más disfruto es el proceso creativo de iterar un nivel hasta que se sienta intuitivo, vivo y atractivo para quien lo juega. Aunque mi fuerte está en el diseño técnico de niveles, conservo una mentalidad generalista que me permite apoyar en distintas áreas del desarrollo según lo que requiera el proyecto.",
		capabilities: "CAPACIDADES", skills: "Skills", skillLevelDesign: "Diseño de niveles", skill1: "Blockout y Greyboxing", skill2: "Narrativa ambiental", skill3: "Pacing y flujo espacial", skill4: "Diseño de encuentros", skill5: "Playtesting e iteración", skill6: "Documentación (LDD)", skillDebug: "Debugging en motor",
		tools: "Herramientas", technicalSkills: "Habilidades técnicas", skillQa: "QA y reporte de bugs", skillPrototype: "Prototipado de mecánicas", contactAndCv: "CONTACTO Y CV", links: "Enlaces",
		visitProfile: "Visita mi perfil ↗", email: "Correo electrónico", resume: "Currículum", downloadResume: "Descargar CV (PDF) ↓", footerTagline: "Diseñado con intención. Construido para explorar."
	},
	en: {
		description: "Daniel Guzmán — Level Designer & Technical Designer. Exploring worlds, building experiences.",
		navLabel: "Main navigation", navProjects: "Projects", navAbout: "About me", languageLabel: "Language", themeSwitch: "Use light background",
		portfolioLabel: "GAME DEVELOPMENT PORTFOLIO", avatarLabel: "Flip the avatar to see the other side",
		role: "GAME DEVELOPER", intro: "I focus on creating levels that combine exploration, visual composition, and gameplay mechanics, turning ideas into purposeful interactive spaces.",
		heroInvitation: "Want to learn more about my work? Keep exploring.", viewProjects: "View projects", available: "AVAILABLE FOR OPPORTUNITIES",
		sectionProjects: "01 / SELECTED WORK", projectsTitle: "Projects", projectsSubtitle: "Worlds I've helped build.",
		galleryHint: "SCROLL TO EXPLORE", galleryLeft: "Scroll projects to the left", galleryRight: "Scroll projects to the right", projectGallery: "Horizontal project gallery",
		projectCard0: "Open BUNRAKU project details", projectCard1: "Open The Librarian's Curse details", projectCard2: "Open Totally normal 2d game details",
		projectNote0: "Multiplayer brawler · Up to 8 players", projectNote1: "Game jam · TRAPPED IN A LOOP", projectNote2: "Game jam · TWO WORLDS",
		closeProject: "Close project details", projectMedia: "Placeholder for project image or video", mediaPlaceholder: "Replace this block with an image or video",
		projectOverview: "PROJECT OVERVIEW", myContribution: "MY CONTRIBUTION", viewProject: "View project", previous: "← Previous", next: "Next →",
		sectionAbout: "02 / THE CREATOR", aboutTitle: "Designing spaces.<br /><span>Creating experiences.</span>", profileTitle: "Professional profile",
		profileParagraph1: "As a game developer trained at SENA and in Generation's Unity bootcamp, I've had the opportunity to work with both independent studios and Efecto Studios. I specialize in shaping playable spaces, from early blockouts through asset integration and playtesting.",
		profileParagraph2: "What I enjoy most is iterating on a level until it feels intuitive, alive, and engaging to play. While my strength is technical level design, I bring a generalist mindset that lets me support different areas of development as a project needs.",
		capabilities: "CAPABILITIES", skills: "Skills", skillLevelDesign: "Level design", skill1: "Blockout and greyboxing", skill2: "Environmental storytelling", skill3: "Pacing and spatial flow", skill4: "Encounter design", skill5: "Playtesting and iteration", skill6: "Documentation (LDD)", skillDebug: "In-engine debugging",
		tools: "Tools", technicalSkills: "Technical skills", skillQa: "QA and bug reporting", skillPrototype: "Gameplay prototyping", contactAndCv: "CONTACT & RESUME", links: "Links",
		visitProfile: "Visit my profile ↗", email: "Email", resume: "Resume", downloadResume: "Download resume (PDF) ↓", footerTagline: "Designed with intent. Built to explore."
	}
} as const;

export type Language = keyof typeof translations;
