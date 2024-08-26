const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

module.exports = {
	port: 5000,
	// Set mongoose configuration
	mongoose: {
		url: process.env.MONGODB_URL,
		options: {
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
			// useCreateIndex: true, // Remove this line
			// useFindAndModify: false, // Also no longer needed
		},
	},
};
