const mutations = [
    {
        id: "normal",
        name: "Normal",
        icon: "🍃",
        iconSrc: "images/mutations/normal.svg",
        background: "#f2faee",
        border: "#a7cfa6",
        text: "#176b43",
        glow: "rgba(90, 180, 90, 0.50)"
    },
    {
        id: "wet",
        name: "Wet",
        icon: "💧",
        iconSrc: "images/mutations/wet.svg",
        background: "#e5f8ff",
        border: "#39bde8",
        text: "#087fae",
        glow: "rgba(57, 189, 232, 0.55)"
    },
    {
        id: "chilled",
        name: "Chilled",
        icon: "❄️",
        iconSrc: "",
        background: "#effdfd",
        border: "#82d8d5",
        text: "#258f94",
        glow: "rgba(130, 216, 213, 0.55)"
    },
    {
        id: "frozen",
        name: "Frozen",
        icon: "🧊",
        iconSrc: "",
        background: "#e7f1ff",
        border: "#4a90e2",
        text: "#1f5fae",
        glow: "rgba(74, 144, 226, 0.60)"
    },
    {
        id: "dawnlit",
        name: "Dawnlit",
        icon: "✦",
        iconSrc: "images/mutations/dawnlit.svg",
        background: "#f3d7e8",
        border: "#c94f91",
        text: "#8f245f",
        glow: "rgba(201, 79, 145, 0.60)"
    },
    {
        id: "amberlit",
        name: "Amberlit",
        icon: "◆",
        iconSrc: "images/mutations/amberlit.svg",
        background: "#f6dfc2",
        border: "#d88a32",
        text: "#a95416",
        glow: "rgba(216, 138, 50, 0.60)"
    },
    {
        id: "thunderstruck",
        name: "Thunderstruck",
        icon: "⚡",
        iconSrc: "images/mutations/thunderstruck.svg",
        background: "#fff5c7",
        border: "#e8bd39",
        text: "#a97800",
        glow: "rgba(232, 189, 57, 0.65)"
    },
    {
        id: "gold",
        name: "Gold",
        icon: "★",
        iconSrc: "images/mutations/gold.svg",
        background: "#f8edc8",
        border: "#d7ad3c",
        text: "#9b7214",
        glow: "rgba(215, 173, 60, 0.60)"
    },
    {
        id: "rainbow",
        name: "Rainbow",
        icon: "🌈",
        iconSrc: "images/mutations/rainbow.svg",
        background: "linear-gradient(90deg, #f2c9dc 0%, #e2c9ee 28%, #cbdcf0 52%, #cce7d5 74%, #f0dfb5 100%)",
        border: "#b969b3",
        text: "#8d3f91",
        glow: "rgba(185, 105, 179, 0.60)"
    },
    {
        id: "dawnbound",
        name: "Dawnbound",
        icon: "✦",
        iconSrc: "images/mutations/dawnbound.svg",
        background: "#e2c5ee",
        border: "#a85fcc",
        text: "#6d2f99",
        glow: "rgba(168, 95, 204, 0.65)"
    },
    {
        id: "amberbound",
        name: "Amberbound",
        icon: "✦",
        iconSrc: "images/mutations/amberbound.svg",
        background: "#efd4bf",
        border: "#c97a36",
        text: "#8f4a17",
        glow: "rgba(201, 122, 54, 0.65)"
    },
    {
        id: "thundercharged",
        name: "Thundercharged",
        icon: "⚡",
        iconSrc: "images/mutations/thundercharged.svg",
        background: "#cfeaf5",
        border: "#3c9dcc",
        text: "#176a9b",
        glow: "rgba(60, 157, 204, 0.65)"
    },
    {
        id: "max-weight",
        name: "Max Weight",
        icon: "📏",
        iconSrc: "images/mutations/max-weight.svg",
        background: "#e2e2e2",
        border: "#9a9a9a",
        text: "#555555",
        glow: "rgba(120, 120, 120, 0.55)"
    }
];


const petMutations = [
    {
        id: "pet-normal",
        name: "Normal",
        icon: "🐾",
        iconSrc: "images/mutations/pet-normal.svg",
        background: "#f2faee",
        border: "#a7cfa6",
        text: "#176b43",
        glow: "rgba(90, 180, 90, 0.50)"
    },
    {
        id: "pet-gold",
        name: "Gold",
        icon: "★",
        iconSrc: "images/mutations/gold.svg",
        background: "#f8edc8",
        border: "#d7ad3c",
        text: "#9b7214",
        glow: "rgba(215, 173, 60, 0.60)"
    },
    {
        id: "pet-rainbow",
        name: "Rainbow",
        icon: "🌈",
        iconSrc: "images/mutations/rainbow.svg",
        background: "linear-gradient(90deg, #f2c9dc 0%, #e2c9ee 28%, #cbdcf0 52%, #cce7d5 74%, #f0dfb5 100%)",
        border: "#b969b3",
        text: "#8d3f91",
        glow: "rgba(185, 105, 179, 0.60)"
    },
    {
        id: "pet-max-size",
        name: "Max Size",
        icon: "📏",
        iconSrc: "images/mutations/max-weight.svg",
        background: "#e2e2e2",
        border: "#9a9a9a",
        text: "#555555",
        glow: "rgba(120, 120, 120, 0.55)"
    }
];


let plants = [];
let pets = [];

const WIKI_BASE = "https://magicgarden.wiki/";


const mutationList =
    document.getElementById("mutation-list");

const petMutationList =
    document.getElementById("pet-mutation-list");

const searchInput =
    document.getElementById("plant-search");

const petSearchInput =
    document.getElementById("pet-search");

const completedToggle =
    document.getElementById("completed-toggle");

const petCompletedToggle =
    document.getElementById("pet-completed-toggle");

const collapseAllButton =
    document.getElementById("collapse-all");

const petCollapseAllButton =
    document.getElementById("pet-collapse-all");

const clearAllButton =
    document.getElementById("clear-all");

const petClearAllButton =
    document.getElementById("pet-clear-all");

const plantsTab =
    document.getElementById("plants-tab");

const petsTab =
    document.getElementById("pets-tab");

const plantsView =
    document.getElementById("plants-view");

const petsView =
    document.getElementById("pets-view");

const overallIcon =
    document.getElementById("overall-icon");

const overallCount =
    document.getElementById("overall-count");

const overallLabel =
    document.getElementById("overall-label");

const overallPercent =
    document.getElementById("overall-percent");

const overallProgressFill =
    document.getElementById("overall-progress-fill");


const STORAGE_KEY =
    "garden-companion-state-v2";


let state = {

    collected: {},

    expanded: [],

    hideCompleted: false,

    petCollected: {},

    petExpanded: [],

    petHideCompleted: false,

    selectedTab: "plants"

};


async function loadPlants() {

    const response =
        await fetch(
            "data/plants.json"
        );


    if (!response.ok) {

        throw new Error(
            "Could not load plants.json"
        );

    }


    const data =
        await response.json();


    plants =
        Array.isArray(data)
            ? data
            : (data.plants || []);

}


async function loadPets() {

    const response =
        await fetch(
            "data/pets.json"
        );


    if (!response.ok) {

        throw new Error(
            "Could not load pets.json"
        );

    }


    const data =
        await response.json();


    pets =
        Array.isArray(data)
            ? data
            : (data.pets || []);

}


function loadState() {

    const saved =
        localStorage.getItem(
            STORAGE_KEY
        );


    if (!saved) {
        return;
    }


    try {

        state = {

            ...state,

            ...JSON.parse(saved)

        };

    } catch (error) {

        console.error(
            "Could not load saved progress.",
            error
        );

    }

}


function saveState() {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(state)

    );

}


function prepareCollectionData() {

    mutations.forEach(
        mutation => {

            if (
                !Array.isArray(
                    state.collected[
                        mutation.id
                    ]
                )
            ) {

                state.collected[
                    mutation.id
                ] = [];

            }

        }
    );


    petMutations.forEach(
        mutation => {

            if (
                !Array.isArray(
                    state.petCollected[
                        mutation.id
                    ]
                )
            ) {

                state.petCollected[
                    mutation.id
                ] = [];

            }

        }
    );


    if (!Array.isArray(state.expanded)) {

        state.expanded = [];

    }


    if (!Array.isArray(state.petExpanded)) {

        state.petExpanded = [];

    }

}


function getMutationIcon(
    mutation
) {

    if (mutation.iconSrc) {

        return `
            <img
                src="${mutation.iconSrc}"
                alt="${mutation.name}"
            >
        `;

    }


    return mutation.icon;

}


function getWikiURL(
    item
) {

    const pageName =
        item.wikiTitle
            .replaceAll(
                " ",
                "_"
            );


    return (
        WIKI_BASE +
        encodeURIComponent(
            pageName
        )
    );

}


function getCollection(
    isPet
) {

    return isPet
        ? state.petCollected
        : state.collected;

}


function getExpandedList(
    isPet
) {

    return isPet
        ? state.petExpanded
        : state.expanded;

}


function setExpandedList(
    isPet,
    value
) {

    if (isPet) {

        state.petExpanded =
            value;

    } else {

        state.expanded =
            value;

    }

}


function getHideCompleted(
    isPet
) {

    return isPet
        ? state.petHideCompleted
        : state.hideCompleted;

}


function isCollected(
    mutationId,
    itemId,
    isPet = false
) {

    return (
        getCollection(isPet)[
            mutationId
        ] || []
    ).includes(
        itemId
    );

}


function getMutationCount(
    mutationId,
    isPet = false
) {

    return (
        getCollection(isPet)[
            mutationId
        ] || []
    ).length;

}


function isExpanded(
    mutationId,
    isPet = false
) {

    return getExpandedList(
        isPet
    ).includes(
        mutationId
    );

}


function toggleSection(
    mutationId,
    isPet = false
) {

    const expanded =
        getExpandedList(
            isPet
        );


    if (
        expanded.includes(
            mutationId
        )
    ) {

        setExpandedList(

            isPet,

            expanded.filter(
                id =>
                    id !== mutationId
            )

        );

    } else {

        setExpandedList(

            isPet,

            [
                ...expanded,
                mutationId
            ]

        );

    }


    saveState();


    if (isPet) {

        renderPetMutationSections();

    } else {

        renderMutationSections();

    }

}


function toggleItem(
    mutationId,
    itemId,
    isPet = false
) {

    const collection =
        getCollection(isPet)[
            mutationId
        ];


    const position =
        collection.indexOf(
            itemId
        );


    if (position >= 0) {

        collection.splice(
            position,
            1
        );

    } else {

        collection.push(
            itemId
        );

    }


    saveState();


    if (isPet) {

        renderPetMutationSections();

    } else {

        renderMutationSections();

    }

}


function updateOverallProgress() {

    const isPet =
        state.selectedTab ===
        "pets";


    const mutationSet =
        isPet
            ? petMutations
            : mutations;


    const items =
        isPet
            ? pets
            : plants;


    let collected =
        0;


    mutationSet.forEach(
        mutation => {

            collected +=
                getMutationCount(
                    mutation.id,
                    isPet
                );

        }
    );


    const total =
        mutationSet.length *
        items.length;


    const percent =
        total === 0
            ? 0
            : (
                collected /
                total
            ) * 100;


    overallIcon.textContent =
        isPet
            ? "🐾"
            : "🍃";


    overallCount.textContent =
        `${collected} / ${total}`;


    overallLabel.textContent =
        isPet
            ? "Pets Collected"
            : "Plants Collected";


    overallPercent.textContent =
        `${percent.toFixed(1)}% Complete`;


    overallProgressFill.style.width =
        `${percent}%`;

}


function createCollectionCard(
    mutation,
    item,
    isPet = false
) {

    const collected =
        isCollected(
            mutation.id,
            item.id,
            isPet
        );


    const card =
        document.createElement(
            "div"
        );


    card.className =
        collected
            ? "plant-card collected"
            : "plant-card";


    const imageBox =
        document.createElement(
            "div"
        );


    imageBox.className =
        "plant-image";


    const image =
        document.createElement(
            "img"
        );


    image.src =
        item.image;


    image.alt =
        item.name;


    image.addEventListener(
        "error",
        () => {

            imageBox.innerHTML =
                isPet
                    ? "🐾"
                    : "🌱";

        },
        {
            once: true
        }
    );


    imageBox.appendChild(
        image
    );


    const name =
        document.createElement(
            "div"
        );


    name.className =
        "plant-name";


    name.textContent =
        item.name;


    const status =
        document.createElement(
            "div"
        );


    status.className =
        "plant-status";


    status.textContent =
        collected
            ? "✓ Collected"
            : "○ Not Found";


    card.appendChild(
        imageBox
    );


    card.appendChild(
        name
    );


    card.appendChild(
        status
    );


    card.addEventListener(
        "click",
        () => {

            toggleItem(
                mutation.id,
                item.id,
                isPet
            );

        }
    );


    card.addEventListener(
        "contextmenu",
        event => {

            event.preventDefault();


            window.open(

                getWikiURL(
                    item
                ),

                "_blank",

                "noopener,noreferrer"

            );

        }
    );


    return card;

}


function createMutationContent(
    mutation,
    isPet = false
) {

    const content =
        document.createElement(
            "div"
        );


    content.className =
        "mutation-content";


    const grid =
        document.createElement(
            "div"
        );


    grid.className =
        "plant-grid";


    const items =
        isPet
            ? pets
            : plants;


    const input =
        isPet
            ? petSearchInput
            : searchInput;


    const search =
        (
            input?.value ||
            ""
        )
            .trim()
            .toLowerCase();


    const visibleItems =
        items.filter(
            item => {

                const matchesSearch =

                    search === "" ||

                    item.name
                        .toLowerCase()
                        .includes(search) ||

                    item.wikiTitle
                        .toLowerCase()
                        .includes(search);


                const collected =
                    isCollected(
                        mutation.id,
                        item.id,
                        isPet
                    );


                const passesCompleted =

                    !getHideCompleted(
                        isPet
                    ) ||

                    !collected;


                return (
                    matchesSearch &&
                    passesCompleted
                );

            }
        );


    if (
        visibleItems.length === 0
    ) {

        const message =
            document.createElement(
                "div"
            );


        message.className =
            "no-results";


        message.textContent =
            isPet
                ? "No matching pets in this section."
                : "No matching plants in this section.";


        content.appendChild(
            message
        );


        return content;

    }


    visibleItems.forEach(
        item => {

            grid.appendChild(

                createCollectionCard(
                    mutation,
                    item,
                    isPet
                )

            );

        }
    );


    content.appendChild(
        grid
    );


    return content;

}


function renderSections({
    mutationSet,
    listElement,
    items,
    input,
    isPet
}) {

    if (!listElement) {
        return;
    }


    listElement.innerHTML =
        "";


    const search =
        (
            input?.value ||
            ""
        )
            .trim()
            .toLowerCase();


    mutationSet.forEach(
        mutation => {

            const collected =
                getMutationCount(
                    mutation.id,
                    isPet
                );


            const total =
                items.length;


            const percent =
                total === 0
                    ? 0
                    : (
                        collected /
                        total
                    ) * 100;


            const section =
                document.createElement(
                    "article"
                );


            section.className =
                "mutation-section";


            if (
                isExpanded(
                    mutation.id,
                    isPet
                )
            ) {

                section.classList.add(
                    "open"
                );

            }


            section.style.setProperty(
                "--mutation-background",
                mutation.background
            );


            section.style.setProperty(
                "--mutation-border",
                mutation.border
            );


            section.style.setProperty(
                "--mutation-text",
                mutation.text
            );


            section.style.setProperty(
                "--mutation-glow",
                mutation.glow
            );


            if (
                search !== ""
            ) {

                const missingMatch =
                    items.some(
                        item => {

                            const matches =

                                item.name
                                    .toLowerCase()
                                    .includes(search) ||

                                item.wikiTitle
                                    .toLowerCase()
                                    .includes(search);


                            return (
                                matches &&
                                !isCollected(
                                    mutation.id,
                                    item.id,
                                    isPet
                                )
                            );

                        }
                    );


                if (missingMatch) {

                    section.classList.add(
                        "search-match"
                    );

                }

            }


            const header =
                document.createElement(
                    "button"
                );


            header.type =
                "button";


            header.className =
                "mutation-header";


            header.innerHTML = `

                <div class="mutation-name">

                    <span class="mutation-icon">

                        ${getMutationIcon(
                            mutation
                        )}

                    </span>

                    <span>
                        ${mutation.name}
                    </span>

                </div>


                <div class="mutation-progress">

                    <div
                        class="mutation-progress-fill"
                        style="width: ${percent}%"
                    ></div>

                </div>


                <div class="mutation-count">

                    ${collected} / ${total}

                </div>


                <div class="mutation-arrow">
                    ▼
                </div>

            `;


            header.addEventListener(
                "click",
                () => {

                    toggleSection(
                        mutation.id,
                        isPet
                    );

                }
            );


            section.appendChild(
                header
            );


            if (
                isExpanded(
                    mutation.id,
                    isPet
                )
            ) {

                section.appendChild(

                    createMutationContent(
                        mutation,
                        isPet
                    )

                );

            }


            listElement.appendChild(
                section
            );

        }
    );

}


function renderMutationSections() {

    renderSections({

        mutationSet:
            mutations,

        listElement:
            mutationList,

        items:
            plants,

        input:
            searchInput,

        isPet:
            false

    });


    if (
        state.selectedTab ===
        "plants"
    ) {

        updateOverallProgress();

    }

}


function renderPetMutationSections() {

    renderSections({

        mutationSet:
            petMutations,

        listElement:
            petMutationList,

        items:
            pets,

        input:
            petSearchInput,

        isPet:
            true

    });


    if (
        state.selectedTab ===
        "pets"
    ) {

        updateOverallProgress();

    }

}


searchInput?.addEventListener(
    "input",
    renderMutationSections
);


petSearchInput?.addEventListener(
    "input",
    renderPetMutationSections
);


completedToggle?.addEventListener(
    "click",
    () => {

        state.hideCompleted =
            !state.hideCompleted;


        completedToggle.textContent =
            state.hideCompleted
                ? "👁 Show Completed"
                : "👁 Hide Completed";


        saveState();

        renderMutationSections();

    }
);


petCompletedToggle?.addEventListener(
    "click",
    () => {

        state.petHideCompleted =
            !state.petHideCompleted;


        petCompletedToggle.textContent =
            state.petHideCompleted
                ? "👁 Show Completed"
                : "👁 Hide Completed";


        saveState();

        renderPetMutationSections();

    }
);


collapseAllButton?.addEventListener(
    "click",
    () => {

        state.expanded =
            [];


        saveState();

        renderMutationSections();

    }
);


petCollapseAllButton?.addEventListener(
    "click",
    () => {

        state.petExpanded =
            [];


        saveState();

        renderPetMutationSections();

    }
);


clearAllButton?.addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Clear all collected plant progress? This cannot be undone."
            );


        if (!confirmed) {
            return;
        }


        mutations.forEach(
            mutation => {

                state.collected[
                    mutation.id
                ] = [];

            }
        );


        saveState();

        renderMutationSections();

    }
);


petClearAllButton?.addEventListener(
    "click",
    () => {

        const confirmed =
            confirm(
                "Clear all collected pet progress? This cannot be undone."
            );


        if (!confirmed) {
            return;
        }


        petMutations.forEach(
            mutation => {

                state.petCollected[
                    mutation.id
                ] = [];

            }
        );


        saveState();

        renderPetMutationSections();

    }
);


function showTab(
    tabName
) {

    const showingPets =
        tabName ===
        "pets";


    state.selectedTab =
        showingPets
            ? "pets"
            : "plants";


    plantsTab.classList.toggle(
        "active",
        !showingPets
    );


    petsTab.classList.toggle(
        "active",
        showingPets
    );


    plantsView.classList.toggle(
        "hidden",
        showingPets
    );


    petsView.classList.toggle(
        "hidden",
        !showingPets
    );


    updateOverallProgress();

    saveState();

}


plantsTab?.addEventListener(
    "click",
    () => {

        showTab(
            "plants"
        );

    }
);


petsTab?.addEventListener(
    "click",
    () => {

        showTab(
            "pets"
        );

    }
);


function restoreTab() {

    showTab(

        state.selectedTab ===
        "pets"

            ? "pets"

            : "plants"

    );

}


async function startApp() {

    try {

        loadState();


        await Promise.all([

            loadPlants(),

            loadPets()

        ]);


        prepareCollectionData();


        completedToggle.textContent =
            state.hideCompleted
                ? "👁 Show Completed"
                : "👁 Hide Completed";


        if (
            petCompletedToggle
        ) {

            petCompletedToggle.textContent =
                state.petHideCompleted
                    ? "👁 Show Completed"
                    : "👁 Hide Completed";

        }


        renderMutationSections();

        renderPetMutationSections();

        restoreTab();

        saveState();


        console.log(
            `Garden Companion loaded ${plants.length} plants and ${pets.length} pets.`
        );

    } catch (error) {

        console.error(
            error
        );


        if (
            mutationList
        ) {

            mutationList.innerHTML = `

                <div class="no-results">

                    Could not load the collection databases.

                    <br><br>

                    Make sure you opened the website
                    using Live Server.

                </div>

            `;

        }


        if (
            petMutationList
        ) {

            petMutationList.innerHTML = `

                <div class="no-results">

                    Could not load the pet database.

                    <br><br>

                    Make sure data/pets.json exists
                    and Live Server is running.

                </div>

            `;

        }

    }

}


startApp();