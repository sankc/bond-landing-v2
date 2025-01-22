// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    es: {
        translation: {
            // Navbar
            benefits: "Beneficios",
            process: "Proceso",
            pricing: "Precios",
            bookDemo: "Reservar Demo",

            // Hero
            heroTitle: "Todas tus compras en un solo lugar",
            heroSubtitle: "Tu equipo de compras definitivo",
            heroDescription: "Bond es tu nueva oficina de compras que encuentra y negocia las mejores ofertas, para que ahorres tiempo y dinero.",
            learnMore: "Saber más",
            costSavings: "Ahorra en gastos",
            timeSaved: "Salva tiempo",
            freeToUse: "Totalmente Gratis",

            // Benefits
            whyChooseBond: "¿Por qué elegir Bond como tu reemplazo de oficina de compras?",
            experienceFuture: "Experimenta el futuro de la gestión de compras con nuestra solución integral",
            saveCosts: "Ahorra hasta 30% en costos",
            saveCostsDesc: "Nuestro sistema de negociación y licitación inversa ofrece ahorros sustanciales.",
            reduceAdmin: "Reduce el tiempo administrativo en 80%",
            reduceAdminDesc: "Nuestro reemplazo de oficina de compras maneja cada proveedor y proceso por ti.",
            eliminateTeam: "Elimine el equipo interno",
            eliminateTeamDesc: "Somos el reemplazo de oficina de compras que has estado esperando.",

            // Process
            howItWorks: "Cómo funciona tu nueva oficina de compras",
            processDescription: "Simple, eficiente y efectivo, experimenta la gestión de compras reinventada",
            submitRequest: "Enviar solicitud",
            submitRequestDesc: "Envía un simple formulario de solicitud. Inicio rápido y sin complicaciones.",
            weSource: "Buscamos y negociamos",
            weSourceDesc: "Buscamos y negociamos los mejores precios por ti.",
            approve: "Aprobar y recibir",
            approveDesc: "Aprueba y recibe entregas sin gastos generales.",
            startJourney: "Comienza tu viaje",

            // Footer
            "footerTagline": "Tu reemplazo definitivo de oficina de compras para PYMEs en Europa",
            "contact": "Contacto",
            "legal": "Legal",
            "privacyNotice": "Respetamos tu privacidad—sin spam.",
            "allRightsReserved": "© 2025 Bond. Todos los derechos reservados.",
            "privacyPolicy": "Política de Privacidad",
            "termsOfService": "Términos de Servicio",

            //Form
            "joinFuture": "Únete al Futuro de las Compras",
            "firstToExperience": "Sé de los primeros en experimentar el último reemplazo de oficina de compras",
            "fullName": "Nombre Completo",
            "fullNamePlaceholder": "Juan Pérez",
            "emailAddress": "Correo Electrónico",
            "emailPlaceholder": "juan@empresa.com",
            "companyName": "Nombre de la Empresa",
            "companyPlaceholder": "Tu Empresa",
            "messageOptional": "Mensaje (Opcional)",
            "messagePlaceholder": "Cuéntanos sobre tus necesidades de compras...",
            "submitting": "Enviando...",
            "bookDemo": "Reservar Demo",
            "successMessage": "¡Gracias! Has sido agregado a nuestra demo.",
            "errorMessage": "¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.",
            "invalidEmailMessage": "Por favor, ingresa un correo electrónico válido.",
            "privacyNotice": "Respetamos tu privacidad—sin spam.",

            //FAQ
            "faqTitle": "Preguntas Frecuentes",
            "faqSubtitle": "Todo lo que necesitas saber sobre tu reemplazo de oficina de compras",
            "howDoesBondReplace": "¿Cómo reemplaza Bond a una oficina de compras?",
            "howDoesBondReplaceAnswer": "Bond maneja todas las tareas de compras, incluyendo la búsqueda de proveedores, negociaciones y trabajo administrativo, reemplazando efectivamente la necesidad de un equipo interno de compras.",
            "isBondFree": "¿Es Bond realmente gratis?",
            "isBondFreeAnswer": "Sí, Bond es completamente gratis sin costos de suscripción. Solo ganamos dinero cuando te ahorramos dinero a través de nuestras soluciones de compras.",
            "howDoesCostSaving": "¿Cómo funciona el ahorro del 30%?",
            "howDoesCostSavingAnswer": "A través de nuestro sistema de licitación inversa y negociaciones expertas, aprovechamos nuestra red de proveedores para asegurar los mejores precios posibles para tus necesidades de compras.",
            "whatCompanies": "¿Qué tipos de empresas pueden usar Bond?",
            "whatCompaniesAnswer": "Bond está diseñado específicamente para PYMEs en Europa que buscan optimizar sus procesos de compras sin mantener un departamento interno de compras.",
            "implementationTime": "¿Cuánto tiempo toma la implementación?",
            "implementationTimeAnswer": "Puedes comenzar a usar Bond inmediatamente después de registrarte. Nuestro servicio de reemplazo de oficina de compras no requiere configuración compleja ni períodos de integración.",
            //Pricing
            "pricingTitle": "Precios Simples y Transparentes",
            "pricingSubtitle": "Tu reemplazo de oficina de compras rentable",
            "freeToUse": "Gratis para Usar",
            "noHiddenCosts": "Sin cuotas de suscripción. Sin costos ocultos.",
            "forever": "para siempre",
            "fullProcurementReplacement": "Reemplazo completo de oficina de compras",
            "unlimitedRequests": "Solicitudes ilimitadas",
            "supplierManagement": "Negociación y gestión de proveedores",
            "bestPriceGuarantee": "Garantía de mejor precio",
            "bookDemoNow": "Reservar Demo Ahora",
            "costEffective": "Un reemplazo de oficina de compras verdaderamente rentable",

            //Video
            "watchDemo": "Ver la Demostración",
            "demoDescription": "Observe cómo Bond revoluciona su proceso de compras",
            "getStarted": "Comenzar Ahora",

        }
    },
    en: {
        translation: {
            // Navbar
            benefits: "Benefits",
            process: "Process",
            pricing: "Pricing",
            bookDemo: "Book Demo",

            // Hero
            heroTitle: "All your procurements in one place",
            heroSubtitle: "Your ultimate procurement office replacement",
            heroDescription: "Bond is the procurement office replacement that finds and negotiates the best deals—so you save time and money.",
            learnMore: "Learn More",
            costSavings: "Cost Savings",
            timeSaved: "Time Saved",
            freeToUse: "Free to Use",

            // Benefits
            whyChooseBond: "Why Choose Bond as Your Procurement Office Replacement?",
            experienceFuture: "Experience the future of procurement management with our comprehensive solution",
            saveCosts: "Save Up to 30% on Costs",
            saveCostsDesc: "Our negotiation and reverse tendering system delivers substantial savings.",
            reduceAdmin: "Reduce Admin Time by 80%",
            reduceAdminDesc: "Our procurement office replacement handles every supplier and process for you.",
            eliminateTeam: "Eliminate In-House Team",
            eliminateTeamDesc: "We are the procurement office replacement you've been waiting for.",

            // Process
            howItWorks: "How Your Procurement Office Replacement Works",
            processDescription: "Simple, efficient, and effective—experience procurement management reimagined",
            submitRequest: "Submit Request",
            submitRequestDesc: "Submit a simple request form. Quick and hassle-free start.",
            weSource: "We Source & Negotiate",
            weSourceDesc: "We source and negotiate the best prices for you.",
            approve: "Approve & Receive",
            approveDesc: "Approve and receive deliveries without overhead.",
            startJourney: "Start Your Journey",

            // Footer
            "footerTagline": "Your ultimate procurement office replacement for SMEs in Europe",
            "contact": "Contact",
            "legal": "Legal",
            "privacyNotice": "We respect your privacy—no spam.",
            "allRightsReserved": "© 2025 Bond. All rights reserved.",
            "privacyPolicy": "Privacy Policy",
            "termsOfService": "Terms of Service",

            // Form
            "joinFuture": "Join the Future of Procurement",
            "firstToExperience": "Be among the first to experience the ultimate procurement office replacement",
            "fullName": "Full Name",
            "fullNamePlaceholder": "John Doe",
            "emailAddress": "Email Address",
            "emailPlaceholder": "john@company.com",
            "companyName": "Company Name",
            "companyPlaceholder": "Your Company",
            "messageOptional": "Message (Optional)",
            "messagePlaceholder": "Tell us about your procurement needs...",
            "submitting": "Submitting...",
            "bookDemo": "Book Demo",
            "successMessage": "Thank you! You've been added to our demo.",
            "errorMessage": "Oops! Something went wrong. Please try again.",
            "invalidEmailMessage": "Please enter a valid email address.",
            "privacyNotice": "We respect your privacy—no spam.",

            //FAQ
            "faqTitle": "Frequently Asked Questions",
            "faqSubtitle": "Everything you need to know about your procurement office replacement",
            "howDoesBondReplace": "How does Bond replace a procurement office?",
            "howDoesBondReplaceAnswer": "Bond handles all procurement tasks including supplier sourcing, negotiations, and administrative work, effectively replacing the need for an internal procurement team.",
            "isBondFree": "Is Bond really free to use?",
            "isBondFreeAnswer": "Yes, Bond is completely free to use with no subscription fees. We make money only when we save you money through our procurement solutions.",
            "howDoesCostSaving": "How does the 30% cost saving work?",
            "howDoesCostSavingAnswer": "Through our reverse tendering system and expert negotiations, we leverage our network of suppliers to secure the best possible prices for your procurement needs.",
            "whatCompanies": "What types of companies can use Bond?",
            "whatCompaniesAnswer": "Bond is designed specifically for SMEs in Europe looking to optimize their procurement processes without maintaining an internal procurement department.",
            "implementationTime": "How long does implementation take?",
            "implementationTimeAnswer": "You can start using Bond immediately after signing up. Our procurement office replacement service requires no complex setup or integration periods.",

            //Pricing
            "pricingTitle": "Simple, Transparent Pricing",
            "pricingSubtitle": "Your cost-effective procurement office replacement",
            "freeToUse": "Free to Use",
            "noHiddenCosts": "No subscription fees. No hidden costs.",
            "forever": "forever",
            "fullProcurementReplacement": "Full procurement office replacement",
            "unlimitedRequests": "Unlimited requests",
            "supplierManagement": "Supplier negotiation & management",
            "bestPriceGuarantee": "Best price guarantee",
            "bookDemoNow": "Book Demo Now",
            "costEffective": "A truly cost-effective procurement office replacement",

            //Video
            "watchDemo": "Watch the Demo",
            "demoDescription": "See how Bond revolutionizes your procurement process",
            "getStarted": "Get Started"

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // default language
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
