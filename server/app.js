require("dotenv").config()

const express = require("express")
const app = express();
const cors = require("cors")
const bodyParser = require("body-parser");

const http = require("http")
const socketio = require("socket.io")
const { socketConfig } = require("./config/socket.config");

const server = http.createServer(app);
const io = socketio(server, socketConfig) 

 // Middleware
 app.use(cors());
 app.use(express.json())
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true}));


 // Initialisation de l'API
 app.get("/", (req, res) => {
    res.json({
        path : "/api",
        version: '1.0.1',
        year : 2023,
        message : "Bienvenue e-ambassador API RESTFUll "
    })
 })

// Importations des routes 
const userRouter = require("./api/users/user.router")



// Initialisations des routes
app.use("/api/users", userRouter)


//Initialisation des Port d'ecoutes
const PORT = process.env.APP_PORT || 5000;
 
// Ecoute d'une connexion Socket.io
io.on('connection', (socket) => {
    console.log('Un client est connecté !');
  });
  

server.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server running on port ${PORT}`);
    console.log('====================================');
});
