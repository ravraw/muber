const app = require("./app");

const Port = process.env.PORT || 3005;

app.listen(Port, () => {
  console.log(`Server listening on ${Port}.....`);
});
