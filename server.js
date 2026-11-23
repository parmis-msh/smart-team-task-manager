const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/api/tasks') {
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Tasks retrieved successfully',
            tasks: [
                { id: 1, title: 'Study Docker', completed: false },
                { id: 2, title: 'Complete project', completed: true }
            ]
        }));
    } 
    
    else if (req.url === '/api/users') {
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Users retrieved successfully',
            users: [
                { id: 1, name: 'Parmis' }
            ]
        }));
    } 
    
    else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Not Found'
        }));
    }
});

const PORT = 3000;

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});
