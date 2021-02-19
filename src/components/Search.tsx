import React from 'react';
import { TextField } from '@material-ui/core';

interface SearchProps {
  seachHandler: (value: string) => void;
}

const Search = ({ seachHandler }: SearchProps) => {
  return (
    <form className='search-form' noValidate autoComplete='off'>
      <TextField id='outlined-basic' label='Search shop' variant='outlined' />
    </form>
  );
};
export default Search;
