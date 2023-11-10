const getQuotes = (req, res) => {
  res.json({
    _id: 1,
    quote:
      '"The best of people is the one who is most beneficial to people." - Prophet Muhammad (peace be upon him)',
  });
};

module.exports = { getQuotes };
