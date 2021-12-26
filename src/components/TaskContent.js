import React from "react";
import styled from "@emotion/styled";
import StatusBadge from "./StatusBadge";
import TaskID from "./TaskID";

export default function TaskContent({ task }) {
  return (
    <TaskDescription>
      <TaskName>{task.name}</TaskName>
      <StatusBadge status={task.status} />
      <TaskID id={task._id} />
    </TaskDescription >
  );
}

const TaskDescription = styled.div`
  display: flex;
  width: 100%;
`;
const TaskName = styled.span`
  flex-grow: 1;
`;
