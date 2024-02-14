import express from "express";
import cors from "cors";
import routes from "./routes";
import config from "./config"; 

const isProduction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

const app = express();
app.use(express.json());

if (isDevelopment) {
    app.use(cors());
}

if (isProduction) {
    app.use(express.static("public"));
}

app.use(routes);

if (isProduction) {
    app.get("*", (_, res) => {
        res.sendFile("index.html", { root: "public" });
    });
}

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));