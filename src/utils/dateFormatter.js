export function dateFormatter(isoDate) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };

  const date = new Date(isoDate).toLocaleDateString("id-Id", options);
  return date.replace(/GMT\+7:00$/, "WIB").replace("pukul", "");
}
