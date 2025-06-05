export interface MatterResult {
  [x: string]: string;
  body: string;
}

export default function matter(raw: string) {
  let text = String(raw);
  let data: { [x: string]: string } = {};
  const regex =
    /^(---\r?\n(?<frontText>[\s\S]*?\r?\n?)---\r?\n)(?<body>[\s\S]*$)/;
  const match = regex.exec(text);
  if (match?.groups) {
    const { frontText, body } = match.groups;
    text = body;
    // Parse each line of front text as `key: value` and add it to the data object.
    //data = {};
    const lines = frontText.split("\n");
    for (const line of lines) {
      const [key, value] = line.split(":");
      if (key && value) {
        data[key] = value.trim();
      }
    }
  }
  return Object.assign({ body: text }, data) as MatterResult;
}
