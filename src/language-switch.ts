import { translations, type Language } from "./i18n";

const languageButtons = Array.from(document.querySelectorAll<HTMLButtonElement>("[data-language]"));
const projectCards = Array.from(document.querySelectorAll<HTMLButtonElement>(".project-card"));
const projectDetail = document.querySelector<HTMLDialogElement>(".project-detail");

const setLanguage = (language: Language) => {
	const dictionary = translations[language];
	document.documentElement.lang = language;
	document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((element) => {
		const key = element.dataset.i18n as keyof typeof dictionary;
		element.textContent = dictionary[key];
	});
	document.querySelectorAll<HTMLElement>("[data-i18n-html]").forEach((element) => {
		const key = element.dataset.i18nHtml as keyof typeof dictionary;
		element.innerHTML = dictionary[key];
	});
	document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((element) => {
		const key = element.dataset.i18nAria as keyof typeof dictionary;
		element.setAttribute("aria-label", dictionary[key]);
	});

	const description = document.querySelector<HTMLMetaElement>("meta[name='description']");
	if (description) description.content = dictionary.description;
	document.title = "Gasmoon | Daniel Guzmán";
	languageButtons.forEach((button) => {
		const active = button.dataset.language === language;
		button.classList.toggle("is-active", active);
		button.setAttribute("aria-pressed", String(active));
	});

	if (projectDetail?.open) {
		const activeTitle = projectDetail.querySelector(".detail-index")?.textContent;
		const activeCard = projectCards.find((card) => card.dataset.projectTitle === activeTitle);
		if (activeCard) {
			const suffix = language === "en" ? "En" : "";
			projectDetail.querySelector(".detail-description")!.textContent = activeCard.dataset[`projectDescription${suffix}`] ?? activeCard.dataset.projectDescription ?? "";
			projectDetail.querySelector(".detail-areas")!.textContent = activeCard.dataset[`projectAreas${suffix}`] ?? activeCard.dataset.projectAreas ?? "";
			projectDetail.querySelector<HTMLImageElement>(".detail-image")!.alt = language === "en" ? `Screenshot of ${activeTitle}` : `Captura de ${activeTitle}`;
			projectDetail.querySelector(".detail-link [data-i18n='viewProject']")!.textContent = activeCard.dataset[`projectLinkLabel${suffix}`] ?? activeCard.dataset.projectLinkLabel ?? dictionary.viewProject;
		}
	}

	try {
		window.localStorage.setItem("gasmoon-language", language);
	} catch {
		// Language switching still works for this visit when browser storage is unavailable.
	}
};

languageButtons.forEach((button) => button.addEventListener("click", () => {
	const language = button.dataset.language;
	if (language === "es" || language === "en") setLanguage(language);
}));

let initialLanguage: Language = "es";
try {
	const savedLanguage = window.localStorage.getItem("gasmoon-language");
	if (savedLanguage === "es" || savedLanguage === "en") initialLanguage = savedLanguage;
} catch {
	// Spanish is the default when browser storage is unavailable.
}
setLanguage(initialLanguage);
