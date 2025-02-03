import { readFile, writeFile } from "fs";

// JSON file ka path
const inputFilePath = "src/sanity/data/data.json"; // Yahan aapka JSON file ka actual path dalain
const outputFilePath = "src/sanity/data/data.ndjson"; // Output NDJSON file ka path

// JSON file read karein
readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    const jsonArray = JSON.parse(data); // JSON array parse karein
    const ndjson = jsonArray.map((obj) => JSON.stringify(obj)).join("\n"); // NDJSON format mein convert karein

    // NDJSON file likhein
    writeFile(outputFilePath, ndjson, "utf8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("✅ Conversion successful! NDJSON file saved at:", outputFilePath);
      }
    });
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});
