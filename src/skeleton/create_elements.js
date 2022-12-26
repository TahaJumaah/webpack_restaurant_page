document.body.id = 'body';
export default function createElement(elementTag, parentID, className, idName, heightPercent, widthPercent) {
  const newElement = document.createElement(elementTag);
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
}
