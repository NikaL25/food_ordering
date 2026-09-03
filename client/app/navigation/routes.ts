import { IRoute } from "./navigation.type";
import Auth from "@/components/screens/auth/Auth";
import Favorites from "@/components/screens/favorites/Favorites";
import Search from "@/components/screens/search/Search";
import Explorer from "@/components/screens/explorer/Explorer";
import Profile from "@/components/screens/profile/Profile";
import Cart from "@/components/screens/cart/Cart";
import Category from "@/components/screens/category/Category";
import Product from "@/components/screens/product/Product";
import Thanks from "@/components/screens/thanks/Thanks";
import Home from "@/components/screens/home/Home";

export const routes: IRoute[] = [
    {
        name: 'Auth',
        component: Auth
    },

    {
        name: 'Home',
        component: Home
    },
     {
        name: 'Favorites',
        component: Favorites
    },

    {
        name: 'Search',
        component: Search
    },
    {
        name: 'Explorer',
        component: Explorer
    },

    {
        name: 'Profile',
        component: Profile
    },
     {
        name: 'Cart',
        component: Cart
    },
    {
        name: 'Category',
        component: Category
    },
     {
        name: 'Product',
        component: Product
    },
     {
        name: 'Thanks',
        component: Thanks
    },

]