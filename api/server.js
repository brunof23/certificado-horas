let express = require('express');

app = express();
port = process.env.PORT || 4000;
mongoose = require('mongoose')
certificado = require('./api/models/certificadoModel');
bodyParser = require('body-parser');
cors = require('cors');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/certificados');


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


let routes = require('./api/routes/certificadoRoutes');
routes(app);
 
app.listen(port);
