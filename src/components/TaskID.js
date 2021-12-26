import React from 'react';
import styled from "@emotion/styled";

function TaskID(props) {
    return <ID>{props.id} </ID>
}
const ID = styled.div`
  color: #a9a9a9;
  margin-left: 20px;
`;

export default TaskID;