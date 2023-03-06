USE employee_DB

INSERT INTO department (name)
VALUES 
("Sales"),
("Legal"),
("Finance"),
("Marketing");

INSERT INTO job_role (title, id, salary, department_id)
VALUES
("Customer Service Agent",3,40000,3),
("Finance Manager",1,80000,3),
("Sales Representative",5,35000,4),
("Accountant",6,65000,2),
("Sales Manager",2,60000,1),
("Lawyer",4,50000,3);


INSERT INTO employee (first_name,last_name,manager_id)
VALUES
("Shallan", "Davar",null),
("Adolin", "Kholin",1),
("Julian", "Blackthorn",NULL),
("Robb","Stark", 3),
("Jem","Carstairs",3),
("Kaladin", "Stormblessed",1),
("Petyr", "Baelish",NULL),
("Nesta", "Archeron",null);