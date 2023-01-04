enum Carrier {
  FRONTEND = "frontend",
  BACKEND = "backend",
  QA = "qa",
  DESIGN = "design",
}
enum Seniority {
  JUNIOR = "junior",
  MIDDLE = "middle",
  SENIOR = "senior",
}

enum WorkType {
  REMOTE = "remote",
  OFFICE = "office",
  HYBRID = "hybrid",
}

enum JobPlatform {
  TELEGRAM = "Telegram",
  LINKEDIN = "LinkedIn",
  GLASSDOOR = "Glassdoor",
  HH = "HH",
  MONSTER = "Monster",
  INDEED = "Indeed",
}

interface UserContacts {
  userContactId: string;
  phone: string;
  email: string;
  country: string;
}

interface Position {
  positionId: string;
  carrier: Carrier;
  seniority: Seniority;
}

export interface UserData {
  userId: string;
  userName: string;
  userLastName: string;
  contacts: UserContacts;
  workType: WorkType;
  salaryExpectations: number;
  experience: number;
  languages: string[];
  position: Position;
  techStack: string[];
  vacancies: Vacancy[];
  vacancyStatusList: VacancyStatus[];
}

export type UserInputs = {
  name: UserData["userName"];
  lastName: UserData["userLastName"];
  phone?: UserData["contacts"]["phone"];
  email: UserData["contacts"]["email"];
  userCountry?: UserData["contacts"]["country"];
  preferredCountry?: string;
  workType?: UserData["workType"];
  salaryExpectations?: UserData["salaryExpectations"];
  experience?: UserData["experience"];
  languages?: UserData["languages"];
  position?: UserData["position"];
  techStack?: UserData["techStack"];
};

type Status = "rejected" | "accepted" | "pending";

interface VacancyStatus {
  status: Status;
  interview: {
    date: string;
    linkToMeeting: string;
  } | null;
  testAssignment: {
    deadline: string;
    linkToAssignment: string;
  } | null;
}

export interface Vacancy {
  id: string;
  salary: string;
  vacancyStatus: VacancyStatus;
  jobTitle: Carrier;
  userStatus: Status;
  seniority: Seniority;
  experience: string;
  companyName: string;
  description: string;
  userIds: string[];
  location: string;
  jobPlatform: JobPlatform;
}

export default [
  {
    salary: "$1000",
    id: "1",
    vacancyStatus: {
      status: "pending",
      interview: {
        date: "02/05/2020",
        linkToMeeting: "https://example.com/meeting",
      },
      testAssignment: null,
    },
    jobTitle: Carrier.FRONTEND,
    userStatus: "accepted",
    seniority: Seniority.JUNIOR,
    experience: "3 years",
    companyName: "Apple",
    description:
      "We are looking for an experienc4ed Frontend Developer to join our team.",
    userIds: ["user01", "user02"],
    location: "USA",
    jobPlatform: JobPlatform.TELEGRAM,
  },
  {
    salary: "$1000",
    id: "2",
    vacancyStatus: {
      status: "rejected",
    },
    jobTitle: Carrier.BACKEND,
    userStatus: "pending",
    seniority: Seniority.MIDDLE,
    experience: "5 years",
    companyName: "Google",
    description:
      "We are looking for an experienced Backe1nd Developer to join our team.",
    userIds: ["user03", "user04"],
    location: "USA",
    jobPlatform: JobPlatform.LINKEDIN,
  },
  {
    salary: "$1000",
    id: "3",
    vacancyStatus: {
      status: "pending",
      interview: null,
      testAssignment: {
        deadline: "12/05/2020",
        linkToAssignment: "https://example.com/assignment",
      },
    },
    jobTitle: Carrier.QA,
    userStatus: "accepted",
    seniority: Seniority.SENIOR,
    experience: "7 years",
    companyName: "Amazon",
    description:
      "We are looking for an experienced QA Eng4ineer to join our team.",
    userIds: ["user05", "user06"],
    location: "USA",
    jobPlatform: JobPlatform.GLASSDOOR,
  },
  {
    salary: "$1000",
    id: "4",
    vacancyStatus: {
      status: "pending",
      interview: {
        date: "14/05/2020",
        linkToMeeting: "https://example.com/meeting",
      },
      testAssignment: null,
    },
    jobTitle: Carrier.DESIGN,
    userStatus: "rejected",
    seniority: Seniority.MIDDLE,
    experience: "4 years",
    companyName: "Facebook",
    description:
      "We are looking for an e1xperienced Designer to join our team.",
    userIds: ["user07", "user08"],
    location: "USA",
    jobPlatform: JobPlatform.HH,
  },
  {
    salary: "$1000",
    id: "5",
    vacancyStatus: {
      status: "accepted",
      interview: null,
      testAssignment: null,
    },
    jobTitle: Carrier.FRONTEND,
    userStatus: "pending",
    seniority: Seniority.JUNIOR,
    experience: "2 years",
    companyName: "Microsoft",
    description:
      "We are looking for 4an experienced Frontend Developer to join our team.",
    userIds: ["user09", "user10"],
    location: "USA",
    jobPlatform: JobPlatform.MONSTER,
  },
  {
    salary: "$1000",
    id: "6",
    vacancyStatus: {
      status: "pending",
      interview: {
        date: "25/05/2020",
        linkToMeeting: "https://example.com/meeting",
      },
      testAssignment: null,
    },
    jobTitle: Carrier.BACKEND,
    userStatus: "rejected",
    seniority: Seniority.SENIOR,
    experience: "6 years",
    companyName: "IBM",
    description:
      "We are looking for an experienced B4ackend Developer to join our team.",
    userIds: ["user11", "user12"],
    location: "USA",
    jobPlatform: JobPlatform.TELEGRAM,
  },
  {
    salary: "$1000",
    id: "7",
    vacancyStatus: {
      status: "pending",
      interview: null,
      testAssignment: {
        deadline: "02/06/2020",
        linkToAssignment: "https://example.com/assignment",
      },
    },
    jobTitle: Carrier.QA,
    userStatus: "accepted",
    seniority: Seniority.MIDDLE,
    experience: "5 years",
    companyName: "Airbnb",
    description:
      "We are looking for an experienced QA Engi4neer to join our team.",
    userIds: ["user13", "user14"],
    location: "USA",
    jobPlatform: JobPlatform.LINKEDIN,
  },
  {
    salary: "$1000",
    id: "8",
    vacancyStatus: {
      status: "pending",
      interview: null,
      testAssignment: null,
    },
    jobTitle: Carrier.DESIGN,
    userStatus: "pending",
    seniority: Seniority.JUNIOR,
    experience: "3 years",
    companyName: "Uber",
    description:
      "We are looking for an experien1ced Designer to join our team.",
    userIds: ["user15", "user16"],
    location: "USA",
    jobPlatform: JobPlatform.GLASSDOOR,
  },
  {
    salary: "$1000",
    id: "9",
    vacancyStatus: {
      status: "pending",
      interview: {
        date: "09/06/2020",
        linkToMeeting: "https://example.com/meeting",
      },
      testAssignment: null,
    },
    jobTitle: Carrier.FRONTEND,
    userStatus: "accepted",
    seniority: Seniority.JUNIOR,
    experience: "3 years",
    companyName: "Netflix",
    description:
      "We are looking for an experienced Fronte4nd Developer to join our team.",
    userIds: ["user17", "user18"],
    location: "USA",
    jobPlatform: JobPlatform.TELEGRAM,
  },
  {
    salary: "$1000",
    id: "10",
    vacancyStatus: {
      status: "rejected",
    },
    jobTitle: Carrier.BACKEND,
    userStatus: "pending",
    seniority: Seniority.MIDDLE,
    experience: "5 years",
    companyName: "Spotify",
    description:
      "We are looking for an experienced Backen5d Developer to join our team.",
    userIds: ["user19", "user20"],
    location: "USA",
    jobPlatform: JobPlatform.LINKEDIN,
  },
  {
    salary: "$1000",
    id: "11",
    vacancyStatus: {
      status: "pending",
      interview: null,
      testAssignment: {
        deadline: "18/06/2020",
        linkToAssignment: "https://example.com/assignment",
      },
    },
    jobTitle: Carrier.QA,
    userStatus: "accepted",
    seniority: Seniority.SENIOR,
    experience: "7 years",
    companyName: "Dropbox",
    description:
      "We are looking for an experienced QA Enginee6r to join our team.",
    userIds: ["user21", "user22"],
    location: "USA",
    jobPlatform: JobPlatform.GLASSDOOR,
  },
  {
    salary: "$1000",
    id: "12",
    vacancyStatus: {
      status: "pending",
      interview: {
        date: "21/06/2020",
        linkToMeeting: "https://example.com/meeting",
      },
      testAssignment: null,
    },
    jobTitle: Carrier.DESIGN,
    userStatus: "rejected",
    seniority: Seniority.MIDDLE,
    experience: "4 years",
    companyName: "Tesla",
    description:
      "We are looking for an experi6enced Designer to join our team.",
    userIds: ["user23", "user24"],
    location: "USA",
    jobPlatform: JobPlatform.HH,
  },
  {
    salary: "$1000",
    id: "13",
    vacancyStatus: {
      status: "accepted",
      interview: null,
      testAssignment: null,
    },
    jobTitle: Carrier.FRONTEND,
    userStatus: "pending",
    seniority: Seniority.JUNIOR,
    experience: "2 years",
    companyName: "Yahoo",
    description:
      "We are looking for an experien1ced Frontend Developer to join our team.",
    userIds: ["user25", "user26"],
    location: "USA",
    jobPlatform: JobPlatform.MONSTER,
  },
  {
    salary: "$1000",
    id: "14",
    vacancyStatus: {
      status: "pending",
      interview: {
        date: "02/07/2020",
        linkToMeeting: "https://example.com/meeting",
      },
      testAssignment: null,
    },
    jobTitle: Carrier.BACKEND,
    userStatus: "rejected",
    seniority: Seniority.SENIOR,
    experience: "6 years",
    companyName: "Adobe",
    description:
      "We are looking for an experienced Ba41ckend Developer to join our team.",
    userIds: ["user27", "user28"],
    location: "USA",
    jobPlatform: JobPlatform.TELEGRAM,
  },
  {
    salary: "$1000",
    id: "15",
    vacancyStatus: {
      status: "pending",
      interview: null,
      testAssignment: {
        deadline: "09/07/2020",
        linkToAssignment: "https://example.com/assignment",
      },
    },
    jobTitle: Carrier.QA,
    userStatus: "accepted",
    seniority: Seniority.MIDDLE,
    experience: "5 years",
    companyName: "Oracle",
    description:
      "We are looking for an experienced Q23A Engineer to join our team.",
    userIds: ["user29", "user30"],
    location: "USA",
    jobPlatform: JobPlatform.LINKEDIN,
  },
] as Vacancy[];
