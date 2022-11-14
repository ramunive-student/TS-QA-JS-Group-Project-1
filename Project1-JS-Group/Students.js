const Members = require("./Members");
const Helper = require("./Helper");
const { calendarFormat } = require("moment");

    const courseData = [
        {
            cName : 'QA',
            cFee : 4000
        },
         {
            cName : 'Front End',
            cFee : 3000
        },
        {
            cName : 'Back End',
            cFee : 5000
        },
        {
            cName : 'PM',
            cFee : 8000 
        }
    ]

class Students extends Members {

    // variables (Class/Field variables)
    studentData = {
        sId: 0,
        sStatus: 'Enrolled',
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: '',
    }

    static studentIdTracker = 100;

    /*
        functions
    */
    /**
     * Create software for student enrollment and other student related activity***************************************************************************************************
     * 
     *      -> Activities a student can perform:
     *          -> enrollment
     *          -> changeName
     *          -> changeCourse
     *          -> getProfile
     *          -> makePayment
     *          -> changeAddress
     *          -> dropFromCourse
     * 
     *  -> Activities a faculty can perform:
     *          -> changeName
     *          -> gradStudent
     *          -> changeCourse
     *          -> getProfile
     *          -> showMySalary
     *          -> changeAddress
     *          -> resignFromInstitute
     *          
     */


    /**
     *  enrollment**********************************************************************************************************************************************************************
     *  Programmer: Janery
     *  age >= 16
     *      if not, do not enroll and show message, Student has to be of age 16 or above
     * 
     *  if invalid course name 
     *      do not enroll and show message, Please enter a valid course name. Course entered is "ABC"
     * 
     * if data is correct
     *          update attributes in studentData
     *              1. store name in Title Case
     *              2. store address in UPPERCASE
     *              3. store course-name as mentioned in CourseData-Name
     *              4. store balance as of in CourseData-Fee
     *          generate id for the student
     *          show message, Congratulations for enrolling in XYZ course
     *                    Your student id : XX
     */


// enrollment as a constructor

constructor(age, courseName, name, email, address) {
    super();    // to execute parent constructor
    if (age <= 0 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
        throw 'incomplete data';
    } else {
        if (age <= 16) {
            console.log('Student has to be of age 16 or above');
        } else {
            const cObject = this.verifyCourseName(courseName);
            if (!cObject) {
                console.log(`Please enter a valid course name. Course entered is "${courseName}"`);
            } else {
                // start enrollment process
                this.memberData.mName = Helper.toTitleCase(name);
                this.memberData.mAge = age;
                this.memberData.mEmail = email;
                this.memberData.mAddress = address.toUpperCase();
                this.studentData.sBalance = cObject.cFee;
                this.studentData.sCourseName = cObject.cName;
                this.studentData.sStatus = 'Enrolled'
                Students.studentIdTracker++;
                this.studentData.sId = `S${Students.studentIdTracker}`;
                console.log(`Congratulations for enrolling in ${cObject.cName} course.\nStudent id: S${Students.studentIdTracker}`);
            }
        }
    }
}

    /**
     * verifyCourseName***************************************************************************************************************
     * Programmer:
     * This function is to verify 
     *  if the courseName exists as one of the courses in the courseData
     * 
     * if courseName exists
     *      returns courseObject
     * otherwise
     *      returns undefined
     * 
     */

    verifyCourseName(courseName) {
        return courseData.find(
            cData => cData.cName.toUpperCase().localeCompare(courseName.toUpperCase()) === 0
        )
    }

    /**
     * getProfile************************************************************************************************************************
     * Programmer:
     * student has to their student-id as input
     * if provided student-id is SAME as of this student's id
     *     Print profile as below:
     *          Profile:::
     *          Id: student-id
     *          Name: student-name
     *          Email: student-email
     *          Balance: student-balance
     *          Address: student-address
     * otherwise
     *      show message -> You have entered invalid id. Invalid id: SXXX
     */
   
    
    getProfile(providedStudentId) {

        if (this.studentData.sId === providedStudentId){
            console.log(
                `\n\t:::: Profile :::
                Id: ${this.studentData.sId}
                Name: ${this.memberData.mName}
                Email: ${this.memberData.mEmail}
                Address: ${this.memberData.mAddress}
                Course Name: ${this.studentData.sCourseName}
                Balance: ${this.studentData.sBalance}
                Student Status: ${this.studentData.sStatus}
                
                
                ----------------------\n`
            );
         } else{
             console.log(`\nYou have entered an invalid student-id. Student-id entered was ${providedStudentId}\n`);


         }
    }

    // changeName********************************************************************************************************************************
    // Programmer: Serkan
    /**
     * student has to provide newName and their student-id as input
     *  if provided student-id is SAME as of this student's id
     *      if newName is NOT same as stored-name
     *          change name in studentData and show message, Name is changed to "newName" successfully.
     *      otherwise
     *          show message, You are already registered with same name.
     *  otherwise
     *      show message -> You have entered invalid id. Invalid id: SXXX
     */


     changeName (newStudentName, studentId){
        if ( studentId === this.studentData.sId)
        {
            if (newStudentName !== this.memberData.mName)
            {
                this.memberData.mName = newStudentName;
                console.log(`Name is changed to '${newStudentName}' successfully`);
            } 
            else 
            {
                console.log('You are already registered with same name.');
            }
        } else 
        {
            console.log(`You have entered invalid id. Invalid id: ${studentId}`);
        }       
    }

// changeCourse*******************************************************************************************************************************
    // Programmer: Dren
    /**
     * student has to provide newName and their student-id as input
     *  if provided student-id is SAME as of this student's id
     *      if newName is NOT same as stored-name
     *          change name in studentData and show message, Name is changed to "newName" successfully.
     *      otherwise
     *          show message, You are already registered with same name.
     *  otherwise
     *      show message -> You have entered invalid id. Invalid id: SXXX
     */    

     changeCourse (newCourseName, studentId){
        if ( studentId === this.studentData.sId){
            const dren = this.verifyCourseName(newCourseName);
            if(!dren)
            {
                console.log(`You are already registered in the ${newCourseName} course`);
            }
            else
            {
                this.studentData.sBalance = dren.cFee
                this.studentData.sCourseName = dren.cName
                console.log(`Your course has been updated to ${newCourseName.toUpperCase()}`);
            }
        }
        else
        {
            console.log(`You have entered invalid id. Invalid id: ${studentId}`);
        }
    }

    // makePayment********************************************************************************************************************************
    //Programmer: Dorvan
    /**
     * student has to provide paymentAmount and their student-id as input
     *  if provided student-id is SAME as of this student's id
     *      if balance is greater than 0
     *          update studentData.sBalance accordingly
     *          show message -> Thank you for making payment. Your updated balance is XX.yy
     *      otherwise
     *          show message, No payment is required at this time.
     *  otherwise
     *      show message -> You have entered invalid id. Invalid id: SXXX
     */


     makePayment(paymentAmount, studentId){
        if(studentId === this.studentData.sId){
            if(this.studentData.sBalance > 0)
            {
                this.studentData.sBalance = this.studentData.sBalance - paymentAmount
                console.log(`Thank you for making payment. Your updated balance is ${this.studentData.sBalance}`);
            }
            else
            {
                console.log('No payment is required at this time.');
            }
        }
        else
        {
            console.log(`You have entered invalid id. Invalid id: ${studentId}`);
        }
    }

    //changeAddress*******************************************************************************************************************************
    //Programmer: Konstancia
    /**
     *  student has to provide newAddress and their student-id as input
     *  if provided student-id is SAME as of this student's id
     *      if newAddress is NOT same as stored-address (ignoring cases)
     *          update studentData.sAddress with newAddress (store in UPPERCASE)
     *          show message, Address is changed to "newAddress" successfully.
     *      otherwise
     *          show message, You are already have same address in the system.
     *  otherwise
     *      show message -> You have entered invalid id. Invalid id: SXXX
     * 
     */

    changeAddress(newAddress, studentId){
        if(this.studentData.sId === studentId){
            if(newAddress.toLowerCase() !== this.memberData.mAddress.toLowerCase()){
                this.memberData.mAddress = newAddress.toUpperCase()
                console.log(`Address is changed to ${newAddress.toUpperCase()} successfully.`);
            }else{
                console.log('You are already have same address in the system.');
            }
        }else{
            console.log(`You have entered invalid id. Invalid id: ${studentId}`);
        }
    }

    //dropFromCourse*******************************************************************************************************************************
    //Programmer: Roberta
    /**
     * student has to provide the studentId as input
     *      if provide-id is same as the studentId
     *          make student status as "Dropped"/false
     *          show message -> We will miss you; hope you join our future batch.
     *      otherwise,
     *          show message, You have entered invalid student-id
     */


  
    dropFromCourse(providedStudentId){
        if (this.studentData.sId === providedStudentId){
            if(this.studentData.sStatus.toLowerCase().localeCompare('Enrolled'.toLocaleLowerCase()) === 0){
                this.studentData.sStatus = 'Dropped';
                console.log('\nWe will miss you; hope you join our future batch\n');
            }else{
                console.log('\nYou are not currently enrolled in a course\n');
            }
        } else{
            console.log(`\nYou have entered an invalid student-id. Student-id entered was ${providedStudentId}\n`);


        }

    }

}


module.exports = Students;