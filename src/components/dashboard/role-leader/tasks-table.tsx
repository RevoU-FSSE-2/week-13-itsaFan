import AuthContext from "../../../context/auth-context";
import { useContext, useEffect, useState } from "react";
import { getTasks } from "../../../api/leader-api";
import { Table, Tag, Space } from "antd";
import type { ColumnsType } from "antd/es/table";

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
        setTasks(response.tasks);
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
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={status === "completed" ? "green" : "red"}>{status}</Tag>,
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
      render: () => (
        <Space size="middle">
          <a>View</a>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={tasks}
      rowKey={(task) => task._id}
      expandable={{
        expandedRowRender: (task) => (
          <>
            <p className="m-0">This task is assigned to: {task.assignedTo.username}</p>
            <p className="">For Projet: {task.project.projectName}</p>
          </>
        ),
        rowExpandable: (task) => task._id !== "",
      }}
    />
  );
}
