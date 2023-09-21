import AddTaskForm from "../components/dashboard/role-leader/add-task";
import TasksTable from "../components/dashboard/role-leader/tasks-table";

export default function DashboardPage() {
  return (
    <div>
      <AddTaskForm />
      <TasksTable />
    </div>
  );
}
