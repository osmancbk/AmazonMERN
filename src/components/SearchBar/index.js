import React, { useRef, useContext } from 'react';
import { Input, Grid, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { styles } from './SearchBar.style';
import { Context } from '../../router/Router';

export function SearchBar() {
    const classes = styles();
    const inpRef = useRef();
    const consumer = useContext(Context);

    return (
        <>
            <Grid xs={11}>
                <Input
                    id="filled"
                    label="Search"
                    variant="outlined"
                    size="small"
                    fullWidth
                    disableUnderline
                    inputRef={inpRef}
                    style={{
                        backgroundColor: 'white',
                        padding: 4,
                    
                    }} />
            </Grid>

            <Grid xs={1}>
                <IconButton onClick= {()=> {
                    consumer?.onProductSearch(inpRef?.current?.value)}                    }>
                    <SearchIcon className={classes.SearchIcon} />
                </IconButton>
            </Grid>

        </>
    )
}
