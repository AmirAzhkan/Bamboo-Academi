import { UploadFile } from "../../Services/Api/UploadFile.api";
import { EditCourse } from "../../Services/Api/EditCourse.api";

export const EditCourseOnSubmit = async (
  values,
  courseId,
  refreshCoursesInfo,
  manageModal
) => {
  //Send The File That We Get From Our Form To FromData() ::
  const formData = new FormData();
  formData.append("image", values.file);

  let imageLink = "";
  //Send The FromData To Upload File Api To Get The Web Link Of Our File ::
  if (typeof values.file !== "string") {
    imageLink = await UploadFile(formData);
  }

  //Make Course Data As Edit Course Api Need To Make An Course ::
  const courseData = {
    courseName: values.courseName,
    topics: values.topics,
    image:
      typeof values.file === "string" ? values.file : imageLink.data.result,
    description: values.description,
  };

  //Send The Course Data To Api ::
  const course = await EditCourse(
    courseData,
    courseId,
    refreshCoursesInfo,
    manageModal
  );
};
