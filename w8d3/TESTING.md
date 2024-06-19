# Moai Axe Tree!

# Test the functionality

- Robot will cheat and pick the opposite choice of the user
- Robot will not cheat and pick randomly
- Show a message about who won

## What kind of testing ?

- Static Testing (Linting / Runtime)
- Unit Testing (Single function, Single Component)
- Integration Testing (Integration Hell)
- End-to-End Testing (Very similar to Integration, Follow user stories)

## Unit

### pickOppositeChoice

- WRONG what if the input is not moai or axe or tree
- WRONG what if there was no input
- RIGHT check if the output is the good one
  
### pickRandomChoice

- RIGHT check that the output is part of the list of choices (RANDOM ALERT!)

### confirmTheWinner

- WRONG what if the input is not moai or axe or tree
- WRONG missing an input
- RIGHT check if the output is the good one

### Game Component (cheating/not cheating)

- RIGHT Should show the cheating class or not
- RIGHT When clicked, it should activate/deactive the cheating class

## Integration

### Once a player click on a choice, robot picks opposite and shows the computer win message
### Once a player click on the robot to deactive cheating, then on a choice, robot picks randomly and shows the win message