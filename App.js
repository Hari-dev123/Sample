const express = require('express')
const app = express();
app.use(express.json());
const users  = {
   name1:  {
        id  : 'hari',
        age  : 21
    },
   name2 : {
        id  : 'mathan',
        age  : 23
    },
    name3 :{
        id  : 'karthick',
        age  : 20
    },
}

app.get('/users',(req,res)=>{
     res.json(users);
})

app.get('/users/:name',(req,res)=>{
     const name  = req.params.name;
    const user = users[name];
    if(user){
        res.json(user);
    }else{
        res.status(404).json({err : 'user not exist'});
    }
})


app.post('/users', (req, res) => {
    const { id, age } = req.body;

    if (!id || !age) {
        return res.status(400).json({ error: 'Both id and age are required' });
    }

    // Dynamically generate a new key for the user
    const newKey = `name${Object.keys(users).length + 1}`;

    users[newKey] = { id, age };

    res.status(201).json({ message: 'User added successfully', user: users[newKey] });
});

app.listen(3000);