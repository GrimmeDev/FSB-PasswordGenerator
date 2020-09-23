# FSB-PasswordGenerator

## Purpose:
The purpose of this program is to randomly generate a password that follows the following criteria:
<ul>
    <li>User can set their own password length</li>
    <li>User can choose to add characters from the following</li>
    <ul>
        <li>Lowercase Characters</li>
        <li>Uppercase Characters</li>
        <li>Numerical Characters</li>
        <li>Special Characters</li>
    </ul>
</ul>

## Language used:
Primarily JavaScript for the functionality, main page is HTML with a CSS for the styling

### Psuedo example:

User is prompted for a numerical input between 8 and 128 (inclusively).
Validation is run to make sure that their input is between 8 and 128, and also only numbers have been entered.

User is then prompted 4 times, once for each character set (mentioned above).
Based on the return of the prompts, an array is generated containing all selected character sets.

Once the above has been completed, a random number is generated based on the total length of the previously generated array, and the index value is stored in a string via concatenation.

The final password is then returned to be displayed on the main page.

#### Live website link:
https://grimmedev.github.io/FSB-PasswordGenerator/

#### Example image:
![Example Image](Assets/exampleImage.png)