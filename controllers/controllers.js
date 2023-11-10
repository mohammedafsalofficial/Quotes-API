const getQuotes = (req, res) => {
  res.send(
    '"The best of people is the one who is most beneficial to people." - Prophet Muhammad (peace be upon him)'
  );
};

module.exports = { getQuotes };
