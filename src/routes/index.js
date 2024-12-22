import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../screens/home";
import Login from "../screens/login";
import PageNotFound from "../screens/PageNotFound";


export const routes = [
    {
        'path': '/',
        'name': 'Home',
        'isPublic': false,
        'component': Home,
        'layout': PrivateLayout,
    },
    {
        'path': '/login',
        'name': 'Login',
        'isPublic': true,
        'component': Login,
        'layout': PublicLayout,
    },
    {
        'path': '*',
        'name': '',
        'isPublic': true,
        'component': PageNotFound,
        'layout': PublicLayout,
    },
]