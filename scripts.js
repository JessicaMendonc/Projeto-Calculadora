// seleção dos elementos
const previousOperationText = document.quereySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-conatiner button");

//lógica da aplicação calculadora 
class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation  = ""
    }

    formatDisplayNumber (number) {
        const stringNumber = number.toString();

        const integerDigits = parse.Float(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];

        let integerDisplay;

        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else { 
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0,
             });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }
}
    
