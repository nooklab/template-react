/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/28
 */


import React, {useCallback, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import cn from "classnames";
import defaultImagePlaceholder from '../../assets/images/image-placeholder.png';
import path from 'path'


export const ImageInputOld = (props) => {
    const {name, value, basePath, onChange, imagePlaceholder = defaultImagePlaceholder, rounded = false, accept = 'image/png,image/jpeg,image/gif'} = props
    const [isHighlight, setIsHighlight] = useState(false);
    const [url, setUrl] = useState(value ? path.join(basePath + value)  : null);
    // const dropRef = useRef < HTMLDivElement > (null);
    // const inputRef = useRef < HTMLInputElement > (null);

    const dropRef = useRef();
    const inputRef = useRef()
    const {t} = useTranslation();
    const uploadFiles = useCallback((files, e) => {
        const file = files[0];

        if (!file) {
            return;
        }

        if (file.type.indexOf('image') < 0) {
            throw new Error('ImageInput.imageOnly');
        } else if (accept.indexOf(file.type) < 0) {
            throw new Error('ImageInput.notAccepted')
        }

        const reader = new FileReader();

        reader.onload = r => {
            // @ts-ignore
            setUrl(r.target.result);
        };
        reader.readAsDataURL(file);

        if (onChange) {
            onChange({
                target: {
                    name,
                    value: file
                },
                event: e,
            });
        }
    }, [name, accept, onChange]);

    useEffect(() => {
        function highlight(e) {
            e.stopPropagation();
            e.preventDefault();
            setIsHighlight(true);
        }

        function unHighlight(e) {
            e.stopPropagation();
            e.preventDefault();
            setIsHighlight(false);
        }

        const current = dropRef.current
        if (current) {
            current.addEventListener('dragenter', highlight);
            current.addEventListener('dragover', highlight);
            current.addEventListener('dragleave', unHighlight);
            current.addEventListener('drop', unHighlight);
            current.addEventListener('drop', (e) => {
                uploadFiles(e.dataTransfer.files, e);
            });
        }
    }, [uploadFiles]);


    function handleChange(e) {
        if (e.target.files) {
            uploadFiles(e.target.files, e);
        }
    }

    function handleControlClick() {
        const current = inputRef.current
        if (current) {
            current.click();
        }
    }


    return <div className={cn('image-input', isHighlight && 'image-input--highlight')} ref={dropRef}>
        <div className={cn('image-input__thumbnail', rounded && 'image-input__thumbnail--rounded')}>
            <img src={url || imagePlaceholder} alt='upload'/>
        </div>

        <div className='image-input__control'>
            <input className='image-input__input' name={name} type='file' ref={inputRef} onChange={handleChange}
                   accept={accept}/>
            <button type='button' className='btn btn-secondary' onClick={handleControlClick}>
                {value ? t('ImageInput.update') : t('ImageInput.add')}
            </button>
        </div>
    </div>
}
