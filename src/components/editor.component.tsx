import { Component } from 'react';
import { DragDropContext, Droppable, resetServerContext } from 'react-beautiful-dnd';
import { TextBlockComponent } from './text-block.component';

const TEXT_BLOCKS = [
    { id: 'text-1', content: '#1' },
    { id: 'text-2', content: '#2' },
    { id: 'text-3', content: '#3' },
    { id: 'text-4', content: '#4' },
    { id: 'text-5', content: '#5' },
    { id: 'text-6', content: '#6' },
];


export default class EditorComponent extends Component {
    public componentDidMount() {
        resetServerContext();
    }
    public onDragEnd(result: any) {
        const { destination, source } = result;
        if (!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        const draggableBlock = { ...TEXT_BLOCKS[source.index] };

        TEXT_BLOCKS.splice(source.index, 1);
        TEXT_BLOCKS.splice(destination.index, 0, draggableBlock);
    }

    public createBlocks() {
        return TEXT_BLOCKS.map((data, index) => (<TextBlockComponent key={data.id} data={data} index={index} />));
    }

    public provide(provided) {
        return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
                {this.createBlocks()}
                {provided.placeholder}
            </div>
        );
    }

    public render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className='editor'>
                    <Droppable droppableId='drop-1'>
                        {this.provide.bind(this)}
                    </Droppable>
                </div>
            </DragDropContext>
        );
    }

}
