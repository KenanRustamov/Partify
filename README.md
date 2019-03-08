**Partify**

*Demo at the bottom*

**Contributors**
* Kenan Rustamov @KenanRustamov
* Elijah Kajinic @ELK75
* Alex Thorpe @athorpe71
* Willis Larson @ductapemobie

**Description:**

Partify is a web application that allows you to final settle disputes over music at a get together or outing.  All you have to do is input the spotify usernames into our web application and it will create a playlist that is tailored to all of your playlists.

**Inspiration:**

We always have our friends over, but there's always ongoing debate on who gets to chose the songs to play. We decided to create an app to take people's music tastes and create a playlist for them that combines their interests.

**Soon to Come:**

* We are currently working on creating a hosted website where that anyone will be able to access.
* Also working on creating playlists that are more accurate in terms of taste
* Adding optionality to add preferences to the playlist such as a playlist for a party, group music exploration, car ride...etc

**How to Get the Most Out of Partify:**

* Populate your account with multiple public playlists that match your music taste
* Choose the danceability that you would like on our application

**Setup Directions**
There are many things that have not been tweaked with the application.  As such, there are a few changes needed to run the application on your local host.

1. pip install django on command prompt, if it does not recognize the command, download pip online
1. pip install pillow
1. pip install virtualenvwrapper-win
1. First, create a file named keys.txt inside the "MainApp" folder with your spotify client_ID on the first line and Secret_ID on the second line and change the absolute path on views.py file on line 24 to open("*Absolute File Path to keys.txt*")
1. Next, change the paths in settings.py on lines 71, 74, 141, and 145, with the absolute paths for SpartifyTemps, MainAppTemps,  MainApp\Static\MainApp, and MainApp\media\MainApp

**Running Directions**

1. Navigate to Partify Folder on Terminal
1. Run with Python manage.py runserver 1414
1. Go to URL http://127.0.0.1:1414/MainApp/ on any browser

**Demonstration**

![Alt Text](https://github.com/KenanRustamov/Partify/blob/master/PartifyPlaythrough.gif)
