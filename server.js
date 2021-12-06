const { request, response } = require('express');
const express = require('express');

const app = express();
const port = 3000;

//host static files from public folder
app.use(express.static('public'));

//route to a dynamic path
app.get("/now", (request, response) =>{
    const date = new Date();
    response.send(date);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})