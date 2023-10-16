const express = require('express');
const app = express();
const mongoose = require('mongoose');
const stackRoutes = require('./routes/stackRoutes');
const projectRoutes = require('./routes/ProjectRoutes');
const reviewsRoutes = require('./routes/ReviewsRoutes');
const {join} = require("path");
require('dotenv').config();

app.set('view engine', 'ejs');
app.set('view cache', false);
app.set('views', join(__dirname, "./views"));
app.use(express.static('views'))
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/stack', stackRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/reviews', reviewsRoutes);

app.get('/', (req, res) => {
	res.render('pages/index');
})
const run = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	} catch (err) {
		console.error(err);
		process.exit(1);
	}

	const port = process.env.PORT || 3000;
	app.listen(port, () => {
		console.log(`Server running on port ${port}`);
	});
}
run();