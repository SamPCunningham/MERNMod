import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 13px;
    padding: 8px;
    cursor: pointer;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
`;

const CompletedButton = styled(Button)`
    background-color: #54b948;
    
`;

const RemoveButton = styled(Button)`
    background-color: #e31836;    
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

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
    border-bottom: ${props => (new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
    ? 'none' 
    : '2px solid red')};
`;

const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`;

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
    const Container = todo.isCompleted ? TodoItemContainer : TodoItemContainerWithWarning;
    return (
        <Container createdAt={todo.createdAt}>
            <h3>{todo.text}</h3>
            <p>
                Created at:&nbsp;
                {new Date(todo.createdAt).toLocaleDateString()}    
            </p>
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
        </Container>
    )
}

export default TodoListItem;