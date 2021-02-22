import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

import './SwipeButtons.css';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
  return (
    <div className="swipe_buttons">
      <IconButton className="swipe_buttons_repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons_left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons_star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons_right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipe_buttons_lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
