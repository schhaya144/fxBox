const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const connectDB = require('./config/db');

require('dotenv').config();
const Router = require('./Router/index');
const path = require('path');
const WingoGame = require('./controller/WingoGame');
const ADMIN_URL = process.env.Admin_url;
const FRONTEND_URL = process.env.Frontend_url;
// const dailyInterestCron = require('./Services/dailyInterest');
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [`${ADMIN_URL}`, `${FRONTEND_URL}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  },
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use(
  cors({
    origin: [`${ADMIN_URL}`, `${FRONTEND_URL}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.TOKEN_SECRET_KEY,
    resave: false,
    saveUninitialized: false, // Ensure session is not initialized unnecessarily
    cookie: { secure: process.env.NODE_ENV === 'production', httpOnly: true },
    store: new session.MemoryStore(), // Replace with a persistent store in production
  })
);
// dailyInterestCron();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/api', Router);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 8077;

let timeLeft = 30;
let timeLeft2 = 60;
let timeLeft3 = 180;
let timeLeft4 = 300;

const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}`;
};

var periodID_30sTimer = 10001;
var periodID_1minTimer = 20001;
var periodID_3minTimer = 30001;
var periodID_5minTimer = 50001;

const interval = setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    timeLeft = 30;
    periodID_30sTimer++;
  }
  if (timeLeft === 27) {
    WingoGame.declareWingoresult('30s');
  }

  const currentDateTime = getCurrentDateTime();
  WingoGame.periodID_30s = `${currentDateTime}${String(
    periodID_30sTimer
  ).padStart(5, '0')}`;

  io.emit('30sTimer', { timeLeft, periodID: WingoGame.periodID_30s });
}, 1000);

const interval2 = setInterval(() => {
  if (timeLeft2 > 0) {
    timeLeft2--;
  } else {
    timeLeft2 = 60;
    periodID_1minTimer++;
  }

  const currentDateTime = getCurrentDateTime();
  WingoGame.periodID_1min = `${currentDateTime}${String(
    periodID_1minTimer
  ).padStart(5, '0')}`;
  io.emit('1minTimer', { timeLeft2, periodID: WingoGame.periodID_1min });
}, 1000);

const interval3 = setInterval(() => {
  if (timeLeft3 > 0) {
    timeLeft3--;
  } else {
    timeLeft3 = 180;
    periodID_3minTimer++;
  }

  const currentDateTime = getCurrentDateTime();
  WingoGame.periodID_3min = `${currentDateTime}${String(
    periodID_3minTimer
  ).padStart(5, '0')}`;
  io.emit('3minTimer', { timeLeft3, periodID: WingoGame.periodID_3min });
}, 1000);

const interval4 = setInterval(() => {
  if (timeLeft4 > 0) {
    timeLeft4--;
  } else {
    timeLeft4 = 300;
    periodID_5minTimer++;
  }

  const currentDateTime = getCurrentDateTime();
  WingoGame.periodID_5min = `${currentDateTime}${String(
    periodID_5minTimer
  ).padStart(5, '0')}`;
  io.emit('5minTimer', { timeLeft4, periodID: WingoGame.periodID_5min });
}, 1000);

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

connectDB()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log('DB connected');
    });
  })
  .catch((err) => {
    console.error('Failed to connect to DB', err);
  });


