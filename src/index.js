import express from "express";
import {dirname,join} from "path"
import { fileURLToPath } from "url";
import ruteador from "./routes/index.js"
// import bootstrap from 'bootstrap'

const __dirname = dirname(fileURLToPath(import.meta.url))


const app = express()
app.set("views", join(__dirname,"views"))
app.set("view engine", "ejs")
app.use(ruteador)
app.use(express.static(join(__dirname, "../node_modules/bootstrap/dist/")));
app.use(express.static(join(__dirname, "../node_modules/@fortawesome/fontawesome-free/")));
app.use(express.static(join(__dirname,"public")))
app.listen(80)
console.log("Servidor iniciado");

