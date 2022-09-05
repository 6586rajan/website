import initTilt from "./tilt";
import initSr from "./sr";
import { addResume, responsiveSlider } from "./utils";
// import resume from "../assets/resume.pdf";
import resume1 from "../assets/Rajan_Srimat_Resume_2.pdf";
import resume2 from "../assets/Rajan_Srimat_Resume_3.pdf";
import resume3 from "../assets/Rajan_Srimat_Resume_4.pdf";

export default function initApp() {
  initSr();
  initTilt();
  responsiveSlider(); 
  var resumes = [
    resume3,
    resume2,
    resume1
  ];
  // comment this if you don't want to attach your resume
  addResume(resumes);
}
