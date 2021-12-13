INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

-- Role seeds
INSERT INTO role (title, salary, department_id)
VALUES  ("Lead Engineer", 150000, 2),
        ("Legal Team Lead", 250000, 4),
        ("Accountant", 125000, 3),
        ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Software Engineer", 120000, 2),
        ("Lawyer", 190000, 4);

-- Employee seeds
INSERT INTO employee (first_name, last_name, manager_id, role_id)
VALUES  ("Alonso", "Fernandes", null, 1);
        ("Marco", "Polo", null, 2);
        ("Philip","Lahm",null,3);
        ("Matteo", "Di Tello", 1, 4);
        ("Chris", "Pratt", 4, 5);
        ("Maria", "Alvarez", 1, 6);
        ("Christine", "Leblanc", 2, 7);

-- Selecting for creating tables in sql
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;