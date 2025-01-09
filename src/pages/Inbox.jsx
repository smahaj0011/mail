import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Inbox = () => {
  const emails = [
    {
      id: 1,
      from: "John Doe",
      subject: "Meeting",
      message: "Hey, we have a meeting at 2:00 PM",
      date: "2021-10-10",
    },
    {
      id: 2,
      from: "Jane Doe",
      subject: "Lunch",
      message: "Hey, let's have lunch at 12:00 PM",
      date: "2021-10-10",
    },
  ];
  return (
    <Box
      sx={{
        textAlign: "center",
        border: "2px solid red",
        height: "100vh",
        display: "flex",
      }}
    >
      <Box sx={{ display: 'flex', maxHeight: 290, flexWrap: 'wrap', gap: 2, justifyContent: 'center', border: '2px solid red', width: '100vw', height: '100vh' }}>
        {/* {emails.map((email) => (
        <Box key={email.id}>
          <Typography>{email.from}</Typography>
          <Typography>{email.subject}</Typography>
          <Typography>{email.message}</Typography>
          <Typography>{email.date}</Typography>
        </Box>
      ))} */}
        <Card sx={{ maxWidth: 345, border: '2px solid red', maxHeight: 290 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      </Box>
    </Box>
  );
};

export default Inbox;
