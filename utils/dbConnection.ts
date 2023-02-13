import mongoose from "npm:mongoose";
import "https://deno.land/std@0.176.0/dotenv/load.ts";
import { infoColor } from "./contsants.ts";

export default async function dbConnection() {
    mongoose.connect(Deno.env.get("MONGO_URI")!, () => {
        console.log(`[${infoColor("CONNECTED")}]: Connected to Database.`)
    })
};