import React, { Fragment, useState } from 'react';

import { ReactComponent as Quit } from '../../../assets/images/inputs/quit.svg';

export default function Tag() {
    const buttonSVGStyles = { width: '12px', height: '12px' };
    const [newTag, setNewTag] = useState('');
    const [newTagArr, setNewTagArr] = useState([]);

    // TODO
    // function handleFocusInput(event) {
    //     event.preventDefault();
    //     console.log(event.currentTarget)
    // }

    function handleChange(event) {
        setNewTag(event.target.value);
    }

    function handleKeyDown(event) {
        if (event.keyCode === 13 && event.target.value !== '') {
            let alreadyExistingTag = false;
            for (const iterator of newTagArr) {
                if (iterator.name === newTag) { alreadyExistingTag = true; }
            }

            alreadyExistingTag
                ? setNewTagArr([...newTagArr, { name: newTag, class: 'red' }])
                : setNewTagArr([...newTagArr, { name: newTag, class: 'green' }]);

            setNewTag('');
            event.target.value = '';
            alreadyExistingTag = false;
        }
    }

    function handleRemoveTag(event) {
        event.preventDefault();
        event.currentTarget.parentNode.remove();
    }

    return (
        <Fragment>
            <div>
                <span className={`input-span`}>Tags</span>
                <div className="input-tag"
                // onMouseDown={event => handleFocusInput(event)}
                >
                    {newTagArr.map((tag, index) => (
                        <div key={index} className={`tag ${tag.class}`}>
                            <span className={`tag-name`}>{tag.name}</span>
                            <Quit className={`tag-svg`} style={buttonSVGStyles} onClick={event => handleRemoveTag(event)} />
                        </div>
                    ))}
                    <input className="main-input" onChange={handleChange} onKeyDown={handleKeyDown} />
                </div>
            </div>
        </Fragment >
    );
}