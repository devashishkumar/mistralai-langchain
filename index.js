import { ChatMistralAI } from "@langchain/mistralai";
import dotenv from "dotenv";

dotenv.config();

const model = new ChatMistralAI({
  model: "mistral-small-latest",
  apiKey: process.env.MISTRALAI_API_KEY,
});

// and returns an AIMessage object containing that response.
const response = await model.invoke("Hello");
console.log(response.content);

// if we want to stream
const stream = await model.stream("Write a code in JavaScript to find a number is prime or not");
for await (const chunk of stream) {
    process.stdout.write(chunk.text);
}