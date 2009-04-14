var prefManager = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

/**
 * Called by the extension's preferences pane
 */
function populateMessagePref() {
	var messageTextBox = document.getElementById("defaultMessageField");
	messageTextBox.value = prefManager.getCharPref("extensions.fello.message");
}

/**
 * Sets the message to display. This comes in via the preferences pane
 * @param prefPaneElement The id of the text box in the preferences pane
 */
function setMessage(prefPaneElement) {
	var textBox = document.getElementById(prefPaneElement);
	prefManager.setCharPref("extensions.fello.message", textBox.value);
	alert("Message saved!");
}

/**
 * Called from the menu item in the Tools menu
 */
function showFello() {
//	showFelloPopup();
	showFelloWindow();
}

/**
 * Displays the extension's message in a message box
 */
function showFelloPopup() {
	alert(prefManager.getCharPref("extensions.fello.message"));
}

/**
 * Opens the extension's window in a new tab
 */
function showFelloWindow() {
	var theTab = gBrowser.addTab("chrome://fello/content/fello.xul");
	theTab.label = "Hello World! Extension";
	gBrowser.selectedTab = theTab;
	var func = function () { gBrowser.setIcon(theTab, "chrome://fello/content/images/fello18.png"); };
	setTimeout(func, 500);
}

/**
 * This is used by helloworld.xul to display the correct message
 */
function populateMessage() {
	document.getElementById("fello_div").innerHTML = document.getElementById("fello_div").innerHTML.replace("MESSAGE", prefManager.getCharPref("extensions.fello.message"));
}

function closeWindow() {
	window.close();
}

function about() {
	alert("fello v1.0.0");
}
