const express = require('express');
const multer = require('multer');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadsDir = './uploads/';
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir);
    }
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/newTransactions', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.get('/dash', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/upload', upload.single('file'), function (req, res, next) {
  const mindee = require("mindee");

  // Init a new client
  const mindeeClient = new mindee.Client({ apiKey: process.env.apiKey });

  // Load a file from disk and parse it
  const apiResponse = mindeeClient
    .docFromPath(req.file.path)
    .parse(mindee.ReceiptV4);

  // Print a brief summary of the parsed data
  apiResponse.then((resp) => {

    if (resp.document === undefined) return;
    
    // remove image file in uploads folder
    fs.unlink(req.file.path, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error removing the file');
      }
      console.log("File removed");
    });

    const data = resp.document
    const category = data.category.value;
    const date = data.date.value;
    const supplier = data.supplier.value;
    const totalAmount = data.totalAmount.value;

    const all = {
      category,
      date,
      supplier,
      totalAmount,
    }

    // full object
    res.json(all);
  });
});



// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running at http://localhost:${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
// Call the async function to start the server
  startApolloServer(typeDefs, resolvers);
