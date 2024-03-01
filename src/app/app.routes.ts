import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "residentes",
        children: [
            {
                path: "auth",
                loadComponent: () => import("./autenticacion/autenticacion.component").then(m => m.AutenticacionComponent)
            },
            {
                path: "registro",
                loadComponent: () => import("./registro-residentes/registro-residentes.component").then(m => m.RegistroResidentesComponent)
            },
            {
                path: "",
                redirectTo: "auth",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "seguridad",
        children: [
            {
                path: "control",
                loadComponent: () => import("./control-acceso/control-acceso.component").then(m => m.ControlAccesoComponent)
            },
            {
                path: "stats",
                loadComponent: () => import("./estadisticas/estadisticas.component").then(m => m.EstadisticasComponent)
            },
            {
                path: "",
                redirectTo: "control",
                pathMatch: "full"
            }
        ]
    },
    {
        path: "",
        redirectTo: "residentes/auth",
        pathMatch: "full"
    }
];
