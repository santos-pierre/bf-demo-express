const app = require('express')();
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const port = 5000;

/**
 * BASICS
 */
app.use(bodyParser.json());

/**
 * ROUTES
 */
app.use('/users', userRouter);

app.get(['/home', '/'], function (_req, res) {
	res.send('<h1>Hello World</h1>');
});

app.listen(port, () => {
	console.log(`Server is running on port : http://localhost:${port}`);
});
