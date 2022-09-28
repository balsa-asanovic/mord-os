# Demo 
[MordOS - One OS to rule them all](https://eclectic-elf-55163d.netlify.app/)

username: borgoth@mordos.com  
password: 12bindthem

# How to run
`git clone` the project locally  
`npm install` to install all the dependencies  
`npm start` to run the project in your browser

# Screenshots

Login screen

![1.png](https://raw.githubusercontent.com/balsa-asanovic/mord-os/master/src/Screenshots/1.png)

Desktop

![2.png](https://raw.githubusercontent.com/balsa-asanovic/mord-os/master/src/Screenshots/2.png)

Logout

![3.png](https://raw.githubusercontent.com/balsa-asanovic/mord-os/master/src/Screenshots/3.png)

Icons moving

![4.png](https://raw.githubusercontent.com/balsa-asanovic/mord-os/master/src/Screenshots/4.png)

Applications

![5.png](https://raw.githubusercontent.com/balsa-asanovic/mord-os/master/src/Screenshots/5.png)

# Project requirements

You have just received a Slack message from Pete, our salesperson.

Borgoth, a serial entrepreneur with a plethora of mostly failed ventures, has contacted us to work on
his new idea. You can find a short brief below:

Mord OS, the operating system to rule them all. Borgoth believes that most entrepreneurs and
managers in his line of work require a more tailored operating system. It is possible to work with all the
different tooling that is already available but the constant context switch is not productive and
staggers the flow of work. He firmly believes that it should be web based so it is virtually available
everywhere. At this stage it would serve as an internal tool for his company but he is willing to offer it
later, if it receives traction.

Your assignment is to create a graphical user interface for a web based operating system. That couldnʼt
sound more wild than it actually is. This is an MVP so functionally itʼll be quite far from an OS but it
does need to look and feel like an OS, be appealing and fun to explore.

Borgoth, being the flaming venture demon, completely understands a lean approach and gives us our
full support. However, he believes some functionalities bring a lot of value:

Mord OS should support creating and managing plain text files and include a directory mechanic in
order to sort the files as one wishes.

There should be a simple authentication feature so not everyone can access the OS. A simple email
and password flow will do for now. (email: borgoth@mordos.com / pass: 12bindthem)

Borgoth hasnʼt decided on the look and feel of it yet and he doesnʼt want us to reinvent the wheel. The
OS should look familiar to other systems so it doesnʼt create confusion. He did mention that the web
is flooded with generic things so no visual UI libraries should be used.

Other functionalities that are not as crucial but could really help enrich the OS:

To keep up with all the news and banter going on, the OS could include a dedicated RSS reader app.
(data source: https://jsonplaceholder.typicode.com/comments)

Having a camera app seems like a must for any OS today.

It would be good if the OS had a Gallery app to view images from different sources without having to
switch. (data source: https://jsonplaceholder.typicode.com/photos , but can include others)

The OS could also have a dedicated web browser. Can be simple at first.

Borgoth isnʼt limiting us on anything here:
You can enrich the experience as much as you want!

# Components description

[App](https://github.com/balsa-asanovic/mord-os/blob/master/src/App.js) - renders either log in or desktop, depending on if you've already logged in

[Desktop](https://github.com/balsa-asanovic/mord-os/blob/master/src/components/Desktop/Desktop.js) - renders desktop environment with icons, taskbar and windows

[Taskbar](https://github.com/balsa-asanovic/mord-os/blob/master/src/components/Taskbar/Taskbar.js) - renders taskbar at the top of the screen, showing time and date on one side and offers log out option on the other
