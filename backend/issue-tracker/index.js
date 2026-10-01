const express = require("express");
const path = require("path");
const app = express();
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const issues = [
  {
    id: 37,
    title: "Login button not responding",
    description:
      "The login button does nothing when clicked after entering a valid email and password.  ",
    status: "Open",
  },
  {
    id: 38,
    title: "Profile image not loading",
    description:
      "The user's profile image does not appear after refreshing the page.",
    status: "Open",
  },
  {
    id: 39,
    title: "Search results not clearing",
    description:
      "Old search results remain on the page when a new search is submitted.",
    status: "In Progress",
  },
];

app.get("/", (req, res) => {
  res.render("issue.ejs", { issues });
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
