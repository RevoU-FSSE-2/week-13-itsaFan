import AuthContext from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { getTasks } from "../../../api/leader-api";
import { Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";

interface Task {
  _id: string;
  title: string;
  description: string;
  priority: string;
  dueDate: string;
  status: string;
  assignedTo: {
    username: string;
  };
  project: {
    projectName: string;
  };
}

export default function TasksTable() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTasks(token);
        // console.log(response)
        setTasks(response.tasks.reverse());
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchData();
  }, [token]);

  const columns: ColumnsType<Task> = [
    {
      title: "Title",
      dataIndex: "title",
      className: "capitalize",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      className: "capitalize",
      key: "description",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      render: (priority) => {
        let color = "white";

        if (priority === "low") {
          color = "green";
        } else if (priority === "medium") {
          color = "blue";
        } else if (priority === "high") {
          color = "red";
        }

        return (
          <Tag color={color} className="w-16 text-center capitalize">
            {priority}
          </Tag>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "white";
        if (status === "completed") {
          color = "green";
        } else if (status === "in-progress") {
          color = "blue";
        } else if (status === "pending") {
          color = "red";
        }

        return (
          <Tag color={color} className="w-24 text-center uppercase">
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      render: (dueDate) => {
        const date = new Date(dueDate);
        const formattedDate = date.toISOString().split("T")[0];
        return formattedDate;
      },
    },
    // {
    //   title: "Assigned To",
    //   dataIndex: "assignedTo",
    //   key: "assignedTo",
    //   render: (assignedTo) => assignedTo.username,
    // },
    {
      title: "Action",
      key: "action",
      render: (task) => (
       
        <Button className="bg-violet-400 hover:bg-opacity-80 border-none ">
          <Link to={`/dashboard/task-detail/${task._id}`}>
            <p className="text-white">View Details</p>
          </Link>
        </Button>
      
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      bordered
      className="mx-6"
      dataSource={tasks}
      rowKey={(task) => task._id}
      expandable={{
        expandedRowRender: (task) => (
          <>
            <p className="m-0">This task is assigned to: {task.assignedTo.username}</p>
            <p className="capitalize">For Project: {task.project.projectName}</p>
          </>
        ),
        rowExpandable: (task) => task._id !== "",
      }}
    />
  );
}
