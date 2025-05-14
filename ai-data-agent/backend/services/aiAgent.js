const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

exports.getSQLQuery = async (question) => {
  const prompt = `Convert the following business question to a SQL query. Then explain the answer:

Question: ${question}`;

  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });

  const output = completion.data.choices[0].message.content;
  const sql = output.match(/```sql\n([\s\S]*?)```/)[1];
  const explanation = output.replace(/```sql[\s\S]*?```/, '').trim();

  return { sql, explanation };
};