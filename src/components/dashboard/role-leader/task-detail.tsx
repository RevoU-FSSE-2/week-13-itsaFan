import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthContext from "../../../context/auth-context";
import { getSingleTask } from "../../../api/leader-api";

interface TaskData {
  title: string;
  description: string;
}

export default function SingleTaskView() {
  const { taskId } = useParams<{ taskId: string | undefined }>();
  const [task, setTask] = useState<TaskData>({ title: "", description: "" });
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (taskId) {
          const response = await getSingleTask(taskId, token);
          console.log(response);
          setTask(response.task);
        }
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };
    fetchTask();
  }, [token, taskId]);

  return (
    <div>
      <h2>Task Details</h2>
      <p>Title: {task.title}</p>
      <p>Description: {task.description}</p>
    </div>
  );
}
