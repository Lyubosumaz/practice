import PropTypes from "prop-types";

export default function SetTabsArray({ quantity, entitle, active, validation, errorMessage, images }) {
    let tabsArray = [];
    const affirmation = quantity >= validation[0] && quantity <= validation[1];
    const newData = affirmation ? quantity : errorMessage;

    switch (typeof newData) {
        case 'number':
            for (let index = 0; index < newData; index++) {
                tabsArray.push({ id: index, name: entitle[index], isActive: false });
                if (active === index) { tabsArray[index].isActive = true; }
                if (images) { tabsArray[index].image = images[index]; }
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
    quantity: PropTypes.number.isRequired,
    entitle: PropTypes.arrayOf(PropTypes.string).isRequired,
    active: PropTypes.number.isRequired,
    validation: PropTypes.array.isRequired,
    errorMessage: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string),
};