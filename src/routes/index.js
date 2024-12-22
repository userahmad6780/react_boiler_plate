import Home from "../screens/home";
import Login from "../screens/login";
import PageNotFound from "../screens/PageNotFound";


export const routes = [
    {
        'path': '/',
        'name': 'Home',
        'icon': '',
        'isPublic': false,
        'component': Home
    },
    {
        'path': '/login',
        'name': 'Login',
        'icon': '',
        'isPublic': true,
        'component': Login
    },
    {
        'path': '*',
        'name': '',
        'icon': '',
        'isPublic': true,
        'component': PageNotFound
    },
]