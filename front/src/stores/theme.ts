import { ref } from "vue";
import { defineStore } from "pinia";

export const useTheme = defineStore("theme", () => {
	const value = ref(localStorage.getItem("theme") ?? "light");

	function updateTheme() {
		const html = document.querySelector("html");
		if (html) {
			html.className = value.value;
			html.setAttribute("data-theme", value.value);
		}

		localStorage.setItem("theme", value.value);
	}

	function toggle() {
		value.value = value.value === "light" ? "dark" : "light";

		updateTheme();
	}

	updateTheme();

	return { value, toggle };
});
