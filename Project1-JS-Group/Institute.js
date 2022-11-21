const Students = require("./Students");
const Faculties = require("./Faculties");


//student test cases
try {

    //    const s1 = new Students(20, 'qA', 'deePAk', 's1@test.com', 'USA');
    //     s1.getProfile('S103');
    //     s1.getProfile('S101');
        
        // s1.changeName('suSAn sMiTH');
        // s1.getProfile('S101');
        // console.log('****************** Expected: student name successfully changed');
        // //console.log(s1.studentData.sBalance);
        // //s1.getProfile();
        // console.log('******************');
    
        // const s2 = new Students(22, 'pm', 'sTudent tWO', 's2@test.com', 'CAN');
        // s2.dropFromCourse('S200');
        // s2.getProfile('S102');
        
    
        // //s2.getProfile();
        // console.log('****************** Expected: invalid student Id');
        // s2.studentData.sStatus = 'Not Enrolled';
        // s2.dropFromCourse('S102');
        // s2.getProfile('S102');
        // //s2.getProfile();
        // console.log('****************** Expected: You are not enrolled in a course - status = Not Enrolled');
        // s2.studentData.sStatus = 'Enrolled';
        // s2.dropFromCourse('S102');
        // s2.getProfile('S102');
        // //s2.getProfile();
        // console.log('****************** Expected: We will miss you - status = Dropped');
        
    
        // const s4 = new Students(12, 'Qa');
        // s4.getProfile();
    
        // const s3 = new Students(18, 'Qa', 'StudeNT tHReE', 's3@test.com', 'TX');
        // s3.getProfile();
    
        
        const f1 = new Faculties(50, 'qA','A. newFaculty', 'f1@test.com', 'NY');
        f1.getProfile('F101');
        console.log('\n');
        
        const f2 = new Faculties(32, 'Pm', 'joHN dOe', 'f2@test.com', 'CA');
        f2.getProfile('F102');
        console.log('\n');
        
        console.log(f2.facultyData.fSalary);
        
        f1.getProfile('F200');
        console.log('****************** Expected: invalid faculty Id\n');
    
    
        const f3 = new Faculties(50, 'Math','James Bond', 'f3@test.com', 'London');
        console.log('****************** Expected: invalid course name\n');
    
        f1.changeName('A. newFaculty', 'F101');
        console.log('****************** Expected: same name entered\n');
    
    
        f1.changeName('sUsan sMith', 'F101');
        console.log('****************** Expected: Name successfully changed\n');
    
        f1.changeName('sUsan sMith', 'F200');
        console.log('****************** Expected: Invalid faculty id\n');
    
        f1.changeAddress('NY', 'F101');
        console.log('****************** Expected: Same address\n');
    
        f1.changeAddress('NJ', 'F101');
        console.log('****************** Expected: address updated\n');
    
        f1.changeAddress('NJ', 'F200');
        console.log('****************** Expected: invalid faculty id\n');
    
        f1.getProfile('F101');
    
        f1.changeCourse('qA', 'F101');
        console.log('****************** Expected: same course name\n');
    
        f1.changeCourse('hello', 'F101');
        console.log('****************** Expected: invalid course name\n');
    
        f1.changeCourse('qA', '200');
        console.log('****************** Expected: invalid faculty id\n');
    
        f1.changeCourse('Pm', 'F101');
        console.log('****************** Expected: update course\n');
    
        f1.getProfile('F101');
    
        f1.showMySalary('F101');
        console.log('****************** Expected: Show salary\n');
    
        f1.showMySalary('F200');
        console.log('****************** Expected: invalid id\n');
    
    
    
    
        
        
        // const f4 = new Faculties(50, 'f4@test.com', 'NY');
        // //console.log('****************** Expected: Cannot proceed with setup due to incomplete data - missing name\n');
    
    } catch (e) {
    
        console.log('Sorry, cannot proceed with setup.\nPlease provide age, courseName, name, email, address in the same order.');
    
    }