// const express = require("express");
// const { isLoggedIn , logout } = require("../Controller/authController");
// const { getDemoPage , getHomePage, getLoginPage, getSignUpPage, getPlansPage , getResetPasswordPage  , getProfilePage} = require("../Controller/viewController");

// const viewRouter = express.Router();

// viewRouter.route("").get(getDemoPage);
// viewRouter.route("/home").get(getHomePage);
// viewRouter.route("/login").get(getLoginPage);
// // viewRouter.route("/resetpassword/:token").get(getResetPasswordPage);
// viewRouter.route("/signup").get(getSignUpPage);
// viewRouter.route("/plans").get(getPlansPage);
// // viewRouter.route("/profile").get(getProfilePage);


// module.exports = viewRouter;
const express = require("express");
const { isLoggedIn ,logout } = require("../Controller/authController");
const { getDemoPage, getHomePage, getLoginPage, getPlansPage ,getForgetPasswordPage,getReviewPage, getResetPasswordPage ,getProfilePage} = require("../Controller/viewController");
const viewRouter = express.Router();
viewRouter.use(isLoggedIn);
viewRouter.route("").get(getHomePage);
viewRouter.route("/reviews").get(getReviewPage);
viewRouter.route("/logout").get(logout);
viewRouter.route("/login").get(getLoginPage);
viewRouter.route("/plans").get(getPlansPage);
viewRouter.route("/resetpassword/:token").get(getResetPasswordPage);
viewRouter.route("/forgetpassword").get(getForgetPasswordPage);
viewRouter.route("/profile").get(getProfilePage);
module.exports = viewRouter;