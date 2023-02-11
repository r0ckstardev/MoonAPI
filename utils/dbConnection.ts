import mongoose from "npm:mongoose";
import { infoColor } from "./contsants.ts";

export default async function dbConnection() {
    mongoose.connect(Deno.env.get("MONGOOSE_URI")!, () => {
        console.log(`[${infoColor("CONNECTED")}]: Connected to Database.`)
    })
};