USE employee_DB; 

INSERT INTO department (name)
VALUES 
("Sales"),
("Legal"),
("Finance"),
("Marketing");

SELECT * FROM department; 

INSERT INTO role (title,department_id,salary)
VALUES
("Customer Service Agent",1,40000),
("Finance Manager",3,80000),
("Sales Representative",1,35000),
("Accountant",3,65000),
("Sales Manager",1,60000);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES
("Shallan", "Davar",1, 1),
("Adolin", "Kholin",2,NULL),
("Julian", "Blackthorn",4,NULL),
("Robb","Stark",5,2),
("Jem","Carstairs",3,3),
("Kaladin", "Stormblessed",3,4),
("Nesta", "Archeron",5,NULL);

SELECT * FROM employee;
