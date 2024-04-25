document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".characters__tabs__button");
    const tabContents = document.querySelectorAll(".characters__card-container");
    const questionItems = document.querySelectorAll(".faq__questions__item__question");

  
    tabButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const tabId = this.getAttribute("data-tab-button");

        tabContents.forEach((content) => {
          content.classList.add("hidden");
        });
  
        tabButtons.forEach((btn) => {
          btn.classList.remove("characters__tabs__button--is-active");
        });
  
        const activeTabContent = document.querySelector(
          `[data-tab-id="${tabId}"]`
        );
        activeTabContent.classList.remove("hidden");
  
        this.classList.add("characters__tabs__button--is-active");
      });
    });

    questionItems.forEach((question) => {
        question.addEventListener("click", function () {
          const answer = this.nextElementSibling;
          const isOpen = this.classList.contains("is-open");
    
          // Fecha todas as respostas
          questionItems.forEach((item) => {
            item.classList.remove("is-open");
            item.nextElementSibling.classList.remove("is-open");
          });
    
          if (!isOpen) {
            this.classList.add("is-open");
            answer.classList.add("is-open");
          }
        });
      });

  });
  