import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 pt-10 min-h-screen">
      <div className="container max-w-2xl m-auto">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
