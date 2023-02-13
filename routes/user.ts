import { wipeUsers, deleteUser, editUser, returnUsers, returnUser } from "../controllers/user.controller.ts";

export default async function handleUsers(req:any, res: any, next: any) {
    if(req.url === "/delete") {
        wipeUsers(req, res, next);
    } else if(req.url === "/delete/:id") {
        deleteUser(req, res, next);
    } else if(req.url === "/edit/:id") {
        editUser(req, res, next);
    } else if(req.url === "/view") {
        returnUsers(req, res, next);
    } else if(req.url === "/view/:id") {
        returnUser(req, res, next);
    }
}