const aiAgent = require('../services/aiAgent');
const db = require('../config/db');

exports.handleQuery = async (req, res) => {
  const { question } = req.body;
  try {
    const { sql, explanation } = await aiAgent.getSQLQuery(question);
    db.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ explanation, data: results });
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};