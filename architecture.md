Solution Architecture – AI Data Agent
1. Overview
The application is a full-stack AI-powered web interface that interprets complex business questions, converts them into SQL queries using GPT-3.5, runs them against a MySQL database, and returns human-readable insights and data visualizations.

2. System Components
Frontend (React)
ChatBox.js: Accepts user input and sends it to the backend.
ResponseTable.js: Renders tabular data returned from the query.
ChartRenderer.js: (Planned) Renders visual charts like bar or pie based on results.
Backend (Node.js + Express)
queryController.js: Receives business questions from frontend and orchestrates AI/DB interaction.
aiAgent.js: Uses OpenAI’s GPT model to convert questions to SQL and provide explanations.
db.js: Manages MySQL connection.
dataCleaner.js: Placeholder for cleaning dirty data or normalizing it.
Database (MySQL)
A complex dataset in employees table with fields like salary, department, and hire_date.

3. Process Flow
User inputs a business question.
Frontend sends it to /api/ask.
Backend sends it to OpenAI with a SQL-generation prompt.
OpenAI returns the SQL + explanation.
SQL is executed against MySQL.
Result and explanation are sent back to the frontend.
Data is rendered in a table (and potentially in charts).

4. AI Prompt Logic
Prompt example used in aiAgent.js:
css
Copy
Edit
Convert the following business question to a SQL query. Then explain the answer:

Question: {user_input}
This ensures that GPT not only provides a valid SQL query but also returns a natural language explanation.

5. Flexibility
Can be extended to support dirty schema, multiple tables, joins, null values, and vague questions.
Future-ready to plug in additional LLMs (Claude, Mistral, etc.).
