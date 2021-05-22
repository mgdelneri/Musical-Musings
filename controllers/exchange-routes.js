const router = require("express").Router();
const { Post, Comment, User, Exchange } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      model: Exchange,
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("all-exchanges", { 
      layout: "exchanges",
      posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

/*router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Exchange,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render("single-post", { 
        layout: 'home',
        post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});*/

module.exports = router;

