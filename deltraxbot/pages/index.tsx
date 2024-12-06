
import localFont from "next/font/local";
import Head from "next/head";
import Chatbot from "../components/Chatbot";


export default function Home() {
  return (
    

    <div className="container mx-auto p-4">
      <Head>
        <title>Chatbot avec Next.js</title>
        <meta name="description" content="Un simple chatbot avec des réponses prédéfinies." />
      </Head>
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold">Deltrax Chatbot</h1>
          <nav>
            <ul className="flex space-x-4">
              
            </ul>
          </nav>
        </div>
      </header>
      <Chatbot />
    </div>
  
      
    
  );
}
