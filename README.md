# Mistral AI with LangChain

A small Node.js example that uses LangChain's Mistral integration to invoke a Mistral model, stream responses, and run an interactive terminal chatbot.

## Requirements

- Node.js 18 or later
- A Mistral API key

## Setup

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
MISTRALAI_API_KEY=your_mistral_api_key
```

## Usage

Run the basic invocation and streaming example:

```bash
node index.js
```

Run the interactive chatbot:

```bash
node chatbot.js
```

Type a message at the `User:` prompt. Enter `exit` to stop the chatbot.

The default model is `mistral-small-latest`.

## npm script

The default start script runs `index.js`:

```bash
npm start
```

## Project files

- `index.js` demonstrates a direct model call and streamed output.
- `chatbot.js` maintains a conversation history and streams each response.


## Chatbot

![Chatbot](chatbot.png)