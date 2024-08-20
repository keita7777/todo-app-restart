export const getStatusStyle = (statusId: string) => {
  switch (statusId) {
    case "notstarted":
      return "bg-blue-100";
    case "progress":
      return "bg-orange-100";
    case "done":
      return "bg-gray-100";

    default:
      break;
  }
};
