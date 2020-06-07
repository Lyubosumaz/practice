import PropTypes from "prop-types";

export default function SetTabsArray({ numberOfTabs, namesOfTabs, activeTabIndex, errorMessage, tabsImages }) {
    let tabsArray = [];
    const validation = numberOfTabs >= 1 && numberOfTabs <= 4;
    const newData = validation ? numberOfTabs : errorMessage;

    switch (typeof newData) {
        case 'number':
            for (let index = 0; index < newData; index++) {
                tabsArray.push({ id: index, name: namesOfTabs[index], isActive: false });
                if (activeTabIndex === index) { tabsArray[index].isActive = true; }
                if (tabsImages) { tabsArray[index].image = tabsImages[index]; }
            }
            break;
        case 'string':
            tabsArray.push({ err: newData });
            break;
        default:
            console.error("Something went wrong in the SetTabsArray");
            tabsArray.push({ err: newData });
            break;
    }

    return tabsArray;
}

SetTabsArray.propTypes = {
    numberOfTabs: PropTypes.number.isRequired,
    activeTabIndex: PropTypes.number.isRequired,
    namesOfTabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    errorMessage: PropTypes.string.isRequired,
    tabsImages: PropTypes.arrayOf(PropTypes.string),
};