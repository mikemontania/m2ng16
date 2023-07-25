import { INavbarData } from "./helper";

export const navbarData: INavbarData[] = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },

    {
        routeLink: 'parametros',
        icon: 'fal fa-tags',
        label: 'Parametros',
        items: [
            {
                routeLink: 'parametros/empleados',
                label: 'Empleados'
            },
            {
                routeLink: 'parametros/sectores',
                label: 'Sectores'
            },
            {
                routeLink: 'parametros/conceptos',
                label: 'Conceptos'
            }
        ]
    },
    {
        routeLink: 'pages',
        icon: 'fal fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fal fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',

    },
];