import {createRouter, createWebHistory} from "vue-router"

import WallPage from "../pages/wall/WallPage.vue"
import Login from "../pages/Login.vue"
import ProfilePage from "../pages/ProfilePage.vue"
import EditProfile from "../pages/EditProfile.vue"
import SignUp from "../pages/SignUp.vue"

const routes = [
    {path: "/login", component: Login},
    {path: "/signup", component: SignUp},
    {path: "/home", component: WallPage},
    {path: "/profile", component: ProfilePage},
    {path: "/EditProfile", component: EditProfile}
]


const router = createRouter({history: createWebHistory(), routes})

export default router
