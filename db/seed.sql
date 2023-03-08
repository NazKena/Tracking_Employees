USE employee_DB; 

INSERT INTO department (name)
VALUES 
("Sales"),
("Legal"),
("Finance"),
("Marketing");

SELECT * FROM department; 

INSERT INTO role (title,id,salary)
VALUES
("Customer Service Agent",1,40000),
("Finance Manager",5,80000),
("Sales Representative",2,35000),
("Accountant",3,65000),
("Sales Manager",4,60000);

SELECT * FROM role;

INSERT INTO employee (first_name, last_name, id, manager_id)
VALUES
("Shallan", "Davar",1, 1),
("Adolin", "Kholin",2,NULL),
("Julian", "Blackthorn",4,NULL),
("Robb","Stark",5,2),
("Jem","Carstairs",3,3),
("Kaladin", "Stormblessed",6,4),
("Nesta", "Archeron",7,NULL);

SELECT * FROM employee;
