const terms = [
  {
    iid: 1,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 1,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "React.png",
    },
    title: "react",
    cost: 44,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 50,
    students: [
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "haji",
        email: "@haji",
      },
    ],
  },
  {
    iid: 2,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 2,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Angular.png",
    },
    title: "Angular",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 3,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 4,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
  {
    iid: 3,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 3,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Js.png",
    },
    title: "Js",
    cost: 66,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 5,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 6,
        fullName: "amoo",
        email: "@amoo",
      },
      {
        iid: 61,
        fullName: "daei",
        email: "@daei",
      },
    ],
  },
  {
    iid: 4,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 4,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Sass.png",
    },
    title: "Sass",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 7,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 8,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
  {
    iid: 5,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 5,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Sass.png",
    },
    title: "Sass",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 9,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 1,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
  {
    iid: 6,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 6,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Sass.png",
    },
    title: "react",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 11,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 12,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
  {
    iid: 7,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 7,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Sass.png",
    },
    title: "react",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 13,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 14,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
  {
    iid: 8,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 8,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Sass.png",
    },
    title: "react",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 15,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 16,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
  {
    iid: 9,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 9,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Sass.png",
    },
    title: "react",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 17,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 18,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
  {
    iid: 10,
    teacher: {
      fullName: "amir",
      email: "@amir",
    },
    course: {
      iid: 1,
      topics: ["react", "request", "component"],
      courseName: "react",
      description: "some text",
      image: "Sass.png",
    },
    title: "react",
    cost: 55,
    endDate: "22.22",
    startDate: "11.12",
    capacity: 14,
    students: [
      {
        iid: 19,
        fullName: "haji",
        email: "@haji",
      },
      {
        iid: 2,
        fullName: "amoo",
        email: "@amoo",
      },
    ],
  },
];

export function getTerms() {
  return terms;
}
