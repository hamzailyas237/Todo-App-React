import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function TodoList(props) {
    return (
        <div>

            <ListGroup className='list-container'>
                <ListGroup.Item className='single-todo'>

                    <div className='align-list-content'>

                        <div className='list-innerhtml'>
                            {props.item}
                        </div>

                        <div>
                            <OverlayTrigger placement='top' overlay={<Tooltip> Edit Todo </Tooltip>}>
                                <Button className='gap' onClick={() => props.editItem(props.index)} variant="success"><i className="fa-solid fa-pen-to-square"></i></Button>
                            </OverlayTrigger>

                            <OverlayTrigger placement='top' overlay={<Tooltip > Delete Todo </Tooltip>}>
                                <Button className='gap' onClick={() => props.deleteItem(props.index)} variant="danger"><i className="fa-solid fa-minus"></i></Button>
                            </OverlayTrigger>
                        </div>
                        
                    </div>

                </ListGroup.Item>

            </ListGroup>



        </div>

    );
}

export default TodoList;