[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=17110918)
<img width="150px" src="https://www.nscc.ca/img/aboutnscc/visual-identity-guidelines/artwork/nscc-jpeg.jpg" >  
  

# PROG 5010 - Assignment 1 

##  APIs & HTML DOM

**Due as posted in Brightspace**
 
### Instructions:  

- Open this repository in the default GitHub Codespace as shown in class.
- Add the Live Server extension to VS Code as shown in class.
- You must ensure that your solution has been pushed to GitHub in order to get credit for the assignment.  
- This is to be an individual assignment (i.e. not group work).
- The **rubric/checklist** on Brightspace **should act as your guide of what to demonstrate in the video**. The video file (or link) should be submitted to **Brightspace** before the deadline.

###  Important Note: 

You must **ensure that your solution has been committed & pushed to GitHub at least three times** while working on the assignment (i.e. at different stages of completion) in order to get credit for the assignment.  

##  Overview

1. Examine the application at [https://www.brainbashers.com/show3inarow.asp](https://www.brainbashers.com/show3inarow.asp) and play it a few times to understand how it works. Your job will be to recreate a portion of this application with your own implementation of *pure JavaScript* (no frameworks or libraries) and working with the Document Object Model (DOM). Starting puzzle data will be retrieved remotely via an available API.

#### Basic Game Example:

 <img width="600px" src="https://prog5010.netlify.app/assign1_example.bmp" alt="Basic Game Example" >

2. You will simulate the 3-in-a-row puzzle by writing it in pure JavaScript.

	a. The data that you will work with is pre-defined JSON data from a remote location. [https://prog2700.onrender.com/threeinarow/sample](https://prog2700.onrender.com/threeinarow/sample) . This JSON data will serve as the underlying data structure which will represent your puzzle.

	b.	The display grid should be an HTML table. **However, the table must be generated only using JavaScript and without using the document.write() function to output the table tags.** (ie. You’ll need to create elements/nodes and attach them to the DOM).

	c. You will add unobtrusive JavaScript events to certain squares in the puzzle so that repeatedly left-clicking on the square will cycle through and change its state to one of three distinct possibilities:
	-	Empty (State 0)
	-	State 1
	-	State 2

	d. Squares that are set to a color (or image if you wish) at the beginning of the puzzle should not be changeable as stated in the JSON data.

	e. At any time during the playing of the puzzle the end user should be able to click a “Check Puzzle” button that displays one of the following status outputs
	- “So far so good” (all colored squares are correct but the puzzle is incomplete)
	-	“Something is wrong” (one or more of the colored squares is incorrectly assigned)
	-	“You did it!!” (all squares are correct and the puzzle has been completely filled in)

	f. A checkbox can be checked at any time which will cause the puzzle to display any incorrect squares. Unchecking the box will remove the indication of any incorrect squares.

	g. All JavaScript code will be unobtrusive.

	h. Your code must not be hard-coded to a 6 x 6 puzzle with the same starting squares always specified on the sample API URL. Your application should work seemlessly with 8x8, 10x10, 12x12, and even 14x14 puzzles provided by the following link: [https://prog2700.onrender.com/threeinarow/random](https://prog2700.onrender.com/threeinarow/random)

	i. You will also **add one Innovative Feature** to your version of the puzzle which will add meaningful value to the playing of the game. When you have decided your feature, or if you are struggling deciding what to add, discuss with your instructor for approval.

## Notes

- If solving this puzzle is not your thing, you can refer to the solution.png for the solution.

- The remote API data is test data for a 6x6 puzzle. You will however, be given a different API URL which will randomly send you a puzzle of varying sizes. **Your solution will need to accommodate the different puzzle sizes**. (ie, don’t write your solution to simply handle a 6x6 puzzle size.)

## General Requirements (37 points)

**REQ-001** **Retrieval of the JSON starting data for the Puzzle (6 pts.)**

Your starting JSON data for the puzzle will be retrieved from the Url [https://prog2700.onrender.com/threeinarow/sample](https://prog2700.onrender.com/threeinarow/sample) . This data will be used to inform the puzzle of its starting state. It also will serve as the data for the puzzle as it is played. (Ie, your JSON object should be updated as events on the puzzle are performed.

**REQ-002**  **Drawing and Displaying of 3-in-a-Row Table with JavaScript only (6 pts.)**

When the page loads, a grid based on the data structure defined in REQ-001 will have a similar display to the example images shown above. Feel free to use alternative colors if you wish. Styling should be implemented with basic CSS.

**You must use the DOM and JavaScript with a mixture of CSS to build the above table.** You are not permitted to use HTML tags to create the table and you are not permitted to use _document.write_ to output the table tags. Research online how you might do that and apply what you discover to this requirement.

**REQ-003** **Changing of Square Colors with Mouse Clicks (6 pts.)**

When the user left-clicks on a square in the grid, the color (or image) of the square should change to the next available color (in this case blue). If the square is left-clicked again, the color will change to the next option (in this case white). Another click will remove the square back to a neutral color (in this case grey).

Squares that are assigned a color when the puzzle loads should not be changeable with mouse clicks.

**REQ-004** **3-in-a-Row Puzzle Status Checking  (6 pts.)**

A button is provided which when clicked checks the current status of the puzzle as described above in the bulleted list. When the user clicks the button, there should be an appropriate message displayed to them which accurately describes the current status of the puzzle. If the puzzle is complete and the squares are correct, clicking the button will inform them that the puzzle is correct and complete.

**REQ-005** **Error Display Checkbox (6 pts.)**

A checkbox will be provided which when checked will mark any squares that have been incorrectly assigned. Unchecking the box will hide any error display.

**REQ-006** **Adding an Innovative Feature (7 pts.)**

A **significant and unique** feature will be added to the web site to give additional value to its role as a 3-in-a-row puzzle. This feature must provide **useful, value-adding** functionality in addition to the previous set of requirements. You might want to consider adding one of the additional bits of functionality that is available on the BrainBashers.com version of the puzzle. Check with the instructor to be sure that your choice is adequate.

## Architecture Requirements (3 points)

**REQ-007** **Unobtrusive JavaScript. (3 pts.)**

The JavaScript will all be unobtrusive.

  

## Instructions

**1.**  **Don’t forget that a Code Review demonstration of your code is a necessary part of this assignment. You MUST complete the code explanation/code review part of the video submission checklist to get credit for the assignment. Part of the assessment will include your ability to speak about the code you wrote, even if it doesn’t completely work or do what you expect. You do not need audio or to speak during the rest of the video, but it is required for the code review section as indicated in the checklist.**

**2.** **Late submissions will be subject to the late penalties laid out in the course outline.**

## Submission Instructions
### Video Recording Submission:

You will demonstrate the completion of this project via a **video screen-capture recording** of you navigating your completed Website in the **browser** (e.g. Chrome) and viewing your **code** in the text editor (e.g. VS Code within your GitHub Codespace) to show completion of the rubric/checklist. You will post **either your video file or a link to it** (e,g, a Microsoft Stream recording, make sure to give the instructor permissions to watch it), to the Brightspace Assignment 1 Dropbox prior to the deadline. If you are not sure of how best to capture such a video, seek advice from the instructor prior to the deadline.

NOTE: UNLIKE WEBD5000 **YOU WILL NEED TO SPEAK** DURING THE VIDEO. THERE IS A CODE REVIEW REQUIREMENT IN THE CHECKLIST THAT INVOLVES YOU EXPLAINING AT LEAST A PART OF YOUR CODE THROROUGHLY AND YOU MUST HAVE AUDIO FOR THAT.

> Written with [StackEdit](https://stackedit.io/).
