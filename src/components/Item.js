import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';

const Item = ({ name, details }) => {
    return(
        <ListItem>
            <ListItemText
                primary={name}
                secondary={details}
            />
        </ListItem>
    )
}

export default Item;
