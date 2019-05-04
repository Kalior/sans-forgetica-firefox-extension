const CSS = "* { font-family: 'Sans Forgetica' !important; }";
const TITLE_APPLY = "Apply Sans Forgetica";
const TITLE_REMOVE = "Remove Sans Forgetica";

/*
Toggle CSS: based on the current title, insert or remove the CSS.
Update the page action's title and icon to reflect its state.
*/
function toggleCSS(tab) {
  function gotTitle(title) {
    if (title === TITLE_APPLY) {
      browser.browserAction.setIcon({
        tabId: tab.id,
        path: "icons/sansforgetica.svg"
      });
      browser.browserAction.setTitle({ tabId: tab.id, title: TITLE_REMOVE });
      browser.tabs.insertCSS({ code: CSS });
    } else {
      browser.browserAction.setIcon({
        tabId: tab.id,
        path: "icons/sansforgetica-white.svg"
      });
      browser.browserAction.setTitle({ tabId: tab.id, title: TITLE_APPLY });
      browser.tabs.removeCSS({ code: CSS });
    }
  }

  var gettingTitle = browser.browserAction.getTitle({ tabId: tab.id });
  gettingTitle.then(gotTitle);
}

/*
Toggle CSS when the page action is clicked.
*/
browser.browserAction.onClicked.addListener(toggleCSS);
