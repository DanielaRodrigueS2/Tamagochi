import { useDraggable } from "@dnd-kit/core";
import './Item.css'

function Item({item}){

    const {attributes, listeners, setNodeRef, transform} = useDraggable({id: item._id})

    const style = {
        transform : transform
        ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
        :undefined
    };

    return(
        <img
            ref={setNodeRef}
            src={`/Itens/${item.tipo}/${item.sprite}`}
            alt={item._id}
            className="item"
            style={style}
            {...listeners}
            {...attributes}
        />
    );

}

export default Item