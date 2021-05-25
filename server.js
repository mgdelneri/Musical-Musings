const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const cloudinary = require('cloudinary');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

cloudinary.config({
    cloud_name: 'dustingottlieb',
    api_key: '384262337385414',
    api_secret: 'I892sxli4ZxOTCvgQPdGIN_hZ9k'
});

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.get("/api/files", async(req, res) => {
    const images = await cloudinary.v2.api.resources({
        type: "upload",
        prefix: "image"
    });
    return res.json(images);
});

app.get("/files", async(req, res) => {
    const images = await cloudinary.v2.api.resources({
        type: "upload",
        prefix: "image"
    });
    // Check if files
    if (!images || images.length === 0) {
        return res.status(404).json({
            err: "No files exist"
        });
    }
    // Files exist
    res.render("files", {
        images: images
    });
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('images'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`);
    sequelize.sync({ force: false });
});