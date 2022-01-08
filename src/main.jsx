import React from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import GitHubIcon from '@mui/icons-material/GitHub';

import Rating from './Rating';

ReactDOM.render(
  <React.StrictMode>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row-reverse'
      }}
      as="a"
      href="https://github.com/shubhamV123/star-rating"
      target="_blank"
      mr={5}
    >
      <GitHubIcon />
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        '> div': {
          marginBottom: '20px'
        }
      }}
    >
      <Box>
        <Typography component="p" textAlign={'center'} mb={1}>
          Default
        </Typography>
        <Rating />
      </Box>
      <Box>
        <Typography component="p" textAlign={'center'} mb={1}>
          Precision:0.5
        </Typography>
        <Rating precision={0.5} />
      </Box>
      <Box>
        <Typography component="p" textAlign={'center'} mb={1}>
          Custom Icon
        </Typography>
        <Rating filledIcon={FavoriteIcon} emptyIcon={FavoriteBorderIcon} precision={0.25} />
      </Box>
    </Box>
  </React.StrictMode>,
  document.getElementById('root')
);
