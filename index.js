const server = require('./api/server');

// START YOUR SERVER HERE
sever.listen(9000, () => {
    console.log('listening');
})