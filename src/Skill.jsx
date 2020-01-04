import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

class Skill extends React.Component {
   render() {
      return (
      <div>
          <h2>Skills</h2>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">10 stars</Typography>
            <Rating name="customized-10" value={2} max={10} />
          </Box>
        </div>
      );
   };
};

export default Skill;