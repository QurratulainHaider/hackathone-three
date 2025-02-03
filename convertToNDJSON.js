import { readFileSync, writeFileSync } from 'fs';

// Function to convert JSON array to NDJSON format
function convertToNDJSON(inputPath, outputPath) {
    try {
        // Read the JSON file
        const jsonData = JSON.parse(readFileSync(inputPath, 'utf8'));
        
        if (!Array.isArray(jsonData)) {
            throw new Error('Input JSON must be an array');
        }

        // Convert each object to a line of NDJSON
        const ndjsonData = jsonData.map(item => JSON.stringify(item)).join('\n');
        
        // Write to output file
        writeFileSync(outputPath, ndjsonData);
        
        console.log('Successfully converted JSON to NDJSON!');
        console.log(`Output saved to: ${outputPath}`);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Convert the file
convertToNDJSON(
    './src/sanity/data/data.json',
    './src/sanity/data/data.ndjson'
);