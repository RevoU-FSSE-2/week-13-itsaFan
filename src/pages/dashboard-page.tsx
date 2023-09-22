import AddTaskForm from "../components/dashboard/role-leader/add-task";
import TasksTable from "../components/dashboard/role-leader/tasks-table";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="mx-6 mb-4 text-xl font-semibold text-slate-600">All Tasks: </h1>
      <div>
        <AddTaskForm />
        <TasksTable />
      </div>
    </div>
  );
}
