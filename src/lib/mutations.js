import gql from 'graphql-tag'
export const SAVE_TODO = gql`
    mutation saveTodo($id: String!, $task: String!, $completed: Boolean!, $audition_id: String!){
        saveTodo(id: $id, task: $task, completed: $completed, audition_id:$audition_id ) {
            id
            task
            completed
            audition_id
        }
    }
`;
