/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/05/28
 */


import React, {useCallback, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
// import {Field} from "formik";
import cn from "classnames";
import defaultImagePlaceholder from '../../assets/images/PlusCircle.png';
import path from 'path'
import AspectRatioImage from "@components/AspectRatioImage";


const AddImageIconWithCaption = (props) => {
    const {onClick, caption} = props
    return <div onClick={onClick}>

        <figure className="figure">
            <img src="/img/PlusCircle.png" className="center-block d-block mx-auto" alt=""/>
                <figcaption className="figure-caption text-center">{caption}</figcaption>
        </figure>
    </div>
}


export const ImageInputWithThumb = (props) => {
    let {value, basePath, onChange, imagePlaceholder, rounded = false, accept = 'image/png,image/jpeg,image/gif'} = props
    const [isHighlight, setIsHighlight] = useState(false);
    const [url, setUrl] = useState(value ? path.join(basePath + value)  : null);
    // const dropRef = useRef < HTMLDivElement > (null);
    // const inputRef = useRef < HTMLInputElement > (null);
    imagePlaceholder =  imagePlaceholder || defaultImagePlaceholder

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
                    // name,
                    value: file
                },
                event: e,
            });
        }
    }, [value, accept, onChange]);

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

    const placeholder='권장크기 - 이미지 400 x 400px'

    return (
        <div className="image-input-thumb d-flex justify-content-center align-items-center">
            <input className='image-input__input' type='file' ref={inputRef} onChange={handleChange}
                                           accept={accept}/>
            { url
                ? <AspectRatioImage src={url} ratio={1} />
                : <AddImageIconWithCaption onClick={handleControlClick} caption={placeholder}/>
            }
        </div>
    )
}
