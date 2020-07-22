import express from 'express';

const app = express();

app.get('/users', (request, response)=>{
    console.log('listagem de usuários');

    response.json([
        'Joao',
        'Denilson',
        'Souza',
        'Santos',
        'Daniel'
    ]);
})

app.listen(3333);