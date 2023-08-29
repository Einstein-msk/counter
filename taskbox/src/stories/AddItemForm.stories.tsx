


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
import {AddItemForm} from "../../../src/Components/AddItemForm";


export default {
    title: 'AddItemForm',
    component: AddItemForm,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
const callback=(title:string)=> <div>added</div>
// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const SimpleForm =()=> <AddItemForm addTask={callback}/>
