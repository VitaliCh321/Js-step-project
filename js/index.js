"use strict";

const DATA = [
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./img/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./img/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./img/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./img/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./img/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./img/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./img/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./img/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./img/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./img/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./img/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./img/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./img/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./img/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./img/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./img/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./img/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./img/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];

const defaultData = [...DATA];

const trainersCardsUl = document.querySelector(".trainers-cards__container");

const trainerCardTemplate = document.getElementById("trainer-card");
const modalTemplate = document.getElementById("modal-template");

const sortingSection = document.querySelector(".sorting");
const sideBarAside = document.querySelector(".sidebar");

const submitInput = document.querySelector(".filters__submit");

const container = new DocumentFragment();

const disableScroll = function () {
  document.body.style.overflow = "hidden";
  // document.body.style.paddingRight = `${window.innerWidth - document.body.offsetWidth}px`;
};

const enableScroll = function () {
  document.body.style.overflow = "";
};

const renderTrainerCardsByDefault = function (arrayOfTrainers) {
  // trainersCardsUl.innerHTML = "";

  const elements = arrayOfTrainers.map((trainerObj) => {
    const containerLiTemplate = trainerCardTemplate.cloneNode(true).content;
    const li = containerLiTemplate.querySelector(".trainer");
    console.log("li: ", li);

    const trainerImage = li.querySelector(".trainer__img");
    trainerImage.src = trainerObj.photo;

    const trainerP = li.querySelector(".trainer__name");
    trainerP.innerText = `${trainerObj["last name"]} ${trainerObj["first name"]}`;

    if (containerLiTemplate) {
      sortingSection.hidden = false;
      sideBarAside.hidden = false;
    }

    const openModal = function () {
      const clonedModalTemplate = modalTemplate.cloneNode(true).content;
      const modalBody = clonedModalTemplate.querySelector(".modal__body");
      const modal = clonedModalTemplate.querySelector(".modal");

      const modalImage = clonedModalTemplate.querySelector(".modal__img");
      modalImage.src = trainerObj.photo;

      const modalName = clonedModalTemplate.querySelector(".modal__name");
      modalName.innerText = `${trainerObj["first name"]} ${trainerObj["last name"]}`;

      const modalCategory = clonedModalTemplate.querySelector(
        ".modal__point--category",
      );
      modalCategory.innerText = trainerObj.category;

      const modalExperience = clonedModalTemplate.querySelector(
        ".modal__point--experience",
      );
      modalExperience.innerText = trainerObj.experience;

      const modalSpecialization = clonedModalTemplate.querySelector(
        ".modal__point--specialization",
      );
      modalSpecialization.innerText = trainerObj.specialization;

      const modalDescription =
        clonedModalTemplate.querySelector(".modal__text");
      modalDescription.innerText = trainerObj.description;

      console.log("clonedModalTemplate: ", clonedModalTemplate);

      disableScroll();
      document.body.append(clonedModalTemplate);

      const closeModalButton = modalBody.querySelector(".modal__close");

      const closeModal = function () {
        // modal.style.display = "none";
        modal.remove();
        enableScroll();
      };

      console.log("closeModalButton: ", closeModalButton);

      closeModalButton.addEventListener("click", closeModal);
      openModalButton.removeEventListener("click", openModal);
    };

    const openModalButton = li.querySelector(".trainer__show-more");
    openModalButton.addEventListener("click", openModal);

    return li;
  });

  console.log("elements: ", elements);

  container.append(...elements);
  trainersCardsUl.replaceChildren(container);
  // trainersCardsUl.append(container);
};

renderTrainerCardsByDefault(DATA);

const sortTrainersByLastName = function (arrayOfObjects) {
  const arraySortedByLastName = arrayOfObjects.sort((a, b) =>
    a["last name"].localeCompare(b["last name"], "uk"),
  );

  return arraySortedByLastName;
};

const sortTrainersByExperience = function (arrayOfObjects) {
  const arraySortedByExperience = arrayOfObjects.sort((a, b) => {
    const aExp = parseInt(a.experience);
    const bExp = parseInt(b.experience);
    return bExp - aExp;
  });

  return arraySortedByExperience;
};

const filterTrainersByDirectionAndCategory = function (
  arrayOfObjects,
  direction,
  category,
) {
  const GYMDIRECTION = "Тренажерний зал";
  const FIGHTCLUBDIRECTION = "Бійцівський клуб";
  const CHILDCLUBDIRECTION = "Дитячий клуб";
  const SWIMMINGPOOLDIRECTION = "Басейн";

  const MASTERCATEGORY = "майстер";
  const SPECIALISTCATEGORY = "спеціаліст";
  const INSTRUCTORCATEGORY = "інструктор";

  const directionsObject = {
    gym: GYMDIRECTION,
    "fight club": FIGHTCLUBDIRECTION,
    "kids club": CHILDCLUBDIRECTION,
    "swimming pool": SWIMMINGPOOLDIRECTION,
  };

  const categoryObject = {
    master: MASTERCATEGORY,
    specialist: SPECIALISTCATEGORY,
    instructor: INSTRUCTORCATEGORY,
  };

  // const directionValue = directionsObject[direction];
  // const categoryValue = categoryObject[category];

  // console.log("directionValue: ", directionValue);

  // if (!directionsObject[direction] || !categoryObject[category]) {
  //   return [];
  // }

  // if (
  //   directionsObject[direction] !== "all" &&
  //   categoryObject[category] !== "all"
  // ) {
  //   return [];
  // }
  // if (condition) {
  // }

  console.log(
    `${("directionsObject[direction]: ", directionsObject[direction])} and ${("categoryObject[category]: ", categoryObject[category])}`,
  );

  if (directionsObject[direction] && categoryObject[category]) {
    const filteredArray = arrayOfObjects.filter((trainerObj) => {
      return (
        trainerObj.specialization?.includes(directionsObject[direction]) &&
        trainerObj.category?.includes(categoryObject[category])
      );
    });
    return filteredArray;
  }

  if (directionsObject[direction]) {
    console.log("Bla bla bla");
    const filteredArrayByDirection = arrayOfObjects.filter((trainerObj) => {
      return trainerObj.specialization?.includes(directionsObject[direction]);
    });

    return filteredArrayByDirection;
  }

  if (categoryObject[category]) {
    console.log("Bla bla bla");
    const filteredArrayByCategory = arrayOfObjects.filter((trainerObj) => {
      return trainerObj.category?.includes(categoryObject[category]);
    });

    return filteredArrayByCategory;
  }

  // if (
  //   directionsObject[direction] !== "all" &&
  //   categoryObject[category] !== "all"
  // ) {
  //   const filteredArray = arrayOfObjects.filter((trainerObj) => {
  //     return (
  //       trainerObj.category?.includes(categoryObject[category]) &&
  //       trainerObj.specialization?.includes(directionsObject[direction])
  //     );
  //   });

  //   return filteredArray;
  // }
};

console.log(
  "filterTrainersByDirectionAndCategory(defaultData): ",
  filterTrainersByDirectionAndCategory(defaultData),
);

sortingSection.addEventListener("click", (event) => {
  if (event.target === event.currentTarget || event.target.tagName === "P") {
    return;
  }

  if (event.target.classList.contains("sorting__btn")) {
    document
      .querySelectorAll(".sorting__btn")
      .forEach((sortingButton, indexOfSortingButton) => {
        sortingButton.classList.remove("sorting__btn--active");
        sortingButton.classList.add(`btn-${indexOfSortingButton}`);
      });

    event.target.classList.add("sorting__btn--active");
  }

  if (event.target.classList.contains("btn-1")) {
    renderTrainerCardsByDefault(sortTrainersByLastName(defaultData));
  }

  if (event.target.classList.contains("btn-0")) {
    renderTrainerCardsByDefault(DATA);
  }

  if (event.target.classList.contains("btn-2")) {
    renderTrainerCardsByDefault(sortTrainersByExperience(defaultData));
  }
});

submitInput.addEventListener("click", (event) => {
  event.preventDefault();

  const selectedRadioDirection = document.querySelector(
    'input[name="direction"]:checked',
  );

  const selectedRadioCategory = document.querySelector(
    'input[name="category"]:checked',
  );

  console.log("selectedRadioDirection: ", selectedRadioDirection.value);
  console.log("selectedRadioCategory: ", selectedRadioCategory.value);

  if (
    selectedRadioDirection.value === "all" &&
    selectedRadioCategory.value === "all"
  ) {
    renderTrainerCardsByDefault(DATA);
  }

  if (
    selectedRadioDirection.value !== undefined &&
    selectedRadioCategory.value !== undefined
  ) {
    renderTrainerCardsByDefault(
      filterTrainersByDirectionAndCategory(
        defaultData,
        selectedRadioDirection.value,
        selectedRadioCategory.value,
      ),
    );
  }

  // if (selectedRadioDirection.value && selectedRadioCategory.value) {
  //   renderTrainerCardsByDefault(
  //     filterTrainersByDirectionAndCategory(
  //       defaultData,
  //       selectedRadioDirection.value,
  //       selectedRadioCategory.value,
  //     ),
  //   );
  // }

  // if (selectedRadioDirection.value && selectedRadioCategory.value)
  //   renderTrainerCardsByDefault(
  //     filterBySpecialization(
  //       defaultData,
  //       selectedRadioDirection.value,
  //       selectedRadioCategory.value,
  //     ),
  //   );
});

// sideBarAside.addEventListener("click", (event) => {
//   if (
//     event.target === event.currentTarget ||
//     event.target.classList.contains("filters__legend") ||
//     event.target.classList.contains("filters__fieldset") ||
//     event.target.classList.contains("sidebar__filters")
//   ) {
//     return;
//   }
//   console.log("event.target: ", event.target);
// });

// const renderTrainersCards = function (arrayOfObjects) {
//   arrayOfObjects.forEach((trainer) => {
//     const clonedTrainerLi = trainerCardTemplate.cloneNode(true).content;
//     const trainerLi = clonedTrainerLi.querySelector(".trainer");

//     const trainerImage = clonedTrainerLi.querySelector(".trainer__img");
//     trainerImage.src = trainer.photo;

//     const trainerParagraph = clonedTrainerLi.querySelector(".trainer__name");
//     trainerParagraph.innerText = `${trainer["first name"]} ${trainer["last name"]}`;

//     container.append(clonedTrainerLi);

//     if (clonedTrainerLi) {
//       sideBarAside.hidden = false;
//       sortingSection.hidden = false;
//     }

//     console.log("container: ", container);

//     const openModal = function () {
//       const clonedModalTemplate = modalTemplate.cloneNode(true).content;
//       const modalBody = clonedModalTemplate.querySelector(".modal__body");
//       const modal = clonedModalTemplate.querySelector(".modal");

//       const modalImage = clonedModalTemplate.querySelector(".modal__img");
//       modalImage.src = trainer.photo;

//       const modalName = clonedModalTemplate.querySelector(".modal__name");
//       modalName.innerText = `${trainer["first name"]} ${trainer["last name"]}`;

//       const modalCategory = clonedModalTemplate.querySelector(
//         ".modal__point--category",
//       );
//       modalCategory.innerText = trainer.category;

//       const modalExperience = clonedModalTemplate.querySelector(
//         ".modal__point--experience",
//       );
//       modalExperience.innerText = trainer.experience;

//       const modalSpecialization = clonedModalTemplate.querySelector(
//         ".modal__point--specialization",
//       );
//       modalSpecialization.innerText = trainer.specialization;

//       const modalDescription =
//         clonedModalTemplate.querySelector(".modal__text");
//       modalDescription.innerText = trainer.description;

//       console.log("clonedModalTemplate: ", clonedModalTemplate);

//       disableScroll();
//       document.body.append(clonedModalTemplate);

//       const closeModalButton = modalBody.querySelector(".modal__close");

//       const closeModal = function () {
//         // modal.style.display = "none";
//         modal.remove();
//         enableScroll();
//       };

//       console.log("closeModalButton: ", closeModalButton);

//       closeModalButton.addEventListener("click", closeModal);
//     };

//     const openModalButton = trainerLi.querySelector(".trainer__show-more");
//     openModalButton.addEventListener("click", openModal);
//   });

//   trainersCardsUl.append(container);
//   console.log("trainersCardsUl: ", trainersCardsUl);
// };

// console.log("renderTrainersCards(DATA):!!! ", renderTrainersCards(DATA));
// console.log("renderTrainersCards: ", renderTrainersCards(DATA));

// console.log("trainersCardsUl: ", trainersCardsUl);
