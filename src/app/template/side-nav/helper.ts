// Importamos las funciones necesarias del módulo de animaciones de Angular.
import { animate, style, transition, trigger } from "@angular/animations";

// Definimos una interfaz para representar los datos de la barra de navegación.
export interface INavbarData {
  routeLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: INavbarData[];
}

// Definimos un trigger de animación llamado 'fadeInOut'.
export const fadeInOut = trigger('fadeInOut', [
  // Definimos una transición para cuando el elemento se está agregando al DOM (es decir, al entrar).
  transition(':enter', [
    // Establecemos los estilos iniciales del elemento (opacidad 0).
    style({ opacity: 0 }),
    // Aplicamos una animación para aumentar gradualmente la opacidad del elemento a 1 en 350 milisegundos.
    animate('350ms', style({ opacity: 1 }))
  ]),
  // Definimos una transición para cuando el elemento se está eliminando del DOM (es decir, al salir).
  transition(':leave', [
    // Establecemos los estilos iniciales del elemento (opacidad 1).
    style({ opacity: 1 }),
    // Aplicamos una animación para disminuir gradualmente la opacidad del elemento a 0 en 350 milisegundos.
    animate('350ms', style({ opacity: 0 }))
  ])
]);
