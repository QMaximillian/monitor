import gql from 'graphql-tag'

export const UPDATE_TODO = gql`
    mutation updateTodo($id: String!, $task: String!, $completed: Boolean!, $audition_id: String!){
        updateTodo(id: $id, task: $task, completed: $completed, audition_id:$audition_id ) {
            id
            task
            completed
            audition_id
        }
    }
`;

export const SAVE_TODO = gql`
    mutation saveTodo($task: String!, $completed: Boolean!, $audition_id: String!){
        saveTodo(task: $task, completed: $completed, audition_id:$audition_id ) {
            id
        }
    }
`;
