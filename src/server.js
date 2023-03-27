import http from 'node:http'

// GET /users => Lista usuários no backend
// POST /users -> Cria usuários no backend

const users = []

const server = http.createServer((req, res) => {
    //const method = req.method -> mesma coisa embaixo

    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json') //informar o tipo de response
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        //adicionar um usuário
        users.push({
            id: 1,
            name: 'Fulano',
            email: 'fulano@gmail.com'

        })
        return res.writeHead(201).end() //add status code 201
    }

    return res.writeHead(404).end()
})

server.listen(3333) //localhost:3333