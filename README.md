# word-freq-cal-app
word frequency calculator app based on react. Text can be stream or text file.

App.js -- React app that has been compiled to directly pluggable in any page, corresponding source written in JSX is in src folder. React app is made of a simple class based component containing an input filed, submit button and a table.

index.js -- Contains code to run node application ( backend ). Express.js is used for managing routes/requests.

request.js -- used for making requests from server side.

All other used modules are part of nodeJs i.e., path , fs and readline modules. Some dictionaries are copied online for contractions i.e., cleaning of data specifically for removing punctuations.

App is live at https://safe-harbor-55286.herokuapp.com/index

![inital](/screenshots/initial.png?raw=true "Initial on app launch")

![test1](/screenshots/test1.png?raw=true "Test case #1")

![test2](/screenshots/test3.png?raw=true "Test case #2")

![test3](/screenshots/test4.png?raw=true "Test case #3")