const express = require('express');
const cors = require('cors');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API RUNNING');
});
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/cartRoutes'));
app.use(errorHandler);
app.use(notFound);

app.listen(PORT, () => {
  console.log(`The server is running on port: ${PORT}`);
});
