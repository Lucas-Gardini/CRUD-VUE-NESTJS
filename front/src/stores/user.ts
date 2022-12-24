import { ref } from "vue";
import { defineStore } from "pinia";

export const useUser = defineStore("user", () => {
	const user = ref<{ token: string | null }>({ token: null });

	function setToken(token: string) {
		user.value.token = token;
	}

	return { user, setToken };
});
