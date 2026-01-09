import { useDraggable } from "@dnd-kit/core";

function Item({item}){

    const {atributes, listeners, setNodeRef, transform} = useDraggable({id: item.id})

    const style = {
        transform : transform
        ? `translate(${transform.x}px, ${transform.y}px, 0)`
        :undefined
    };

    return(
        <img
            ref={setNodeRef}
            src={item.sprite}
            alt={item._id}
            className="item"
            style={style}
            {...listeners}
            {...atributes}
        />
    );

}

export default item