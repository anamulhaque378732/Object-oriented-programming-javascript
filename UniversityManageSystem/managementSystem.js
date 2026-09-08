// OOP case studies

// Client requirement : Build  a university managemant system where admin ca manage students, guardians, teachers, staff, department , sunject,exams, and accounts.
// Admin can create delete and manage all the resources

// Breackdown The Requirments:

// find the object

/**
 * **** Objects:***
 * 1. person
 * 2. student
 * 3. guardian
 * 4. employee
 * 5. Teacher
 * 6. Staff
 * 7. Department
 * 8. subject
 * 9. exam
 * 10. result
 * 11. Accounts
 * 12. student account
 * 13. Employee Account
 */
// student : id, name, profile, guradian,  Contact[], account, exams[], department,   blood group

// Guardiam : Id, name, Contact:[email, phone,etc], proffession, income, blood group

// Teacher : id, name, Contact[], department, subject, working day,salary, Profile[]

//staff : id, name, contact[],blood group, department,title, salary,

// department : id, name, subjects[], dean(Teacher),teachers

// Subject : id, name, credit, department

// Exam: id, name, passmark, duration, subject, student

// Account : id, type, ammount, date time,

// Contact : id, email, phone number, alternative phone, address{}

// address : id, road number, city, region, country, postal code

// uml diagram:
// ****** student :  *****
/***
 * id:"string"
 * name: string
 * Blood group : string
 * guarding : Guadian {}
 * department: Department
 * exams: Exams[]
 * account: Account
 *
 *
 *
 *
 *
 * **** Guardian ****
 *
 *
 * ******* Contact ***
 *
 *
 * ****** Department ***
 *
 *
 *
 * ****  Account ****
 *
 *
 */

/***
 *
 *
 *
 *
 */
