import { ObjectId } from "bson";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

export default function useTaskMutations(project) {
  return {
    addTask: useAddTask(project),
    updateTask: useUpdateTask(project),
    deleteTask: useDeleteTask(project),
  };
}

// TODO: Add the GraphGL mutation for adding a task.
const AddTaskMutation = gql``;

// TODO: Add the GraphGL mutation for updating a task.
const UpdateTaskMutation = gql``;

// TODO: Add the GraphGL mutation for deleting a task.
const DeleteTaskMutation = gql``;

const TaskFieldsFragment = gql`
  fragment TaskFields on Task {
    _id
    _partition
    status
    name
  }
`;

function useAddTask(project) {
  const [addTaskMutation] = useMutation(AddTaskMutation, {
    // Manually save added Tasks into the Apollo cache so that Task queries automatically update
    // For details, refer to https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    update: (cache, { data: { addedTask } }) => {
      cache.modify({
        fields: {
          tasks: (existingTasks = []) => [
            ...existingTasks,
            cache.writeFragment({
              data: addedTask,
              fragment: TaskFieldsFragment,
            }),
          ],
        },
      });
    },
  });

  const addTask = async (task) => {
      // TODO: Use the functions returned from the addTaskMutation hook to execute the
      // mutation.
    });
    return addedTask;
  };

  return addTask;
}

function useUpdateTask(project) {
  const [updateTaskMutation] = useMutation(UpdateTaskMutation);
  // TODO: Use the functions returned from the updateTaskMutation to execute the
  // mutation.
  return updateTask;
}

function useDeleteTask(project) {
  const [deleteTaskMutation] = useMutation(DeleteTaskMutation);
  // TODO: Use the functions returned from the deleteTaskMutation to execute the
  // mutation.
  return deleteTask;
}
