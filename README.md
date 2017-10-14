WGU+ Chrome extension
==========

Installing
-----

I will be adding this to the Chrome Webstore soon, follow these instructions for now:

Go to the dist folder
Click wgu+.crx
Click Download
Open [chrome://extensions](chrome://extensions)
Drag the downloaded wgu+.crx onto the Extensions webpage
Click Add extension

Description
-----

This chrome extension gives you a "Quick Links" option on the right your current course's pages. This appears directly above the Course Mentor/Announcements/etc options.
Once your course has been added to the extension, you will see quick links to uCertify, Lynda, SimLab, and other relevent study material.

<img src=https://github.com/bamhm182/WGU-Plus/blob/master/screenshots/WGU%2B%20Example.png"/>

Issues
-----

There are no known issues at this time.

If you find any, please let us know: [Issue Tracker](https://github.com/bamhm182/WGU-Plus/issues)

Contributing
-----

If your class is not already added, or if you would like to add additional resources, please clone this repository, make your changes, and request a comit.
If you are unfamiliar with Git, feel free to open an Issue with information about the resource you would like to add.

Resources are added to a <CLASS_ID>.txt file in the links folder.

<CLASS_ID> can be pulled from the class's URL on my.wgu.edu. For example: <br/>
8080002: https://my.wgu.edu/courses/course/8080002/course-material<br/>
7040001: https://my.wgu.edu/courses/course/7040001/course-material<br/>


Within this file, you will find each resource on its own line in the following format:<br/>
LINK_TYPE | LINK_NAME            | LINK

<b>LINK_TYPE</b>: uCertify, Lynda, LabSim, or TestOut have icons built in. Any other <LINK_TYPE> will have a book as the icon.<br/>
<b>LINK_NAME</b>: This will be displayed to the right of the icon. For example: Lynda or Lynda\<br/\>(Mike Meyers).<br/>
<b>LINK</b>: The URL to the resource.<br/>

Before submitting a link, please ensure that it is the most generic form. For example, if I click on a link to open uCertify, I may be taken to https://lrps.wgu.edu/provision/123456789 or https://wgu.ucertify.com/?func=load_course&course=WGU-220-902-complete&class_code=00000&chapter_no=1 both of these links are more complicated than they need to be or may not work for everyone.
Instead, shorten the link to https://wgu.ucertify.com/?func=load_course&course=WGU-220-902-complete
