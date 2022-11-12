const Students = require("./Students");


try {

    const s1 = new Students(20, 'qA', 'deePAk', 's1@test.com', 'USA');
    s1.getProfile('S103');
    s1.getProfile('S101');

    console.log('******************');

    const s2 = new Students(22, 'pm', 'sTudent tWO', 's2@test.com', 'CAN');
    s2.dropFromCourse('S200');
    s2.getProfile('S102');
    console.log('****************** Expected: invalid student Id');
    s2.studentData.sStatus = 'Not Enrolled';
    s2.dropFromCourse('S102');
    s2.getProfile('S102');
    console.log('****************** Expected: You are not enrolled in a course - status = Not Enrolled');
    s2.studentData.sStatus = 'Enrolled';
    s2.dropFromCourse('S102');
    s2.getProfile('S102');
    console.log('****************** Expected: We will miss you - status = Dropped');
    

    const s4 = new Students(12, 'Qa');
    s4.getProfile();

    const s3 = new Students(18, 'Qa', 'StudeNT tHReE', 's3@test.com', 'TX');
    s3.getProfile();

} catch (e) {

    console.log('Sorry, cannot proceed with the enrollment.\nPlease provide age, courseName, name, email, address in the same order.');

}