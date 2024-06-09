import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function Chat() {
  const [question, setQuestion] = useState("");
  const [qaHistory, setQaHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    const currentQuestion = question;
    setQuestion("");
    setQaHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        answer: "Loading your answer... \n It might take up to a few seconds",
      },
    ]);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBgcFEIw9_EFo1xJTq_TJycRFKyMIhioQs",
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const generatedAnswer = response.data.candidates[0].content.parts[0].text;
      setQaHistory((prev) =>
        prev.map((qa, index) =>
          index === prev.length - 1 ? { ...qa, answer: generatedAnswer } : qa
        )
      );
    } catch (error) {
      console.log(error);
      setQaHistory((prev) =>
        prev.map((qa, index) =>
          index === prev.length - 1
            ? {
                ...qa,
                answer: "Sorry - Something went wrong. Please try again!",
              }
            : qa
        )
      );
    }

    setGeneratingAnswer(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateAnswer(e);
    }
  }

  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      <div className="flex-1 overflow-auto p-4">
        <div className="max-w-lg w-full sm:w-1/2 text-left align-bottom sm:pr-4">
        <div className="bg-white p-4 rounded-md shadow-md mb-2 sm:mb-0">

          <ReactMarkdown>Hello! How can I assist you today?</ReactMarkdown>
          </div>
          </div>
        {qaHistory.map((qa, index) => (
          <div key={index} className="flex flex-col sm:flex-row my-2">
            <div className="max-w-lg w-full sm:w-1/2 text-left align-bottom sm:pr-4">
              <div className="bg-white p-4 rounded-md shadow-md mb-2 sm:mb-0">
                <p className="font-semibold text-gray-700">Answer:</p>
                <ReactMarkdown>{qa.answer}</ReactMarkdown>
              </div>
            </div>
            <div className="max-w-lg w-full sm:w-1/2 text-right ml-auto align-top sm:pl-4">
              <div className="bg-blue-200 p-4 rounded-md shadow-md">
                <p className="font-semibold text-gray-700">Question:</p>
                <p>{qa.question}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form
        onSubmit={generateAnswer}
        className="p-4 flex flex-col sm:flex-row justify-center items-center border-t bg-white"
      >
        <textarea
          required
          className="border rounded w-full p-3 mb-3 sm:mb-0 sm:mr-3 flex-grow"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-all duration-300 sm:w-auto w-full"
          disabled={generatingAnswer}
        >
          {generatingAnswer ? "Generating..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Chat;
