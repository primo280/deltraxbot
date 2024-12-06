import React, { useState } from "react";

const questionsAndAnswers = [
  { question: "Offre de Deltrax ?", answer: "DELTRAX vous offre des  notions, outils et analyses généraux sur les marchés des cryptomonnaies qui ne prennent pas en compte certains facteurs tels que votre expérience, vos objectifs personnels, vos moyens financiers ou votre tolérance au risque. Si vous avez des inquiétudes ou tout autre incompréhension nous restons à" },
  { question: "Objectif Deltrax", answer: "objectif la mise en place d’un écosystème blockchain en Afrique, permettant ainsi de combler le retard technologique du continent tout en améliorant les conditions de vie des populations" },
  { question: "Services Deltrax", answer: "ACADÉMIE: {Avancez avec sérénité dans le domaine de la Blockchain et des Cryptomonnaies grâce à nos encadrements et formations..} ECHANGES CRYPTO/FIAT: {Achetez et vendez vos cryptomonnaies en Afrique et dans le monde aux meilleurs prix facilement en toute sécurité.}" },
];

const Chatbot = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-indigo-200 to-pink-300 flex flex-col items-center justify-center py-8 px-4">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-6 px-8 rounded-lg shadow-lg mb-6 w-full max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-wide">Mon Chatbot</h1>
        <p className="mt-2 text-lg sm:text-xl font-semibold">Posez vos questions à propos de Deltrax</p>
      </header>

      {/* Chatbot content */}
      <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Questions list */}
          <div className="w-full md:w-1/3 space-y-4">
            {questionsAndAnswers.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedQuestion(index)}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-600 hover:scale-105 transition-all duration-300"
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Display answer */}
          {selectedQuestion !== null && (
            <div className="w-full md:w-2/3 mt-6 md:mt-0 p-6 bg-gray-100 rounded-lg shadow-lg border-2 border-indigo-200">
              <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-4">Réponse</h2>
              <p className="text-lg sm:text-xl text-gray-800">{questionsAndAnswers[selectedQuestion].answer}</p>
              <button
                onClick={() => setSelectedQuestion(null)}
                className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300"
              >
                Retour
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
