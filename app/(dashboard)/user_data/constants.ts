import type { FieldBoxProps } from "app/components/FieldBox";

export const all_fields = [
  {
    title: "Your name",
    description:
      "This field will be used to fill out common application forms.",
    footerText: "Please submit your real name to avoid any misunderstandings.",
    inputId: "name",
    required: true,
  },
  {
    title: "Your last name",
    description:
      "This field will be used to fill out common application forms.",
    footerText:
      "Please submit your real last name to avoid any misunderstandings.",
    inputId: "lastName",
    required: true,
  },
  {
    title: "Your email",
    description: "Your email will be used by recruiters to contact you.",
    footerText:
      "We guarantee that your email will be used only for the purpose of providing you with our service and that it will be kept secure and never shared with any third parties.",
    inputId: "email",
    required: true,
  },
  {
    title: "Your phone",
    description: "Please choose a country code and enter your phone number.",
    footerText:
      "We guarantee that your phone will be used only for the purpose of providing you with our service and that it will be kept secure and never shared with any third parties.",
    inputId: "phone",
  },
  {
    title: "Your country",
    description:
      "This field will be used to fill out common application forms.",
    footerText:
      "Please submit your real country to avoid any misunderstandings.",
    inputId: "country",
    required: true,
  },
  {
    title: "Your salary expectations",
    description:
      "Please specify the amount of money you expect to receive for your work.",
    footerText:
      'USD is the assumed currency. Please use the following format: "1000-1500" to specify the range.',
    inputId: "salaryExpectations",
    required: true,
  },
  {
    title: "Your experience",
    description:
      "The amount of years you've been working in your target field.",
    footerText:
      'Use the following format: "1-3" where 1 is years and 3 is months.',
    inputId: "experience",
    required: true,
  },
  {
    title: "Desired carrier",
    description: "Please choose the carrier you are interested in.",
    footerText: "If the carrier is not listed, please contact us.",
    inputId: "position",
    required: true,
  },
  {
    title: "Your tech stack",
    description: "Please choose the technologies you master. ",
    footerText:
      "Tip: specify the carrier to show relevant technologies. Otherwise we'll show all technologies. Use the search and if the technology is not listed, feel free to add it.",
    inputId: "techStack",
    required: true,
  },
  {
    title: "Preferred work type",
    description: "Please select the type of work you are interested in.",
    footerText: '"Doesn\'t matter" will be the default.',
    inputId: "workType",
  },
  {
    title: "Languages you speak",
    description: "Please specify the languages you speak.",
    footerText:
      'Use the following format: "English - B1, Russian - Native, Spanish - A2"',
    inputId: "languages",
  },
] as FieldBoxProps[];
