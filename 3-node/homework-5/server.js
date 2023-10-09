const express = require('express');
const app = express();
const mongoose = require('mongoose');
const stackRoutes = require('./routes/stackRoutes');
const projectRoutes = require('./routes/ProjectRoutes');
const reviewsRoutes = require('./routes/ReviewsRoutes');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/stack', stackRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/reviews', reviewsRoutes);

app.get('/', (req, res) => {
	res.json({message: 'Hello From API! Use /api/:category to get something'});
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