import React from 'react'

function MovieCard() {
  return (
    <div>
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={pic}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Jith Bro
        </Typography>
        <Typography variant="body2" color="text.secondary">
        The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default MovieCard
