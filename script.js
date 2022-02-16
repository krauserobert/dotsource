// Variablen definieren auf die wir im HTML zugreifen wollen
const button = document.getElementById("submitBtn-Js");
const newItem = document.getElementById("itemInputField-Js");
const itemList = document.getElementById("itemList-Js");

  // Eventlistener hinzufügen
  button.addEventListener("click", function() {

  // Überprüfen, ob im Eingabefeld etwas geschrieben wurde
  if (newItem.value) {
    
    // Lebensmittel zur Liste hinzufügen
    let textNode = document.createTextNode(newItem.value);

    // Listenelement erstellen (li)
    let newListItem = document.createElement("li");

    // Lebensmittel in die Liste einfügen
    newListItem.appendChild(textNode);

    // Listenelement (li + Text) der Liste (ul) hinzufügen
    itemList.appendChild(newListItem);

    // Nach Abschluss wird dem Eingabefeld ein leere String übergeben
    newItem.value = "";

    // else Block, hier geben wir einen Alert aus, wenn das Eingabeformular leer ist
    } else {
      window.alert("Bitte einen Wert eingeben.");
  }
});