import HangmanFigure from "@/components/HangmanFigure";

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-blue-200 p-8">
      <h1 className="text-4xl font-bold text-pink">Hangman</h1>

      <HangmanFigure />
    </div>
  );
}

export default App;
