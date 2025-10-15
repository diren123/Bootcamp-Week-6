// Exercise 10 //

const colours = ['red', 'green', 'blue', 'orange', 'lime', 'olive', 'black', 'yellow'];

const blueToRed = () => {
  document.getElementById('blueParagraph').style.color = 'red';
};

const greenToPink = () => {
  const greenBgElements = document.querySelectorAll('.greenBg');
  greenBgElements.forEach(element => {
    element.style.backgroundColor = 'pink';
  });
};

const tnrToArial = () => {
  document.getElementById('tnrParagraph').style.fontFamily = 'Arial';
};

document.getElementById('textColour').addEventListener('click', blueToRed);
document.getElementById('bgColour').addEventListener('click', greenToPink);
document.getElementById('fonts').addEventListener('click', tnrToArial);

const mouseOver = event => {
  event.target.style.backgroundColor = 'limegreen';
  
  if (event.target.textContent.includes('background')) {
    if (!event.target.textContent.includes('I have had my background colour changed on mouse over')) {
      event.target.textContent += ' I have had my background colour changed on mouse over';
    }
  } else {
    event.target.textContent = event.target.textContent.replace('out', 'over');
  }
};

document.getElementById('tnrParagraph').addEventListener('mouseover', mouseOver);

const mouseOut = event => {
  event.target.style.backgroundColor = 'yellow';
  
  if (!event.target.textContent.includes('I have had my background colour changed on mouse out')) {
    event.target.textContent = event.target.textContent.replace('over', 'out');
  }
};

document.getElementById('tnrParagraph').addEventListener('mouseout', mouseOut);

const elementClick = event => {
  event.target.style.backgroundColor = 'white';
  event.target.textContent = 'I have no event listeners attached to me now';
  
  document.getElementById('fonts').removeEventListener('click', tnrToArial);
  event.target.removeEventListener('click', elementClick);
  event.target.removeEventListener('mouseover', mouseOver);
  event.target.removeEventListener('mouseout', mouseOut);
  
  if (event.target.id === 'tnrParagraph') {
    document.getElementById('blueParagraph').textContent = 'Event listeners enabled';
    document.getElementById('blueParagraph').addEventListener('click', elementClick);
    document.getElementById('blueParagraph').addEventListener('mouseover', mouseOver);
    document.getElementById('blueParagraph').addEventListener('mouseout', mouseOut);
  } else if (event.target.id === 'blueParagraph') {
    document.getElementById('tnrParagraph').textContent = 'Event listeners enabled';
    document.getElementById('tnrParagraph').addEventListener('click', elementClick);
    document.getElementById('tnrParagraph').addEventListener('mouseover', mouseOver);
    document.getElementById('tnrParagraph').addEventListener('mouseout', mouseOut);
  }
};

document.getElementById('tnrParagraph').addEventListener('click', elementClick);