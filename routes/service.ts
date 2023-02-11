import { wipeServices, deleteService, editService, returnService, returnServices } from "../controllers/service.controller.ts"

export default async function handleServices(req: any, res: any, next: any) {
    if(req.url === "/delete") {
        wipeServices(req, res, next)
    } else if(req.url === "/delete/:id") {
        deleteService(req, res, next)
    } else if(req.url === "/edit/:id") {
        editService(req, res, next)
    } else if(req.url === "/view") {
        returnService(req, res, next)
    } else if(req.url === "/view/:id") {
        returnServices(req, res, next)
    }
}