document.addEventListener('DOMContentLoaded', () => {

    const traducciones = {
        es: {
            title: 'Mi Portfolio',
            meta_description: 'Portfolio de Naroa, desarrolladora multiplataforma bilingüe especializada en Java, Android, web y soluciones de software eficientes.',
            og_title: 'Mi Portfolio | Naroa',
            og_description: 'Conoce mis proyectos, habilidades y experiencia como desarrolladora multiplataforma.',
            nav_about: 'Sobre mí',
            nav_projects: 'Proyectos',
            nav_skills: 'Habilidades',
            nav_contact: 'Contacto',
            quick_cv_button: 'CV rápido',
            quick_cv_title: 'Resumen en 30 segundos',
            quick_cv_profile: 'Desarrolladora Multiplataforma bilingüe (Java, Android y Web).',
            quick_cv_stack: 'Stack principal: Java · Android Studio · HTML · CSS · JavaScript · SQL.',
            quick_cv_focus: 'Enfoque: soluciones eficientes, UI cuidada y desarrollo escalable.',
            quick_cv_contact: 'Contacto: naroamarco9@gmail.com · GitHub: @naroa0699.',
            hero_greeting: 'Bienvenido a mi portfolio',
            hero_title: 'Hola, soy<br><em>Naroa</em>',
            hero_cta: 'Ver mis proyectos',
            hero_metric_projects: 'Proyectos publicados',
            hero_metric_tech: 'Tecnologías trabajadas',
            hero_metric_status: 'Disponible para colaborar',
            hero_metric_status_value: 'Ahora',
            about_title: 'Sobre mí',
            about_p1: 'Hola, soy <strong>Naroa</strong>, graduada en <strong>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong> con formación bilingüe. Mi perfil técnico está enfocado en el diseño e implementación de soluciones de software robustas para diversos entornos y dispositivos.',
            about_p2: 'Cuento con capacidad para trabajar en entornos internacionales, gestionando el ciclo de vida del desarrollo desde la lógica de servidor hasta la interfaz de usuario. Mi objetivo es aportar soluciones eficientes y escalables, aplicando patrones de diseño y metodologías que aseguren la calidad técnica del producto final.',
            about_location_label: 'Ubicación',
            about_location_value: 'España, Madrid',
            about_specialty_label: 'Especialidad',
            about_specialty_value: 'Desarrollo Multiplataforma (Bilingüe)',
            about_availability_label: 'Disponibilidad',
            about_availability_value: 'Abierta a proyectos',
            projects_title: 'Proyectos',
            project1_title: 'Arkanoid',
            project1_desc: 'Clon del videojuego clásico Arkanoid / Breakout desarrollado en Android con Java puro, sin motores externos. Construido como práctica de programación de videojuegos 2D implementando manualmente el Game Loop, física de colisiones, Sprite Sheets y gestión de hilos.',
            project1_demo_note: 'Demo jugable en Android (APK).',
            project2_title: 'Mi Portfolio',
            project2_desc: 'Página web construida desde cero con HTML, CSS y JavaScript. Cuenta con animaciones al hacer scroll, texto que se escribe solo, cursor personalizado con lazito y modo oscuro. Totalmente responsive para móvil.',
            project3_title: 'Notes',
            project3_desc: 'Repositorio de notas en Python para practicar estructura, organización de contenido y colaboración en GitHub.',
            project_apk: 'Descargar APK',
            project_demo: 'Demo',
            project_code: 'Código',
            project_repo: 'Repositorio',
            skills_title: 'Habilidades',
            skill_level: 'Intermedio',
            contact_title: 'Hablemos',
            contact_desc: '¿Tienes un proyecto en mente o quieres contactarme? Escríbeme, estaré encantada de leerlo.',
            contact_cta: 'Enviar mensaje',
            contact_cta_linkedin: 'Hablemos por LinkedIn',
            typingWords: [
                'Desarrolladora Multiplataforma',
                'Software Developer',
                'Especialista en Lógica de Sistemas',
                'Soluciones Tecnológicas Eficientes'
            ]
        },
        en: {
            title: 'My Portfolio',
            meta_description: 'Naroa\'s portfolio, bilingual multiplatform developer focused on Java, Android, web, and efficient software solutions.',
            og_title: 'My Portfolio | Naroa',
            og_description: 'Explore my projects, skills, and experience as a multiplatform developer.',
            nav_about: 'About',
            nav_projects: 'Projects',
            nav_skills: 'Skills',
            nav_contact: 'Contact',
            quick_cv_button: 'Quick CV',
            quick_cv_title: '30-second summary',
            quick_cv_profile: 'Bilingual Multiplatform Developer (Java, Android and Web).',
            quick_cv_stack: 'Core stack: Java · Android Studio · HTML · CSS · JavaScript · SQL.',
            quick_cv_focus: 'Focus: efficient solutions, polished UI and scalable development.',
            quick_cv_contact: 'Contact: naroamarco9@gmail.com · GitHub: @naroa0699.',
            hero_greeting: 'Welcome to my portfolio',
            hero_title: 'Hi, I\'m<br><em>Naroa</em>',
            hero_cta: 'View my projects',
            hero_metric_projects: 'Published projects',
            hero_metric_tech: 'Technologies used',
            hero_metric_status: 'Available to collaborate',
            hero_metric_status_value: 'Now',
            about_title: 'About Me',
            about_p1: 'Hi, I\'m <strong>Naroa</strong>, a graduate in <strong>Multiplatform Application Development (DAM)</strong> with bilingual training. My technical profile focuses on designing and implementing robust software solutions for diverse environments and devices.',
            about_p2: 'I am able to work in international environments, managing the software lifecycle from backend logic to user interface. My goal is to deliver efficient and scalable solutions by applying design patterns and methodologies that ensure technical quality.',
            about_location_label: 'Location',
            about_location_value: 'Madrid, Spain',
            about_specialty_label: 'Specialty',
            about_specialty_value: 'Multiplatform Development (Bilingual)',
            about_availability_label: 'Availability',
            about_availability_value: 'Open to new projects',
            projects_title: 'Projects',
            project1_title: 'Arkanoid',
            project1_desc: 'Classic Arkanoid / Breakout clone developed on Android using pure Java, without external engines. Built as a 2D game programming practice implementing game loop, collision physics, sprite sheets, and thread management.',
            project1_demo_note: 'Playable demo on Android (APK).',
            project2_title: 'My Portfolio',
            project2_desc: 'Website built from scratch with HTML, CSS and JavaScript. It includes scroll animations, typewriter text, a custom cursor with a bow and dark mode. Fully responsive for mobile.',
            project3_title: 'Notes',
            project3_desc: 'Python notes repository to practice structure, content organization, and GitHub collaboration.',
            project_apk: 'Download APK',
            project_demo: 'Demo',
            project_code: 'Code',
            project_repo: 'Repository',
            skills_title: 'Skills',
            skill_level: 'Intermediate',
            contact_title: 'Let\'s Talk',
            contact_desc: 'Do you have a project in mind or want to contact me? Write to me, I\'ll be happy to hear from you.',
            contact_cta: 'Send message',
            contact_cta_linkedin: 'Let\'s connect on LinkedIn',
            typingWords: [
                'Multiplatform Developer',
                'Software Developer',
                'Systems Logic Specialist',
                'Efficient Tech Solutions'
            ]
        }
    };

    let idiomaActual = localStorage.getItem('idioma') || 'es';
    const btnIdioma = document.getElementById('btn-idioma');
    const btnTema = document.getElementById('btn-tema');
    const btnCvRapido = document.getElementById('btn-cv-rapido');
    const panelCvRapido = document.getElementById('panel-cv-rapido');

    const cursor = document.getElementById('cursor');
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }

    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(seccion => {
        observador.observe(seccion);
    });

    let indicePalabra = 0;
    let indiceLetra = 0;
    let borrando = false;
    let palabras = traducciones[idiomaActual].typingWords;

    function aplicarIdioma(idioma) {
        const texto = traducciones[idioma];

        document.documentElement.lang = idioma;
        document.title = texto.title;

        const metaDescription = document.getElementById('meta-description');
        if (metaDescription) {
            metaDescription.setAttribute('content', texto.meta_description);
        }

        const ogTitle = document.getElementById('og-title');
        if (ogTitle) {
            ogTitle.setAttribute('content', texto.og_title);
        }

        const ogDescription = document.getElementById('og-description');
        if (ogDescription) {
            ogDescription.setAttribute('content', texto.og_description);
        }

        document.querySelectorAll('[data-i18n]').forEach((elemento) => {
            const clave = elemento.dataset.i18n;
            if (texto[clave]) {
                elemento.textContent = texto[clave];
            }
        });

        document.querySelectorAll('[data-i18n-html]').forEach((elemento) => {
            const clave = elemento.dataset.i18nHtml;
            if (texto[clave]) {
                elemento.innerHTML = texto[clave];
            }
        });

        if (btnIdioma) {
            btnIdioma.setAttribute('aria-label', idioma === 'es' ? 'Switch language to English' : 'Cambiar idioma a español');

            const opcionEs = btnIdioma.querySelector('[data-lang-option="es"]');
            const opcionEn = btnIdioma.querySelector('[data-lang-option="en"]');

            if (opcionEs && opcionEn) {
                opcionEs.classList.toggle('activo', idioma === 'es');
                opcionEn.classList.toggle('activo', idioma === 'en');
            }
        }

        palabras = texto.typingWords;
        indicePalabra = 0;
        indiceLetra = 0;
        borrando = false;
        const span = document.getElementById('texto-animado');
        if (span) {
            span.textContent = '';
        }

        localStorage.setItem('idioma', idioma);
    }

    function escribir() {
        const palabraActual = palabras[indicePalabra];
        const span = document.getElementById('texto-animado');
        if (!span) {
            return;
        }

        if (!borrando) {
            // Añade una letra
            span.textContent = palabraActual.slice(0, indiceLetra + 1);
            indiceLetra++;

            // Si terminó la palabra, empieza a borrar
            if (indiceLetra === palabraActual.length) {
                borrando = true;
                setTimeout(escribir, 1500); // espera 1.5s antes de borrar
                return;
            }
        } else {
            // Borra una letra
            span.textContent = palabraActual.slice(0, indiceLetra - 1);
            indiceLetra--;

            // Si borró todo, pasa a la siguiente palabra
            if (indiceLetra === 0) {
                borrando = false;
                indicePalabra = (indicePalabra + 1) % palabras.length;
            }
        }

        setTimeout(escribir, borrando ? 80 : 120);
    }

    aplicarIdioma(idiomaActual);
    escribir(); // arrancamos

    if (btnIdioma) {
        btnIdioma.addEventListener('click', () => {
            idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
            aplicarIdioma(idiomaActual);
        });
    }

    function aplicarTema(esOscuro) {
        document.body.classList.toggle('oscuro', esOscuro);

        if (btnTema) {
            btnTema.textContent = esOscuro ? '☀️' : '🌙';
        }

        localStorage.setItem('tema', esOscuro ? 'oscuro' : 'claro');
    }

    const temaGuardado = localStorage.getItem('tema');
    aplicarTema(temaGuardado === 'oscuro');

    if (btnTema) {
        btnTema.addEventListener('click', () => {
            const activarOscuro = !document.body.classList.contains('oscuro');
            aplicarTema(activarOscuro);
        });
    }

    if (btnCvRapido && panelCvRapido) {
        btnCvRapido.addEventListener('click', () => {
            const abierto = btnCvRapido.getAttribute('aria-expanded') === 'true';
            btnCvRapido.setAttribute('aria-expanded', String(!abierto));
            panelCvRapido.hidden = abierto;
        });
    }

});