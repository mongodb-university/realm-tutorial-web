import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

// TODO: Add the GraphGL query for fetching all tasks.
const GetAllTasksQuery = gql``;

export function useAllTasksInProject(project) {
  // TODO: Use GetAllTasksQuery to fetch the tasks for the project every 1000ms
  if (error) {
    throw new Error(`Failed to fetch tasks: ${error.message}`);
  }

  // If the query has finished, return the tasks from the result data
  // Otherwise, return an empty list
  const tasks = data?.tasks ?? [];
  return {
    tasks,
    loading,
  };
}
