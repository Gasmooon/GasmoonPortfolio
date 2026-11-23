const themeToggle = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
const lightBackground = document.querySelector<HTMLImageElement>(".parallax-layer--light-theme");

const setTheme = (isLight: boolean, persist = true) => {
	document.documentElement.classList.toggle("theme-light", isLight);
	themeToggle?.setAttribute("aria-checked", String(isLight));

	if (lightBackground) {
		if (!isLight) {
			lightBackground.hidden = true;
		} else if (!lightBackground.hasAttribute("src")) {
			lightBackground.addEventListener("load", () => {
				if (document.documentElement.classList.contains("theme-light")) lightBackground.hidden = false;
			}, { once: true });
			lightBackground.addEventListener("error", () => setTheme(false), { once: true });
			const source = lightBackground.dataset.src;
			if (source) lightBackground.src = source;
		} else if (lightBackground.complete && lightBackground.naturalWidth > 0) {
			lightBackground.hidden = false;
		}
	}

	if (persist) {
		try {
			window.localStorage.setItem("gasmoon-theme", isLight ? "light" : "dark");
		} catch {
			// Theme switching still works for this visit if browser storage is unavailable.
		}
	}
};

themeToggle?.addEventListener("click", () => {
	setTheme(!document.documentElement.classList.contains("theme-light"));
});

let initialTheme: "light" | "dark" = "dark";
try {
	if (window.localStorage.getItem("gasmoon-theme") === "light") initialTheme = "light";
} catch {
	// Dark theme is the default when browser storage is unavailable.
}
setTheme(initialTheme === "light", false);
