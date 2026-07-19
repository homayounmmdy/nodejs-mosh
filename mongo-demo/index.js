const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..", err));

const courseSchema = new mongoose.Schema({
  name: {type : String, required : true},
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPUblished: true,
  });

  try {
    const result = await course.save();
    console.log(result);
  }catch (err)  {
    console.log(err.message)
  }
}

async function getCourses() {
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course
    .find({
        author : "Mosh",
        isPublished : true
    })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

async function updateCourseQuery(id) {
  const course = await Course.update(id)
  if (!course) return;
  course.set({
    isPublished = true,
    author : "Author Author"
  });

  const result = await course.save();
  console.log(result)
}

async function updateCourseUpdate(id) {
  const result = await Course.update({ _id : id }, {
    $set: {
      author : "Homayoun",
      isPublished = false
    }
  });

  console.log(result)
}

async function removeCourse(id) {
  const result = await Course.deleteOne({ _id : id });

  console.log(result)
}

createCourse();
