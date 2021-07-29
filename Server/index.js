// PARAMETRES GENERAUX
const express = require('express')
const cors = require('cors')
const app = express()
const fs = require('fs')


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//code essentiel si on émet une requête depuis un navigateur
app.use((req,res,next) =>{
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Headers", "*")
  next()
});

app.use(cors({
    preflightContinue: true
}))



// pour lire un fichier JSON
let messages = JSON.parse(fs.readFileSync('datas.json'))
let lastId = JSON.parse(fs.readFileSync('id.json'))

// REQUETES

/**
 * renvoi la liste des messages
 */
app.get('/messages', (req, res) => {
  res.send(JSON.parse(fs.readFileSync('datas.json')));
})


/**
 * ajoute un nouveau message à la liste des messages
 */
app.post('/messages', (req, res) => {
    // j'incrémente la valeur dans le fichier id.json
    lastId ++;
    // j'affecte la valeur du fichier json à l'id présent dans le body du nouveau message
    req.body.id = lastId;
    // j'écrase l'id dans le fichier id.json
    fs.writeFileSync('id.json', JSON.stringify(lastId));
    // je set l'état du nouveau message à non lu
    req.body.read = false
    // je pousse le nouveau message dans la liste des messages
    messages.push(req.body);
    fs.writeFileSync('datas.json', JSON.stringify(messages));
    res.setHeader('Content-Type', 'application/json')
        .send({message : 'success'});
})


/**
 * modifie le statut d'un message de non lu à lu
 */
app.put('/messages/:id/read', (req,res) =>{
    let status = 0;
    // pour chaque élément du message j'éxécute le traitement
    messages = messages.map(msg => {
        // si l'id du message correspond à celui passé en url, je passe son statut à "read"
        if(msg.id == req.params.id) {
            if(msg.read === false){  
                msg.read = true
                status = 200
            }else{
                status = 304
            }
        }
        return msg
    })
    // je met à jour le fichier json
    fs.writeFileSync('datas.json', JSON.stringify(messages))
    // si le message à été passé a "true" je renvoi un code 200
    res.status(status).send('le message ' + req.params.id + ' est bien lu')
})

/**
 * supprime un message de la liste des messages
 */
app.delete('/messages/:id', (req,res) => {
    let status = 0;
    let temp = messages.filter(msg =>{
        // si l'id du message correspond à celui passé en paramètre de l'url
        return msg.id != req.params.id
    })
    if(temp.length != messages.length){
        status = 200;
        // je met à jour le fichier json
        fs.writeFileSync('datas.json', JSON.stringify(temp))
    }else{
        status = 304;
    }

    // si le message à bien été supprimé je renvoi un code 200
    res.status(status).send('le message ' + req.params.id + ' à bien été supprimé')
})



app.listen(8080)
