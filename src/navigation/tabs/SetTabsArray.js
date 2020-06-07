import PropTypes from "prop-types";
import tabs from './tabs.json';

export default function SetTabsArray({ numberOfTabs, activeTabIndex }) {
    let tabsArray = [];
    const validation = numberOfTabs >= 1 && numberOfTabs <= 4;
    const newData = validation ? numberOfTabs : tabs.errorMessage;

    switch (typeof newData) {
        case 'number':
            for (let index = 0; index < newData; index++) {
                activeTabIndex === index ?
                    tabsArray.push({ id: index, name: tabs.tabsTextSections[index], isActive: true })
                    :
                    tabsArray.push({ id: index, name: tabs.tabsTextSections[index], isActive: false });
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
};