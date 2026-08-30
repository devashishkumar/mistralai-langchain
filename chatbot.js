import { ChatMistralAI } from "@langchain/mistralai";
import dotenv from "dotenv";
import { AIMessage, HumanMessage } from "langchain";
import rl from "readline/promises";

dotenv.config();

const readLine = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRALAI_API_KEY,
});

const userMessages = [];
try {
  while (true) {
    const userPrompt = await readLine.question("\nUser: ");
    if (userPrompt.toLowerCase() === "exit") {
      break;
    }
    userMessages.push(new HumanMessage(userPrompt));
    process.stdout.write("AI: ");
    const stream = await model.stream(userMessages);
    let aiResponse = "";
    for await (const chunk of stream) {
      // LangChain chunks use .content instead of .text
      process.stdout.write(chunk.content);
      aiResponse += chunk.content;
    }
    userMessages.push(new AIMessage(aiResponse));
    process.stdout.write("\n"); // Add a newline after the stream finishes
  }
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  readLine.close();
}
