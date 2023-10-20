import { readFile } from 'fs/promises';


async function readJsonFile(filePath) {
    try {
      const data = await readFile(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }

  // Load the books from json files
  const filePathA = './data/a_color_of_his_own.json'
  const filePathB = './data/fishing_in_the_air.json'
  
  export const book_a = await readJsonFile(filePathA)
  export const book_b = await readJsonFile(filePathB)
