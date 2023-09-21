export interface TaskData {
  project: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  status: string;
  assignedTo: {
    _id: string;
    username: string;
  };
  createdBy: {
    _id: string;
    username: string;
  };
  group: {
    _id: string;
    name: string;
  };
}
