import { TodoApp } from "../components/todo/AppTodo";
import { Topics } from "../components/topics/index";
import { Home } from "../components/home/index";
import { About } from "../components/about/index";
import Profile from '../auth/Profile';
import { ImplicitCallback } from '@okta/okta-react';

export const routes = [{
    id: 0,
    href: '/',
    label: 'Home',
    exact: true,
    component: Home,
    allowAnonymous: true,
}, {
    id: 1,
    href: '/about',
    label: 'About',
    exact: false,
    component: About
}, {
    id: 2,
    href: '/topics',
    label: 'Topics',
    exact: false,
    component: Topics,
    children: [{
        id: 0,
        href: '/components',
        label: 'Components',
        exact: true
    }, {
        id: 1,
        href: '/props-v-state',
        label: 'Props v. State',
        exact: true
    }, {
        id: 2,
        href: '/counter',
        label: 'Counter',
        exact: true
    }]
},
{
    id: 3,
    href: '/todolist',
    label: 'Todo List',
    exact: false,
    component: TodoApp
},
{
    id: 4,
    href: '/implicit/callback',
    label: 'Implicit Callback',
    exact: false,
    component: ImplicitCallback,
    allowAnonymous: true,
    hide: true
},
{
    id: 5,
    href: '/profile',
    label: 'Profile',
    exact: false,
    component: Profile
}
];

