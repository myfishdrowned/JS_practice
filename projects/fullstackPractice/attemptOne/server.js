if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); // Load environment variables in development mode
}

const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');

// Middleware and settings
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to Mongoose');
}).catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
});

// Routes
app.use('/', indexRouter);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
