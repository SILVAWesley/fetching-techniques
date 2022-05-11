const fs = require("fs");

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = {
  getParcialContacts: (req, res) => {
    const contacts = JSON.parse(
      fs.readFileSync("./models/small-contacts.json")
    );

    res.json({ contacts });
  },
  getAllContacts: async (req, res) => {
    const contacts = JSON.parse(fs.readFileSync("./models/big-contacts.json"));

    /* Delay simulando banco de dados */
    await delay(10000);

    res.json({ contacts });
  },
};
