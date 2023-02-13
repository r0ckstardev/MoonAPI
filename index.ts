import express from "npm:express";
import handleUsers  from "./routes/user.ts";
import handleServices  from "./routes/service.ts";
import dbConnection from "./utils/dbConnection.ts";
import "https://deno.land/std@0.176.0/dotenv/load.ts";
import { success } from "./utils/contsants.ts";
import { User } from "./models/userModel.ts";
import { Service } from "./models/serviceModel.ts";

const app = express();

const PORT = "3000";

app.get("/", (req: any, res: any, next: any) => {
    res.send("Api is Running.");
});

app.use("/users", handleUsers);
app.use("/services", handleServices);

app.listen(PORT, () => {
    console.log(`[${success("LISTENING")}]: Listening on port 3000.`);
});

dbConnection()