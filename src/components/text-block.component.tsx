import { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface IProps {
    data: any;
    index: any;
}

export class TextBlockComponent extends Component<IProps> {
    public provide(provided) {
        const props = {
            ...provided.draggableProps,
            ...provided.dragHandleProps,
            ref: provided.innerRef,
            className: 'article__text-block',
        };
        return (
            <div {...props}>{this.props.data.content}</div>
        );
    }

    public render() {
        return (
            <Draggable draggableId={this.props.data.id} index={this.props.index}>
                {this.provide.bind(this)}
            </Draggable>
        );
    }

}
