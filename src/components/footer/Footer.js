import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" target="_blank" href="https://www.linkedin.com/in/ahmed-ben-hamouda-4238a9264/">
        AHMEDBH25
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  return (

    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        AHMED BEN HAMOUDA
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        if you are interested contact me on :
      </Typography>
      <div style={{ margin:"2% 45%"}}>
        <a target="_blank" href='https://github.com/ahmedbh25'><GitHubIcon /></a>
        <a target="_blank" href='https://www.instagram.com/ahmed.b.hammouda'><InstagramIcon /></a>
        <a target="_blank" href='https://www.facebook.com/profile.php?id=100009448045751'><FacebookIcon /></a>
        <a target="_blank" href='https://twitter.com/AhmedBe51248286'><TwitterIcon /></a>
      </div>
      <Copyright />
    </Box>

  )
}

export default Footer                                  