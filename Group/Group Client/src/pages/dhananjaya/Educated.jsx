import React, { useState } from 'react';
import axios from "axios";

const Educated = () => {
  const [disaster, setDisaster] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!disaster || !questionType) {
      alert('Please select a natural disaster and what you want to know.');
      return;
    }

    setGeneratingAnswer(true);
    setAnswer("Loading your answer...");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAg9hT6q36bS8NPUcOs0dFhC4Hml85lVqY",
        method: "post",
        data: {
          contents: [{ parts: [{ text: `${questionType} of ${disaster}` }] }],
        },
      });

      const answerData = response?.data?.candidates[0]?.content?.parts[0]?.text;
      if (!answerData) {
        setAnswer("No answer found for this specific question.");
        return;
      }

      // Process the answer for better readability
      const formattedAnswer = formatAnswer(answerData);
      setAnswer(formattedAnswer);
    } catch (error) {
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  //  format the answer 
  function formatAnswer(answerText) {
    const sections = answerText.split("*");

    return (
      <div>
        {sections.map((section, index) => (
          <p key={index}>{section.trim()}</p>
        ))}
      </div>
    );
  }

  return (
    <div className="container-fluid bg-light min-vh-100">
      <br/><br/>
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4 text-success">Products Inquiry</h1>
              <form onSubmit={generateAnswer}>
                <div className="mb-3">
                  <label htmlFor="disasterSelect" className="form-label fs-5">Select Product catagury:</label>
                  <select  
                    className="form-select fs-5 "
                    id="disasterSelect"
                    value={disaster}
                    onChange={(e) => setDisaster(e.target.value)}
                  >
                    <option value="" >Choose...</option>
                    <option value="Solar Systems">Solar Systems</option>
                    <option value="Fire Detection & Protection Systems">Fire Detection & Protection Systems </option>
                    <option value="Building Management Systems">Building Management Systems</option>
                  
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="questionTypeSelect" className="form-label fs-5">Select what you want to know:</label>
                  <select
                    className="form-select fs-5"
                    id="questionTypeSelect"
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}
                  >
                    <option value="">Choose...</option>
                    <option value="Compatibility and Integration">Compatibility and Integration {disaster}</option>
                    <option value="Scalability">Scalability {disaster}</option>
                    <option value="Reliability and Performance">Reliability and Performance of  {disaster}</option>
                    <option value="Ease of Use and Maintenance">how to Ease of Use and Maintenance from {disaster}</option>
                    <option value="Compliance and Regulations">how to Compliance and Regulations {disaster}</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn  btn-success w-100 fs-5 "
                  disabled={generatingAnswer}
                >
                  {generatingAnswer ? 'Generating...' : 'Generate Answer'}
                </button>
              </form>
              <div className="mt-4 fs-5">
                {answer && (
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">{answer}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };
  
  export default Educated;
