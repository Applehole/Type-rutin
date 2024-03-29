import styled from 'styled-components'

export const DoneTaskComponent :JSX.Element | any = styled.div`
grid-area: DoneTask;
border-radius: 10px;
background-color:  #B3C680;
border: 1px solid black;
overflow: hidden;
margin: 20px 0 0 0;
overflow-y: scroll;
::-webkit-scrollbar{
  display:none;
}
`
//도대체 왜 에러가 생기는 것일까...? 찾아보기
export const DoneTaskTitle = styled.div`
background-color: #9AB356;
text-align: center;
font-size: large;
overflow: hidden;
border-radius: 5px 5px 0 0;
border-bottom: 1px solid black;
`
export const DoneTaskTodo = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 10px;
    `
export const DoneTaskTodoInput = styled.input`
grid-column: 1/2;
`
export const DoneTaskTodoNumber = styled.div`
grid-column: 2/3;
text-align: center;
line-height: 25px;
`
export const DoneTaskTodoText = styled.div`
grid-column: 3/10;
`
export const DoneTaskTodoTextFinish = styled.div`
grid-column: 3/10;
text-decoration:line-through;
color: aliceblue;
`
export const EveryTodoTextFinish = styled.div`
grid-column: 3/10;
text-decoration:line-through;
color: black;
`
export const DoneTaskTodoChange = styled.input`
grid-column: 3/10;
`
export const DoneTaskTodoComplete = styled.button`
grid-column: 10/11;
margin: 0 3px 0 3px;
border: 3px solid #777baf;
border-radius: 3px;
transition: transform 300ms ease;

:hover {
    background-color: #777baf;
    color: #e3dede;
    transform: scale(1.1);
    }
`
export const DoneTaskTodoFix = styled.button`
grid-column: 11/12;
margin: 0 3px 0 3px;
border: 3px solid #77af9c;
border-radius: 3px;
transition: transform 300ms ease;

:hover {
    background-color: #77af9c;
    color: #e3dede;
    transform: scale(1.1);
    }
`
export const DoneTaskTodoDel = styled.button`
grid-column: 12/13;
margin: 0 3px 0 3px;
border: 3px solid #ff5f2e;
border-radius: 3px;
transition: transform 300ms ease;

:hover {
    background-color: #ff5f2e;
    color: #e3dede;
    transform: scale(1.1);
    }
`