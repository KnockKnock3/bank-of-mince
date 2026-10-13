
export const economicReports = [
  {
    id: "economic-outlook-2026-10",
    date: "2026-10-10",
    category: "Test Economic Report",
    title: "Economic Outlook — October 2026",
    url: "/reports/economic-report-format.pdf",
  },
];

export const meetingMinutes = [
  {
    id: "economic-summit-minutes-2026-10-10",
    date: "2026-10-10",
    category: "Test Meeting Minutes",
    title: "Economic Summit Minutes",
    url: "/reports/meeting-minutes-format.pdf",
  },
  {
    id: "economic-summit-minutes-2026-10-11",
    date: "2026-10-11",
    category: "Test Meeting Minutes",
    title: "Economic Summit Minutes",
    url: "/reports/meeting-minutes-format.pdf",
  },
];

export const researchPapers = [

];

export function formatPublicationDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/London",
  });
}
