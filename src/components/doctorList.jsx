import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import ListSubheader from '@material-ui/core/ListSubheader';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import itemData from '../config/doctors.json';
import { useDispatch, useSelector } from 'react-redux';
import { selectedDoctor } from '../redux/actions';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: "80%",
    height: 700,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarImageList() {

    const classes = useStyles();
    const dispatch = useDispatch();


  return (
    <div className={classes.root}>

      <ImageList rowHeight={250} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">Select a doctor to book appointment</ListSubheader>
        </ImageListItem>
        {itemData.map((item, i) => (
          <ImageListItem key={i}>
            <img src={item.img} alt={item.name} />
            <ImageListItemBar
              title={item.name}
              subtitle={<span>by: {item.specialization}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.cost_per_appointment}`} className={classes.icon}>
                  <ArrowForwardIosIcon onClick={() => dispatch(selectedDoctor(item)) }/>
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
