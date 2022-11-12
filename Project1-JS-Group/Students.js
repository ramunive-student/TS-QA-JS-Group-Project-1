const Members = require("./Members");
const Helper = require("./Helper");

    const courseData = [
        {
            cName : 'QA',
            cFee : 4000
        },
         {
            cName : 'Front End',
            cFee : 5000
        },
        {
            cName : 'Full Stack',
            cFee : 8000
        },
        {
            cName : 'PM',
            cFee : 3000
        }
    ]

class Students extends Members {

    // variables (Class/Field variables)
    studentData = {
        sId: 0,
        sStatus: 'Not Enrolled',
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: '',
    }
    // studentData = {
    //     sName: '',
    //     sAge: '',
    //     sId: '',
    //     sEmail: '',
    //     sGrade: '',
    //     sAddress: '',
    //     sCourseDetails: {
    //         sCourseName: '',
    //         sTopicsCovered: '',
    //         sBalance: '',
    //     },
    // }

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


    /**
     *  getProfile************************************************************************************************************************
     *  Programmer:
     *  student has to their student-id as input
     *  if provided student-id is SAME as of this student's id
     *      Print profile as below:
     *          Profile:::
     *              Id: student-name
     *              Name: student-name
     *              Email: student-email
     *              Balance: student-balance
     *              Address: student-address
     *  otherwise
     *      show message -> You have entered invalid id. Invalid id: SXXX
     * 
     */

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


    }

    module.exports = Students; 