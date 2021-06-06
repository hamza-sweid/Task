
import AuthRoutes from "../pages/auth/routes/index"
import RecipeRoutes from "../pages/recipes/routes/index"
import ShoppingListRoutes from "../pages/shopping-list/routes/index"
const routes = [
  ...AuthRoutes,
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      ...RecipeRoutes,
      ...ShoppingListRoutes
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes
