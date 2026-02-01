const express = require('express');
const app = express();
const port = 3000;
const { Short_Url } = require('./lib/connctionDB')
const userRouter = require('./routes/short-url')
const cors = require('cors')


Short_Url(`mongodb://localhost:27017/Short_URL`)
.then(()=> console.log('MongoDb Connected'))
.catch((err)=> console.log("Error Occur" , err));
app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/url', userRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}/api/url`);
});
