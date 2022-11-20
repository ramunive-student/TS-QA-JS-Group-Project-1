const Members = require("./Members");
const Helper = require("./Helper");


courseData = [
  {
    cName: "QA",
    salary: 100000,
  },
  {
    cName: "Front End",
    salary: 90000,
  },
  {
    cName: "Back End",
    salary: 120000,
  },
  {
    cName: "PM",
    salary: 150000,
  },
];

class Faculties extends Members {
  // variables (Class/Field variables)
  facultyData = {
    fName: "",
    fAge: 0,
    fId: 0,
    fEmail: "",
    fStatus: "Active",
    fCourseName: "",
    fSalary: 0,
    fDegree: "",
    fAddress: "",
  };

  static facultyIdTracker = 100;

  /**
   * -> Activities a faculty can perform:
   *          -> gradeStudent
   *          -> changeName
   *          -> changeCourse
   *          -> getProfile
   *          -> showMySalary
   *          -> changeAddress
   *          -> resignFromInstitute
   */

  // Requirements for Faculty
  /**
   * -> gradeStudent
   * Faculty will provide studentId and grade as input.
   *
   * if student-id is not present, show message -> student-id is incorrect.
   * if student-id is valid, update grade for the particular student.
   */

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // Hire a faculty member - as a constructor

  constructor(age, courseName, name, email, address) {
    super(); // to execute parent constructor
    if (
      age <= 0 ||
      courseName.length === 0 ||
      name.length === 0 ||
      email.length === 0 ||
      address.length === 0
    ) {
      throw "incomplete data";
    } else {
      const cObject = this.verifyCourseName(courseName);
      if (!cObject) {
        console.log(
          `Please enter a valid course name. Course entered is "${courseName}"`
        );
      } else {
        // start hiring process
        this.memberData.mName = Helper.toTitleCase(name);
        this.memberData.mAge = age;
        this.memberData.mEmail = email;
        this.memberData.mAddress = address.toUpperCase();
        this.facultyData.fSalary = cObject.salary;
        this.facultyData.fCourseName = cObject.cName;
        this.facultyData.fStatus = "Active";
        Faculties.facultyIdTracker++;
        this.facultyData.fId = `F${Faculties.facultyIdTracker}`;

        


        console.log(
          `\nCongratulations for being hired for ${cObject.cName} course.\nFaculty id: F${Faculties.facultyIdTracker}\n`
        );
      }
    }
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  getProfile(providedFacultyId) {
    if (this.facultyData.fId === providedFacultyId) {
      console.log(
        `\n\t:::: Profile :::
            Id: ${this.facultyData.fId}
            Name: ${this.memberData.mName}
            Email: ${this.memberData.mEmail}
            Address: ${this.memberData.mAddress}
            Course Name: ${this.facultyData.fCourseName}
            Salary: ${this.facultyData.fSalary}
            Faculty Status: ${this.facultyData.fStatus}
            
            ----------------------\n`
      );
    } else {
      console.log(
        `\nYou have entered an invalid faculty-id. Faculty-id entered was ${providedFacultyId}\n`
      );
    }
  }

  //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  changeName(newName, facultyId) {
    if (facultyId === this.facultyData.fId) {
        
      if (Helper.toTitleCase(newName) !== this.memberData.mName) {
        this.memberData.mName = Helper.toTitleCase(newName);
        console.log(`Name is changed to '${this.memberData.mName}' successfully`);
      } else {
        console.log("You are already registered with same name.");
      }
    } else {
      console.log(`You have entered invalid id. Invalid id: ${facultyId}`);
    }
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  changeAddress(newAddress, facultyId) {
    if (this.facultyData.fId === facultyId) {
      if (newAddress.toLowerCase() !== this.memberData.mAddress.toLowerCase()) {
        this.memberData.mAddress = newAddress.toUpperCase();
        console.log(`Address is changed to ${newAddress} successfully.`);
      } else {
        console.log("You are already have same address in the system.");
      }
    } else {
      console.log(`You have entered invalid id. Invalid id: ${facultyId}`);
    }
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//   changeCourse (newCourseName, facultyId){
//     if ( facultyId === this.facultyData.fId){
//         const fCourseName = this.verifyCourseName(newCourseName);
//         if(!fCourseName)
//         {
//             console.log(`You are already registered in the ${newCourseName} course`);
//         }
//         else
//         {
//              this.facultyData.fSalary = fCourseName.salary         
//             this.facultyData.fCourseName = fCourseName.fName
//             console.log(`Your course has been updated to ${newCourseName.toUpperCase()}`);
//         }
//     }
//     else
//     {
//         console.log(`You have entered invalid id. Invalid id: ${facultyId}`);
//     }
// }

changeCourse(newCourseName, facultyId) {
  if (facultyId === this.facultyData.fId) {
    const courseName = this.verifyCourseName(newCourseName);

    if(courseName){
      if(this.facultyData.fCourseName.toLowerCase() === newCourseName.toLowerCase()){
        console.log(`You are already registered to teach the ${newCourseName.toUpperCase()} course`);
      }else{
        this.facultyData.fCourseName = courseName.cName;
        this.facultyData.fSalary = courseName.salary;
        console.log(
          `Your course has been updated to ${newCourseName.toUpperCase()}`
        );


      }

    }else{
      console.log(`You have entered an invalid course name. Invalid course: ${newCourseName}`);
    }

  } else {
    console.log(`You have entered invalid id. Invalid id: ${facultyId}`);
  }
}


  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  gradeStudent(providedStudentId, grade) {
    if (this.studentData.sId !== providedStudentId) {
      console.log(
        `Student-id is incorrect. Provided Student Id: ${providedStudentId}`
      );
    } else {
      this.facultyData.fDegree = grade.toUpperCase();
    }
  }

  //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  resignFromInstitute(providedFacultyId) {
    if (this.facultyData.fId === providedFacultyId) {
      if (
        this.facultyData.fStatus
          .toLowerCase()
          .localeCompare("Active".toLocaleLowerCase()) === 0
      ) {
        this.facultyData.fStatus = "Inactive";
        console.log('\nYour faculty status has been changed to "Inactive"\n');
      } else {
        console.log("\nYou are not currently an active faculty member\n");
      }
    } else {
      console.log(
        `\nYou have entered an invalid faculty-id. Faculty-id entered was ${providedFacultyId}\n`
      );
    }
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  showMySalary(facultyId) {
    if (facultyId === this.facultyData.fId) {
      {
        console.log(`your salary is $${this.facultyData.fSalary}`);
      }
    } else {
      console.log(`You have entered invalid id. Invalid id: ${facultyId}`);
    }
  }

  //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  verifyCourseName(courseName) {
    return courseData.find(
      (cData) =>
        cData.cName.toUpperCase().localeCompare(courseName.toUpperCase()) === 0
    );
  }
}
module.exports = Faculties;
