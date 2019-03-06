from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

#######################################################################

import spotipy
import os
import sys
import json
import webbrowser
import spotipy.util as util
from json.decoder import JSONDecodeError
from spotipy.oauth2 import SpotifyClientCredentials
import requests 
from random import randint
from random import shuffle

#Creates a playlist based on the likes of all users inputted, only asks for permission from the first user
#Input a string of spotify usernames seperated by a comma
def makeUserPlaylist(usernamesString, playlistName, tracksPerUser, danceability):
#Keys are kept in the keys.txt file, place your key and private key here on seperate lines
	print(os.listdir())
	file = open('C:/Users/kenan/Desktop/University Of Pittsburgh/Projects/Partify/MainApp/keys.txt', 'r')
	idCode = file.readline()
	secretCode = file.readline()
	usernames = usernamesString.split(' ')
	tracksPerPerson = int(tracksPerUser)
	if(tracksPerPerson*len(usernames) > 100):
		tracksPerPerson = int(100/len(usernames))
	if(danceability == ''):
		minimumDanceability = .3
	else:
		minimumDanceability = int(danceability)/10
	print(str(tracksPerPerson))
	print(str(minimumDanceability))
	trackList = []
	artists = []
	recommendedTracks = []
#Get user token from the first user inputted using the user permissions listed
	token = util.prompt_for_user_token(usernames[0],'user-read-recently-played user-library-modify playlist-read-private playlist-modify-public playlist-modify-private playlist-read-collaborative user-read-email user-read-birthdate user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming user-follow-read user-follow-modify',client_id= idCode,client_secret= secretCode,redirect_uri='http://google.com')
	f.close()
	#create our spotify object
	if token:
#Create a spotify object to access user dat
		spotifyObject = spotipy.Spotify(auth=token)
		URL = "https://api.spotify.com/v1/recommendations"
		headers = {'Authorization': 'Bearer ' + token}
		#Iterates through all the user names mentioned and gets all the artists listened to by a each person
		for username in usernames:
			myPlaylists = spotifyObject.user_playlists(username,limit=50, offset=0)
			for i in range(len(myPlaylists['items'])):
				if(myPlaylists['items'][i]['owner']['id'] == username):
					tracks = spotifyObject.user_playlist_tracks(username, myPlaylists['items'][i]['id'], limit=100,offset=0,market=None)
					for j in range(len(tracks['items'])):
						artists.append(tracks['items'][j]['track']['artists'][0]['id'])
	#Gets recommendations for that user based on the given tracks
			shuffle(artists)
			artists = artists[0:5]
			PARAMS = {'limit': str(tracksPerPerson), 'seed_artists': artists, 'min_danceability': str(minimumDanceability)}
			#
			r = requests.get(url = URL, params=PARAMS, headers = headers)
			recommendations = r.json()
			#print(recommendations)
			for track in recommendations['tracks']:
				recommendedTracks.append(track['id'])
			tracklist = []
		#Create the playlist on the first person that inputted their user name
		playlist = spotifyObject.user_playlist_create(usernames[0], playlistName, public = True)
		spotifyObject.user_playlist_add_tracks(usernames[0], playlist_id= playlist['id'], tracks=recommendedTracks)

	else:

		print("Can't get token for", username)
#####################################################################3


# Create your views here.

def home(request):
	return render(request, 'MainApp/home.html')

@csrf_exempt 
def submit(request):
	if request.method == "POST":
		makeUserPlaylist(request.POST['info'], request.POST['playlistname'], request.POST['playlistSize'], request.POST['dance'])
	#return HttpResponse("Playlist Created Successfully, Thank You For Choosing Partify! Party On!");
	return render(request, 'MainApp/home.html')