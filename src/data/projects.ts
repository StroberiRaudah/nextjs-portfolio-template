// 1) TYPE: describes the shape of one project
export type Project = {
  slug: string;     // part of the URL → /projects/tender-document-boq
  code: string;     // drawing sheet number
  title: string;
  type: string;     // Group Project, Site Visit, ...
  period: string;
  summary: string;
  points: string[]; // a list of text
  pdf?: string;     // path to the PDF in public/, e.g. "/projects/abc.pdf" ("" = none yet)
};

// 2) DATA: a list of Project
export const projects: Project[] = [
  {
    slug: "tender-document-boq",
    code: "A-01",
    title: "Tender Document & BOQ",
    type: "Group Project",
    period: "Semester 5",
    summary: "Prepared a full tender as the contractor and drafted the Bill of Quantities from take-off data.",
    points: [
      "Drafted the BOQ in standard measurement format",
      "Reviewed contract conditions, preliminaries and measurement rules",
    ],
    pdf: "",
  },
  {
    slug: "hospital-electrical-systems",
    code: "A-02",
    title: "Hospital Electrical Systems",
    type: "Site Visit",
    period: "Semester 4",
    summary: "Studied power distribution, backup generators and safety systems for M&E costing.",
    points: [
      "Built a foundation in M&E systems for QS cost estimation",
      "Learned how M&E coordination affects cost and schedule",
    ],
    pdf: "",
  },
  {
    slug: "nkve-nse-lane-widening",
    code: "A-03",
    title: "NKVE & NSE Lane Widening",
    type: "Interview",
    period: "Semester 5",
    summary: "Interviewed a project manager on budget control, variation orders and progress claims.",
    points: [
      "Documented challenges in budget control and material logistics",
      "Explored how progress claims are managed on highway projects",
    ],
    pdf: "",
  },
  {
    slug: "sewage-treatment-plant",
    code: "A-04",
    title: "Sewage Treatment Plant",
    type: "Site Visit",
    period: "Semester 2",
    summary: "Linked plant maintenance and building systems to QS cost reporting.",
    points: [
      "Observed daily workflow and equipment management",
      "Related maintenance scope to cost reporting",
    ],
    pdf: "",
  },
];