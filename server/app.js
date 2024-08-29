// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

app.get('/artists/latest', (req, res) => {
  res.status(200)
  res.send(getLatestArtist())
})

app.get('/artists/latest/albums', (req, res) => {
  res.status(200)
  res.send(getAlbumsForLatestArtist());
})


app.get('/artists', (req, res) => {
  res.statusCode = 200;
  res.send(getAllArtists());
});

app.post('/artists', (req, res) => {
  res.status(201);
  res.send(addArtist(req.body));
});

app.get('/artists/:artistId', (req, res) => {
  const { artistId } = req.params
  res.status(200)
  res.send(getArtistByArtistId(artistId));
})

app.put('/artists/:artistId', (req, res) => {
  const { artistId } = req.params
  res.status(200)
  res.send(editArtistByArtistId(artistId, req.body));
})

app.patch('/artists/:artistId', (req, res) => {
  const { artistId } = req.params
  res.status(200)
  res.send(editArtistByArtistId(artistId, req.body));
})

app.delete('/artists/:artistId', (req, res) => {
  const { artistId } = req.params
  res.status(200);
  deleteArtistByArtistId(artistId);
  res.send({'message':'Successfully deleted'});
})

app.get('/artists/:artistId/albums', (req, res) => {
  const { artistId } = req.params
  res.status(200)
  res.send(getAlbumsByArtistId(artistId));
})

app.get('/albums/:albumId', (req, res) => {
  const { albumId } = req.params
  res.status(200)
  res.send(getAlbumByAlbumId(albumId))
})

app.post('/artists/:artistId/albums', (req, res) => {
  const { artistId } = req.params
  res.status(201)
  res.send(addAlbumByArtistId(artistId, req.body))
})

app.put('/albums/:albumId', (req, res) => {
  const { albumId } = req.params
  res.status(200)
  res.send(editAlbumByAlbumId(albumId, req.body))
})

app.patch('/albums/:albumId', (req, res) => {
  const { albumId } = req.params
  res.status(200)
  res.send(editAlbumByAlbumId(albumId, req.body))
})

app.delete('/albums/:albumId', (req, res) => {
  const { albumId } = req.params
  res.status(200)
  deleteAlbumByAlbumId(albumId);
  res.send({'message':'Successfully deleted'});
})

app.get('/albums', (req, res) => {
  // ?startsWith={letter}
  const { startsWith } = req.query;
  res.status(200)
  res.send(getFilteredAlbums(startsWith));
})


app.get('/songs/:songId', (req, res) => {
  const { songId } = req.params
  res.status(200)
  res.send(getSongBySongId(songId))
})

app.post('/albums/:albumId/songs', (req, res) => {
  const { albumId } = req.params
  res.status(201)
  res.send(addSongByAlbumId(albumId, req.body))
})

app.get('/artists/:artistId/songs', (req, res) => {
  const { artistId } = req.params
  res.status(200)
  res.send(getSongsByArtistId(artistId))
})

app.get('/albums/:albumId/songs', (req, res) => {
  const { albumId } = req.params
  res.status(200)
  res.send(getSongsByAlbumId(albumId))
})

app.put('/songs/:songId', (req, res) => {
  const { songId } = req.params
  res.status(200)
  res.send(editSongBySongId(songId, req.body))
})

app.patch('/songs/:songId', (req, res) => {
  const { songId } = req.params
  res.status(200)
  res.send(editSongBySongId(songId, req.body))
})

app.delete('/songs/:songId', (req, res) => {
  const { songId } = req.params
  res.status(200)
  deleteSongBySongId(songId);
  res.send({'message':'Successfully deleted'});
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
