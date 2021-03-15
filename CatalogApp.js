const express = require('express');
const app = express();
const sequelize = require('./util/mySqldb');

app
.use(express.urlencoded())
.use(express.json());

app.use("/admin",require('./routes/admin'));
app.use("/consumer",require('./routes/consumer'));

sequelize.sync().then(()=>{
    app.listen(process.env.PORT);
}).catch((err)=>{
    console.log(err);
});