/* eslint-disable max-len */
document.body.id = 'body';
let newElement = '';
export default function createElement(elementTag, parentID, className, idName, heightPercent, widthPercent, insideText) {
  newElement = document.createElement(elementTag);
  if (className !== '') {
    newElement.classList = className;
  }

  if (idName !== '') {
    newElement.id = idName;
  }
  if (parentID !== '') {
    document.getElementById(parentID).appendChild(newElement);
  }
  if (heightPercent !== '') {
    newElement.style.height = `${heightPercent}%`;
  }
  if (widthPercent !== '') {
    newElement.style.width = `${widthPercent}%`;
  }
  if (insideText !== undefined) {
    newElement.innerText = insideText;
  }
  return newElement;
}
