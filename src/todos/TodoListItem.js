import React from 'react';
import styled from 'styled-components';

const CompletedButton = styled.button`
    font-size: 13px;
    padding: 8px;
    cursor: pointer;
    background-color: #54b948;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;

const RemoveButton = styled.button`
    font-size: 13px;
    padding: 8px;
    cursor: pointer;
    background-color: #e31836;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;

const TodoItemContainer = styled.div`
    border: 1px solid;
    border-color: #54b948;
    border-radius: 10px 10px 10px 0px;
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer>
        <h3>{todo.text}</h3>
        <ButtonsContainer>
            {todo.isCompleted
            ? null
            : <CompletedButton
                onClick={() => onCompletedPressed(todo.id)}
                className="completed-button">Mark As Completed</CompletedButton>
            }
            
            <RemoveButton 
            onClick={() => onRemovePressed(todo.id)}
            className="remove-button">Remove</RemoveButton>
        </ButtonsContainer>
    </TodoItemContainer>
)

export default TodoListItem;