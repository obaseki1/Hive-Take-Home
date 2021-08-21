# Hive Take Home Project
 
The purpose of this project was to create a dropdown menu with the following requirements
- This component should receive props that determine what options are displayed in the dropdown as well as what values are selected.
- Multiselect and single select
- Display of the selected values (so that users can see what is selected when the dropdown is in the “closed” state
- Deselect value on click
- Open/Closed states
- Can your component render large lists efficiently?
- Is your component doing excessive computations?
- Extensibility. Can functionality be added to your component relatively easily?
- Readability. Can a fellow developer dive right into your code?
- Responsiveness
- Select All/Deselect all button
 
 
## Available Scripts
 
In the project directory, you can run:
 
### `npm i`
 
This command must be run in the root directory of the project in order to install all dependencies.
 
### `npm start`
 
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
 
The page will reload if you make edits.\
You will also see any lint errors in the console.
 
### `Dropdown Component Features`
 
The Dropdown component is passed three props (title, values, selectedValues). Before the user has selected any values, the dropdown will show the title prop, but once the user starts selecting values, those values will be placed inside of the dropdown so that they are always visible to the user. If the component is not passed a values prop, instead of crashing, a window alert will pop up explaining that there are no values. By clicking the 'x' beside a selected value, you can undo the selection. Alternatively, you can undo a selection by simply re-clicking it on the dropdown menu. In case of large amounts of selected data, I decided to make the selected values scrollable within the dropdown. In order to render large lists efficiently I used react virtualized list.
 
### `Extra Features`
 
When the app is first loaded, the home page will be the clone that I made of the Hive Micro web page. To see the dropdown menu click the button on the Nav bar that is labeled "Dropdown". Clicking the Hive logo on the Nav bar will take you back to the Hive Micro page.
 
### `Possible Improvements`
 
There are still plenty of things that can be added to the dropdown component as well as the Micro home page. While all of the required functionality is there for the dropdown component, it would strongly benefit from a better design. The micro home page was done quickly but could have better responsiveness. The nav bar would look much better with a responsive mobile menu. I also could have used better naming conventions as well. Lastly, the testing was very minimal, and mainly done as an example. This is not an exhaustive list of all improvements, and I would love to get some feedback on where I could have done better!
