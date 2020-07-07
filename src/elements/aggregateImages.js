import {
    faSearch, faCommentAlt,
    faAngleDown,
    faClock,
    faPrint,
    faSun,
    faAngleLeft,
    faAngleRight,
    faPen
} from '@fortawesome/free-solid-svg-icons';

export default function aggregateImages(fortawesomeName) {
    let icon;
    switch (fortawesomeName) {
        case "faSearch":
            icon = faSearch;
            break;
        case "faCommentAlt":
            icon = faCommentAlt;
            break;
        case "faAngleDown":
            icon = faAngleDown;
            break;
        case "faClock":
            icon = faClock;
            break;
        case "faPrint":
            icon = faPrint;
            break;
        case "faSun":
            icon = faSun;
            break;
        case "faAngleLeft":
            icon = faAngleLeft;
            break;
        case "faAngleRight":
            icon = faAngleRight;
            break;
        case "faPen":
            icon = faPen;
            break;
        default:
            break;
    }
    return icon;
}