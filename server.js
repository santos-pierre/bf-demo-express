const app = require('express')();
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const port = 5000;

app.use(bodyParser.json(), userRouter);

app.get(['/home', '/'], function (_req, res) {
	res.send('<h1>Home Page</h1>');
});

app.listen(port, () => {
	console.log(`Server is running on port : http://localhost:${port}`);
});
