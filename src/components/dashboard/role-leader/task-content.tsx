import { TaskData } from "../../../helpers/content-interface";
import { Button, Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

type Props = {
  task: TaskData;
};

export default function TaskDetailLogistics({ task }: Props) {
  const dueDateParts = task.dueDate.split("T");
  const formattedDueDate = dueDateParts[0];

  const items: DescriptionsProps["items"] = [
    {
      label: "Task Title",
      children: task.title,
    },
    {
      label: "Task Priority",
      children: task.priority,
    },
    {
      label: "Task Due Date",
      children: formattedDueDate,
    },
    {
      label: "Assigned To",
      children: task.assignedTo.username,
    },
    {
      label: "Task Created By",
      children: task.createdBy.username,
    },
    {
      label: "From Group",
      children: task.group.name,
    },
    {
      label: "Task Description",
      children: task.description,
    },
  ];

  return (
    <div>
      <Descriptions
        title="Task Detail: "
        bordered
        items={items}
        extra={
          <>
            <Button className="bg-cyan-500 hover:bg-opacity-80 border-none mr-2">
              <p className="text-white">Edit</p>
            </Button>
            <Button className="bg-red-500 hover:bg-opacity-80 border-none">
              <p className="text-white">Delete</p>
            </Button>
          </>
        }
      />
    </div>
  );
}
