import './App.css';
import Task from './Components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
    </Task>
      <Task title="Tidy" deadline="Today" />
      </div>
  );
}
export default App;