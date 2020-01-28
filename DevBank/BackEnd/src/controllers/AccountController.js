const Account = require('../models/Account');
const axios = require('axios');

module.exports = {
  async index(req, res) {
    const accounts = await Account.find();

    return res.json(accounts);
  },

  async store(req, res) {
    const { nameUser, typeAccount, balance, active, key } = req.body;

    let account = await Account.findOne({ nameUser });

    if (!account) {
      const response = await axios.get(`https://api.github.com/users/${nameUser}`);

      const { name = login, avatar_url, bio } = response.data;

      account = await Account.create({
        name,
        nameUser,
        typeAccount,
        balance,
        active,
        avatar_url,
        bio,
        key,
      });

    }

    return res.json(account);
  },

  async deposit(req, res) {
    const { nameUser, value } = req.body;

    const response = await Account.findOne({ nameUser });

    if (response) {
      response.balance += value;

      const account = await Account.findOneAndUpdate({ nameUser }, response, { new: true });

      return res.json(account);
    }

    return res.status(400).json({ error: 'Account does not exist' });
  },

  async withdraw(req, res) {
    const { nameUser, value, key } = req.body;

    const response = await Account.findOne({ nameUser });

    if (!response)
      return res.status(400).json({ error: 'Account not exist' });
    if (key !== response.key)
      return res.status(400).json({ error: 'password does not match' });
    if (response.active === false)
      return res.status(400).json({ error: 'Account disabled' });

    if (response.balance >= value) {
      response.balance -= value;

      const account = await Account.findOneAndUpdate({ nameUser }, response, { new: true });

      return res.json(account);
    }
    return res.status(400).json({ error: 'insufficient funds' });
  },

  async transfer(req, res) {
    const { origin, value, key, destiny } = req.body;

    const responseOrigin = await Account.findOne({ nameUser: origin });
    const responseDestiny = await Account.findOne({ nameUser: destiny });

    if (!responseOrigin)
      return res.status(400).json({ error: 'Origin account not exist' });
    if (!responseDestiny)
      return res.status(400).json({ error: 'Destiny account not exist' });
    if (responseOrigin.active === false)
      return res.status(400).json({ error: 'Origin account disabled' });
    if (responseDestiny.active === false)
      return res.status(400).json({ error: 'Destiny account disabled' });
    if (key !== responseOrigin.key)
      return res.status(400).json({ error: 'password does not match' });

    if (responseOrigin.balance >= value) {
      responseOrigin.balance -= value;
      responseDestiny.balance += value;

      await Account.findOneAndUpdate({ nameUser: origin }, responseOrigin, { new: true });
      await Account.findOneAndUpdate({ nameUser: destiny }, responseDestiny, { new: true });

      return res.json("operation performed successfully");
    }
    return res.status(400).json({ error: 'insufficient funds' });
  },

  async closeAccount(req, res) {
    const { nameUser, key } = req.body;

    const response = await Account.findOne({ nameUser });

    if (!response)
      return res.status(400).json({ error: 'Origin account not exist' });
    if (key !== response.key)
      return res.status(400).json({ error: 'password does not match' });
    if (response.balance !== 0)
      return res.status(400).json({ error: 'balance must be zero' });

    await Account.findOneAndDelete({ nameUser });
    return res.json('deleted account');
  },
}