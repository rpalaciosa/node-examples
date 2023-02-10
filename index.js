import express  from 'express';
import {print1 , print2} from  './modules/test.js';

const app = express();
const PORT = 3000;

app.get('/1', (req, res) => {
	res.json(print1());
  })

  app.get('/2', (req, res) => {
	res.json(print2());
  })

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
