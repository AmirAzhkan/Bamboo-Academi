import { UploadFile } from "../../Services/Api/UploadFile.api";
import { AddCourse } from "../../Services/Api/AddCourse.api";

export const AddCourseOnSubmit = async (values, { resetForm }) => {
  //Send The File That We Get From Our Form To FromData() ::
  const formData = new FormData();
  formData.append("image", values.file);

  //Send The FromData To Upload File Api To Get The Web Link Of Our File ::
  const imageLink = await UploadFile(formData);

  //   console.log(imageLink);

  //Make Course Data As Add Course Api Need To Make A Course ::
  const courseData = {
    courseName: values.courseName,
    topics: values.topics,
    image: imageLink.data.result,
    description: values.description,
  };

  //Send The Course Data To Api ::
  const course = await AddCourse(courseData);

  //Condition To Reset The From Values If The Result Of Creating An Course Was Seccessfull ::
  if ((course.success = true)) {
    setTimeout(() => {
      resetForm();
    }, 5000);
  }
};
