import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import { useUser } from "@/stores/user";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/auth",
			name: "auth",
			component: () => import("../views/Auth.vue"),
		},
	],
});

router.beforeEach((to, from) => {
	const { user } = useUser();

	if (!user.token && to.name !== "auth") return { name: "auth" };

	return true;
});

export default router;
