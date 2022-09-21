const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const { Post, Image, Comment, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");

const postController = require("../controllers/post");

const router = express.Router();

try {
  fs.accessSync("uploads");
} catch (error) {
  console.log("uploads 폴더가 없으므로 생성합니다.");
  fs.mkdirSync("uploads");
}

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "uploads");
    },
    filename(req, file, done) {
      // 제로초.png
      const ext = path.extname(file.originalname); // 확장자 추출(.png)
      const basename = path.basename(file.originalname, ext); // 제로초
      done(null, basename + "_" + new Date().getTime() + ext); // 제로초15184712891.png
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});

router.post("/", isLoggedIn, upload.none(), postController.addPost);

router.post(
  "/images",
  isLoggedIn,
  upload.array("image"),
  postController.addImages
);
router.post("/:postId/retweet", isLoggedIn, postController.postRetweet);

router.post("/:postId/comment", isLoggedIn, postController.postComment);

router.patch("/:postId/like", isLoggedIn, postController.postLike);

router.delete("/:postId/like", isLoggedIn, postController.deleteLike);

router.delete("/:postId", isLoggedIn, postController.deletePost);

module.exports = router;
