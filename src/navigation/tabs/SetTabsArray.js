import tabs from './tabs.json';

export default function CreateBreadcrumbsButtons(props) {
    let tabsArray = [];
    if (typeof props.numberOfTabs === 'number') {
        for (let index = 0; index < props.numberOfTabs; index++) {
            if (props.images) {
                props.activeIndex === index ?
                    tabsArray.push({ id: index, name: tabs.tabsTextSections[index], image: props.images[index], isActive: true })
                    :
                    tabsArray.push({ id: index, name: tabs.tabsTextSections[index], image: props.images[index], isActive: false });
            } else {
                props.activeIndex === index ?
                    tabsArray.push({ id: index, name: tabs.tabsTextSections[index], isActive: true })
                    :
                    tabsArray.push({ id: index, name: tabs.tabsTextSections[index], isActive: false });
            }
        }
    } else if (typeof props.numberOfTabs === 'string') {
        tabsArray.push({ err: props.numberOfTabs });
    } else { console.error("Something went wrong in the SetBreadcrumbsArray"); }
    return tabsArray;
}