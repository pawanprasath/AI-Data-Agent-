3–5 Example Complex Business Questions
1. "What is the average salary of employees hired after 2021, grouped by department?"
SQL:

sql
Copy
Edit
SELECT department, AVG(salary) as avg_salary 
FROM employees 
WHERE hire_date > '2021-01-01' 
GROUP BY department;
Result: Displays department-wise average for recent hires.

Complexity: Requires filtering and aggregation.

2. "List the departments where the average salary is below 60,000."
SQL:

sql
Copy
Edit
SELECT department 
FROM employees 
GROUP BY department 
HAVING AVG(salary) < 60000;
Use case: Identifies under-compensated departments.

3. "Show employees from the HR or Marketing departments hired after 2022."
SQL:

sql
Copy
Edit
SELECT * 
FROM employees 
WHERE (department = 'HR' OR department = 'Marketing') 
  AND hire_date > '2022-01-01';
Highlights cross-conditional filtering.

4. "What is the total salary expense per department?"
SQL:

sql
Copy
Edit
SELECT department, SUM(salary) as total_expense 
FROM employees 
GROUP BY department;
Useful for budgeting analysis.

5. "Find the employee with the highest salary in each department."
SQL:

sql
Copy
Edit
SELECT e1.* 
FROM employees e1
JOIN (
  SELECT department, MAX(salary) as max_salary
  FROM employees
  GROUP BY department
) e2 ON e1.department = e2.department AND e1.salary = e2.max_salary;
Shows subqueries and joins handling by AI agent.
