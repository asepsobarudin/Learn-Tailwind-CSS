const portofolio = document.querySelector("#portofolio");
const skils = document.querySelector("#skils");

const portofolioContent = document.querySelector("#portofolioContent");
const skilsContent = document.querySelector("#skilsContent");

const portofolioLabel = document.querySelector("#portofolioLabel");
const skilsLabel = document.querySelector("#skilsLabel");

function TabContent() {
  if (portofolio.checked) {
    skilsLabel.classList.remove("labelTabsActive");
    portofolioLabel.classList.add("labelTabsActive");

    skilsContent.classList.add("tabsContent");
    portofolioContent.classList.remove("tabsContent");
    portofolioContent.classList.add("tabsContentActive");
    portofolioContent.classList.remove("tabsContentActive");
  }

  if (skils.checked) {
    portofolioLabel.classList.remove("labelTabsActive");
    skilsLabel.classList.add("labelTabsActive");

    portofolioContent.classList.remove("tabsContentActive");
    portofolioContent.classList.add("tabsContent");
    skilsContent.classList.remove("tabsContent");
    skilsContent.classList.remove("tabsContentActive");
  }
}

TabContent();

portofolioLabel.addEventListener("keyup", function (e) {
  skils.checked = false;
  portofolio.checked = true;
  if (e.keyCode == 13) {
    if (portofolio.checked) {
      TabContent();
    }
  }
});

skilsLabel.addEventListener("keyup", function (e) {
  portofolio.checked = false;
  skils.checked = true;
  if (e.keyCode == 13) {
    if (skils.checked) {
      TabContent();
    }
  }
});

portofolio.addEventListener("click", function () {
  skils.checked = false;
  TabContent();
});

skils.addEventListener("click", function () {
  portofolio.checked = false;
  TabContent();
});

const contactTab = document.querySelector("#contactTab");
const contactTabContent = document.querySelector("#contactContent");
const contactTabLabel = document.querySelector("#contactTabLabel");

function ContactTabActive() {
  if (contactTab.checked) {
    contactTabContent.classList.remove("hidden");
    contactTabContent.classList.add("flex");
    contactTabLabel.classList.add('contactButtonActive')
  } else {
    contactTabContent.classList.remove("flex");
    contactTabContent.classList.add("hidden");
    contactTabLabel.classList.remove('contactButtonActive')
  }
}

contactTab.addEventListener("click", function () {
  ContactTabActive();
});

contactTabLabel.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    contactTab.checked
      ? (contactTab.checked = false)
      : (contactTab.checked = true);
    if (contactTab.checked) {
      ContactTabActive();
    } else {
      ContactTabActive();
    }
  }
});

ContactTabActive();
