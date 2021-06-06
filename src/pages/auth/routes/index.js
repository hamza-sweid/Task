const AuthRoutes = [
  {
    path: "/login",
    component: () => import("../login/Index.vue")
  },
  {
    path: "/signup",
    component: () => import("../signup/Index.vue")
  }
];
export default AuthRoutes;
