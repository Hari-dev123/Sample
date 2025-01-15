const express = require('express');
const app = express();
app.get('/',(req,res,next)=>{
       res.send('<h1>hello</h1>')
})


app.listen(3000);
