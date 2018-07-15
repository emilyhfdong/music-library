const Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

const Playlist = function(name) {
  this.name = name;
  this.tracks = [];
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}
Playlist.prototype.getOverallRating = function() {
  let overallRating = 0;
  for (let i = 0; i < this.tracks.length; i ++ ) {
    overallRating += this.tracks[i].rating;
  }
  return (overallRating/this.tracks.length)
}
Playlist.prototype.getDuration = function() {
  let duration = 0;
  for (let i = 0; i < this.tracks.length; i ++ ) {
    duration += this.tracks[i].length;
  }
  return (duration);
}

const Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}


let myLib = new Library("emilys playlist", "emily");
let myPlaylist = new Playlist("my first playlist");
let myTrack = new Track("mytrack", 5, 300);
let my2Track = new Track("my2track", 4, 300);
myLib.addPlaylist(myPlaylist);
myPlaylist.addTrack(myTrack);
myPlaylist.addTrack(my2Track);




