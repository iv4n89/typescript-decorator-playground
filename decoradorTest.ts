// import { Request, Response } from "express";


// function log (constructor: Function ): void {
//     console.log(constructor)
// }


// @log
// class MiClase {

//     constructor() {
//         console.log('Mensaje desde el constructor')
//     }
// }

// let miclase = new MiClase();

// export enum METHOD {
//     GET = 'get',
//     POST = 'post'
// }

// interface RouteConfigProps {
//     method: METHOD,
//     path: string
// }

// export function routeConfig({method, path}: RouteConfigProps): MethodDecorator {
//     return function (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
//         const response = (req: Request, res: Response) => {
//             const original = descriptor.value(req, res);

//             res.status(200).json(original);
//         }

//         server[method](path, response);
//     }
// }