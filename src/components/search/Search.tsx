'use client'

import { TextField } from "@mui/material";

const Search = (props: {
    searchHandler: (event: any) => void;
}) => {
    return (
        <div>
        <TextField
            label="Search"
            variant="standard"
            fullWidth
            onChange={props.searchHandler}
            type="text"
            sx={{
                mb: '1rem'
            }}
        />
        </div>
    )
};

export default Search;