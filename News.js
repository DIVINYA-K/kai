        //Defining variables
        var question = document.querySelector('#question')
        var choicesElement = document.querySelector('#choices')
        var score = 0
        var userChoices = [];
        var quizQuestion = document.getElementById("quizQuestion"); 
        //Question Data is my array of questions and choices. This is my first set of Questions that is the same for everthing.
        var questionData = [
            {
                question: "How many Bentos would you like?",
                choices: [
                    {
                        type: 'text',
                        id: 'quantityInput',
                    }
                ]
                
            }, 
            {
                question: "Dietary Requirements?",
                choices: [
                    {
                        text: "Vegan",
                    },
                    {
                        text: "Vegetarian",
                    },
                    {
                        text: "Gluten Free",
                    },
                    {
                        text: "None",
                    },

                ]
                
            }, 
            {
                question: "Choose a Snack",
                choices: [ 
                    {
                        text: "Popcorn"
                    },
                    {
                        text: "Carrot Sticks"
                    },
                    {
                        text: "Nuts"
                    },
                    {
                        text: "Yougurt"
                    },
                    {
                        text: "Pea Crisps"
                    },
                    {
                        text: "Energy Bars"
                    },
                ]
            },
            {
                question: "Choose a main meal",
                choices: [
                    {
                        text: "Sushi",
                    },
                    {
                        text: "Wrap",
                    },
                    {
                        text: "Salad",
                    },
                    {
                        text: "Pizza",
                    },

                ]
            },
                   
        ]

        //This is my second questions data. These set of questions will only appear depending on which heading the user chooses in the previous question.

        var questionData2 = [
            {
                question: "Choose a main Sushi filling",
                choices: [ 
                    {
                        text: "Teriyaki Chicken"
                    },
                    {
                        text: "Salmon"
                    },
                    {
                        text: "Tuna"
                    },
                    {
                        text: "Tofu"
                    },
                    {
                        text: "Tempeh"
                    },
                    {
                        text: "Salmon GF Sushi"
                    },
                ]
            },
            {
                question: "Choose a main Wrap filling",
                choices: [ 
                    {
                        text: "Ham"
                    },
                    {
                        text: "Chicken"
                    },
                    {
                        text: "Egg"
                    },
                    {
                        text: "Tofu"
                    },
                    {
                        text: "Bean Burrito"
                    },
                    {
                        text: "Falafel GF"
                    },
                ]
            },
            {
                question: "Choose a type of Salad",
                choices: [ 
                    {
                        text: "Pasta Salad"
                    },
                    {
                        text: "Caesar Salad"
                    },
                    {
                        text: "Egg Salad"
                    },
                    {
                        text: "Quinoa"
                    },
                    {
                        text: "Pasta Veg"
                    },
                    {
                        text: "Cowboy Caviar GF"
                    },
                ]
            },
            {
                question: "Choose a main Pizza topping",
                choices: [ 
                    {
                        text: "Pepperoni"
                    },
                    {
                        text: "Plain Cheese"
                    },
                    {
                        text: "Olive"
                    },
                    {
                        text: "Veggie Vegan"
                    },
                    {
                        text: "Vegetable Veg"
                    },
                    {
                        text: "Pepperoni GF"
                    },
                ]
            }

        ]
        //This is declaring the variable questionState and setting it's initial value to 0.
        var questionState = 0

        //This is to make the first question in the Question Data array show in the inner HTML and then call the showChoices function.
        quizQuestion.innerHTML = questionData [questionState]['question'];
        showChoices();

        
        function showChoices() {
            //This clears the previous sets of choices before the new set for the next question shows up.
            choicesElement.innerHTML = "";
            
            //This is a for each loop, which access the current set of questions based on the questionState, which is which question it is on currently.
            questionData[questionState].choices.forEach(choice => {
               //This is a condition for if the choice type is text.
                if (choice.type === 'text') {
                    
                    //This is making a new input field(element)
                    var quantityInput = document.createElement('input');
                    //This makes the input that the user puts in only numbers so the user can't type in text
                    quantityInput.type = 'number';
                    //Styling the Input field
                    quantityInput.style.height = '40px';
                    quantityInput.style.width = '40px';
                    quantityInput.style.fontSize = '20px';
                    quantityInput.id = choice.id;
                    //This line of the code is attatching(append) quantityInput as a child to the Choices element. This needs to be done so that the new input field (quantityInput) can be shown in place of the choices, because this question doesn't have choices.
                    choicesElement.appendChild(quantityInput);
        
                    //This is creating a new button so that it can move on to the next question when clicked
                    var nextButton = document.createElement('button');
                    //The text that is shown on the button
                    nextButton.textContent = 'Next';
                    //This is adding an Event listener to this button. The event listner is used so that it can know when something has been done to that button for example if a user has clicked it.
                    nextButton.addEventListener('click', function () {
                        //This is declaring the quantity is the value of the quantityInput, which was declared before and is the number that is entered by the user.
                        var quantity = quantityInput.value;
                        //This line below (217) is saying that If the variable quantity is not a empty string so if something is entered follow the condiditons below. the !== is a not equal sign.
                        if (quantity !== "") {
                            //This line is putting a condition is the quantity is greater than 0 and less than 5 what it should do.
                            if (quantity > 0 && quantity < 5) {
                                //If the qunatity is entered and meets the condition above then what the user entered should be pushed into the array with the heading Quantity: before the number the user entered. The array will contain all the users choices once it is clicked and will be displayed at the end.
                                userChoices.push('Quantity: ' + quantity);
                                //This line means to move to the next question
                                questionState++;
                                //This is checking if there are more questions 
                                if (questionState < questionData.length) {
                                    //This is if there are more questions is should display the question depending on what question it is up to
                                    quizQuestion.innerHTML = questionData[questionState].question;
                                    //This is calling the showChoices function to show the choices for the current question
                                    showChoices();
                                }
                               //This else statement is for the if condition (quantity > 0 && quantity < 5) what should happen if the quantity that is entered is less that 0 
                            } else if (quantity < 0) {
                                //If the quantity is less than 0 the page will alert that the quantity is invalid
                                alert ("Quantity Invalid")
                            }
                            
                            else {
                                //This is what the alert will say if the quantity that the user entered is more than 5
                                alert("Please enter a quantity less than 5");
                            }
                            //This else statement is for the if statement if(quantity !==""), so if nothing is entered into the input field
                        } else {
                            //The alert will say please enter a quantity
                            alert("Please enter a quantity.");
                        }
                    });
                       
                    //This is attaching the nextButton to the choices element if the choice type is text
                    choicesElement.appendChild(nextButton);
                    //This is the else statement for if (choice.type === text)
                } else {
                    //This is creating a new button 
                    var choiceButton = document.createElement('button');
                    //This is making the text that is on the button to be equal to the text of the current questions choices
                    choiceButton.textContent = choice.text;
                    //This is attaching the choiceButton to the choices element
                    choicesElement.appendChild(choiceButton);
                    //Adding an event listener for the choiceButton
                    choiceButton.addEventListener('click', function () {
                        //This is getting the text on the button the user has clicked
                        var clickedChoice = choice.text;
                        //This is calling the choiceQuestion function with the ClickedChoice
                        choiceQuestion(clickedChoice);
                        //This is moving to the next question. (the else statement says that a choice has to be clicked though)
                        questionState++;

                        //Same as above explanation of this  
                        if (questionState < questionData.length) {
                            quizQuestion.innerHTML = questionData[questionState].question;
                            showChoices();
                        }
                    });
                }
            });
        }

        //The showChoices functions are similar, but they are for different sets of questions in questionData2. This depends on which choice the user choice in the last question of questionData (main meal question)
        function showChoices2() {
            var questionState = 0
            choicesElement.innerHTML = "";
            questionData2[questionState].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    userChoices.push(clickedChoice);
                    
                    //This is hiding the question and choices after this question is answered
                    quizQuestion.style.display = "none";
                    choicesElement.style.display = "none";
                    //Calling this function
                      displayUserChoices();
                  });
                });
              }
              
        
        function showChoices3() {
            var questionState2 = 1
            choicesElement.innerHTML = "";
            questionData2[questionState2].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    //Pushing the choices to the array called clickedChoice
                    userChoices.push(clickedChoice);
              
                    questionState++;
              
                    if (questionState < questionData2.length) {
                      quizQuestion.innerHTML = questionData2[questionState].question;
                      showChoices3();
                    } else {
                        quizQuestion.style.display = "none";
                        choicesElement.style.display = "none";
                      displayUserChoices();
                    }
                  });
                });
              }

        function showChoices4() {
            var questionState3 = 2
            choicesElement.innerHTML = "";
            questionData2[questionState3].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    userChoices.push(clickedChoice);
              
                    questionState++;
              
                    if (questionState < questionData2.length) {
                      quizQuestion.innerHTML = questionData2[questionState].question;
                      showChoices4();
                    } else {
                        quizQuestion.style.display = "none";
                        choicesElement.style.display = "none";
                      displayUserChoices();
                    }
                  });
                });
              }

        
        function showChoices5() {
            var questionState4 = 3
            choicesElement.innerHTML = "";
            questionData2[questionState4].choices.forEach(choice => {
                var choiceButton = document.createElement('button');
                choiceButton.textContent = choice.text;
                choicesElement.appendChild(choiceButton);
                choiceButton.addEventListener("click", function () {
                    var clickedChoice = choice.text;
                    userChoices.push(clickedChoice);
              
                    questionState++;
              
                    if (questionState < questionData2.length) {
                      quizQuestion.innerHTML = questionData2[questionState].question;
                      showChoices5();
                    } else {
                        quizQuestion.style.display = "none";
                        choicesElement.style.display = "none";
                      displayUserChoices();
                    }
                  });
                });
              }

        //Function for which showChoice should show depending on which is clicked.
        function choiceQuestion(clickedChoice) {
            userChoices.push(clickedChoice);
               //If Sushi is clicked then it will go to showChoices2 which is the choices for that question.
            if (clickedChoice === "Sushi") {
                //This is setting the questionState or the question number to 0 which is the first question in the array questionData 2
                var questionState = 0;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                //Calling the showChoices2 function
                showChoices2();
            } 
             //If Wrap  is clicked then it will go to showChoices3 which is the choices for that question.
            else if (clickedChoice === "Wrap") {
                //This is setting the questionState to 1 which is the question number for the Wrap question in the array questionData 2
                var questionState = 1;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                //Calling the showChoices3 function
                showChoices3();
            } 
             //If Salad is clicked then it will go to showChoices4 which is the choices for that question.
            else if (clickedChoice === "Salad") {
                //This is setting the questionState to 2 which is the question number for the Salad question in the array questionData 2
                var questionState = 2;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                //Calling the showChoices4 function
                showChoices4();
            } 
            //If Pizza is clicked then it will go to showChoices5 which is the choices for that question.
            else if (clickedChoice === "Pizza") {
                //This is setting the questionState to 3 which is the question number for the Pizza question in the array questionData 2
                var questionState = 3;
                quizQuestion.innerHTML = questionData2[questionState]['question'];
                //Calling the showChoices5 function
                showChoices5();
            }
            
        }
        
        //This is the function to display all the choices that was clicked by the user and was stored in the array
        function displayUserChoices(){
            //Getting the HTML element where the Choices will be shown
            var userChoicesContainer = document.getElementById("userChoicesContainer");
            //Having the h2 'You have picked:' in the userChoicesContainer
            userChoicesContainer.innerHTML = "<h2>You have picked:</h2>";
            userChoices.forEach(choice => {
                  //Making a paragraph element for each (becuase of the .forEach) choice that the user picked. 
                var choiceElement = document.createElement("p");
                //Making the text in the <p> to be the choice the user picked
                choiceElement.textContent = choice;
                //Attaching the choiceElement (the <p>) to the userChoicesContainer
                userChoicesContainer.appendChild(choiceElement);
                document.getElementById("userInputSection").style.display = "block";
            });
        }
        



        
    
    