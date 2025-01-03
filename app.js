require('./config/global_config');


//----------- Require Router -----------//
const testRouter = require('./routes/index');
const OXgameRoutes = require('./routes/tic_tac_toe');

//----------- Require Package -----------//
// const file = fs.readFileSync("./swagger.yaml", "utf8");
// const swaggerDocument = YAML.parse(file);

//---- Config -----//
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(cors());

//------------- Route -------------//
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/test/api', testRouter);
app.use('/oxgame/api', OXgameRoutes);



app.get('/', (req, res) => {
    res.send('Welcome to BIO dashboard  project');
});


//------- PORT ------//
console.log('[success] task 1 start service port : ' + GLOBAL_VALUE.NODE_PORT);
const server = app.listen(GLOBAL_VALUE.NODE_PORT).on('error', (err) => {
    console.log(err);
});

module.exports = server;
