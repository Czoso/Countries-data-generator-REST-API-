Hi!
As a creator of this project i'd like to introduce you to my small activation guide:
1. You will need a code editor on your PC installed (I personally prefer visual studio code - https://code.visualstudio.com/)
2. After installing and configuring your app you need to create folder where you want to place this project
3. After opening folder in app paste following commands to the comand line in your console (CTRL + ~ in VS code):
  a) git init
  b) git branch -M main
  c) git remote add origin https://github.com/Czoso/Countries-data-generator-REST-API-.git
  d) git pull origin master
 
At this point this project should take place on your computer. To run it you need to do following steps (those steps are necessary because project uses module type in script tag):
 1. Download "Live Server" extension in your app
 2. Right-click on the typing area and choose "Open with Live Server" option.

The project should be opened in your default browser.

At the beginning there are only input field and button. Type the number of countries you want to receive information about and click "Create Data"Ther
There should be information from second API displayed on your screen and informations from first API displayed in console.

I decided to fetch more information from first API, because not every country from first API exist in the second one (Netherlands Antilles for example), and some others have their names changed.

