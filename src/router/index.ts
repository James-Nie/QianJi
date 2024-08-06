import { createRouter } from "QianJi";

const routes = createRouter({
    baseUrl: '/app',
    mode: 'hash',
    routes: [
        {
            path: "/",
            element: 'container-home',
            children: [{
                path: "/Button",
                element: 'button-pre',
            },{
                path: "/Input",
                element: 'input-pre',
            }]
        }
    ]
});

export default routes;