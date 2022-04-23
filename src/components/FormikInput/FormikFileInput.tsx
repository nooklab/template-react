import {Field, getIn, connect} from "formik";
import {useDropzone, DropzoneOptions} from 'react-dropzone';
import React, {Children, cloneElement, isValidElement, ReactElement} from "react";
import {FileInputPreview} from "./FileInputPreview";
import {shallowEqual} from "react-redux";
import {makeStyles} from '@material-ui/core/styles';
import {useTranslation} from "react-i18next";
// import {FlexRow, FlexRowStart} from "@templates/Campaign/Common";


const useStyles = makeStyles(
    theme => ({
        dropZone: {
            background: theme.palette.background.default,
            cursor: 'pointer',
            // padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.getContrastText(
                theme.palette.background.default
            ),
        },
        preview: {},
        removeButton: {},
        // root: { width: '100%' },
    }),
    {name: 'RaFileInput'}
);

export interface FileInputOptions extends DropzoneOptions {
    inputProps?: any;
    onRemove?: Function;
}


export const FormikFileInput = connect((props: any) => {
    const {
        formik,
        name
    } = props
    const {
        accept,
        children,
        className,
        classes: classesOverride,
        format,
        helperText,
        label,
        labelMultiple = 'input.file.upload_several',
        labelSingle = 'input.file.upload_single',
        maxSize,
        minSize,
        multiple = false,
        options: {
            inputProps: inputPropsOptions,
            ...options
        } = {} as FileInputOptions,
        // parse,
        placeholder,
        resource,
        source,
        validate,
        ...rest
    } = props;

    const {handleChange, handleBlur} = formik

    const value = getIn(formik.values, name);
    const error = getIn(formik.errors, name);
    const touched = Boolean(getIn(formik.touched, name));
    // const showError = touched && !!error;
    const showError = !!error;

    const {t} = useTranslation();
    const classes = useStyles(props);

    // turn a browser dropped file structure into expected structure
    const transformFile = file => {
        if (!(file instanceof File)) {
            return file;
        }

        const {source, title} = (Children.only(children) as ReactElement<any>).props;

        const preview = URL.createObjectURL(file);
        const transformedFile = {
            rawFile: file,
            [source]: preview,
        };

        if (title) {
            transformedFile[title] = file.name;
        }

        return transformedFile;
    };

    const transformFiles = (files: any[]) => {
        if (!files) {
            return multiple ? [] : null;
        }

        if (Array.isArray(files)) {
            return files.map(transformFile);
        }

        return transformFile(files);
    };

    const onChange = (files) => {
        const transformed = format ? format(files) : transformFiles(files)
        formik.setFieldValue(name, transformed)
    }


    const files = value ? (Array.isArray(value) ? value : [value]) : [];

    const onDrop = (newFiles, rejectedFiles, event) => {
        const updatedFiles = multiple ? [...files, ...newFiles] : [...newFiles];

        if (multiple) {
            onChange(updatedFiles);
        } else {
            onChange(updatedFiles[0]);
        }

        if (options.onDrop) {
            options.onDrop(newFiles, rejectedFiles, event);
        }
    };

    const onRemove = file => () => {
        if (multiple) {
            const filteredFiles = files.filter(stateFile => !shallowEqual(stateFile, file));
            onChange(filteredFiles as any);
        } else {
            onChange(null);
        }

        if (options.onRemove) {
            options.onRemove(file);
        }
    };

    const childrenElement =
        children && isValidElement(Children.only(children))
            ? (Children.only(children) as ReactElement<any>)
            : undefined;

    const {getRootProps, getInputProps} = useDropzone({
        ...options,
        accept,
        maxSize,
        minSize,
        multiple,
        onDrop,
    });

    return (
        <>
            <div className="row justify-content-start">
                <div className={`col-2 ${classes.dropZone}`}
                     id={name}
                     {...getRootProps()}>
                    <input

                        data-cy={'image-input'}
                        {...getInputProps({
                            ...inputPropsOptions,
                        })}
                        onBlur={handleBlur}
                    />
                    {placeholder ? (
                        placeholder
                    ) : multiple ? (
                        <p>{t(labelMultiple)}</p>
                    ) : (
                        <p>{t(labelSingle)}</p>
                    )}

                </div>
                {children && files.map((file, index) => (
                        <div className={'col-2'} key={index}>
                            <FileInputPreview

                                file={file}
                                onRemove={onRemove(file)}
                                className={classes.removeButton}
                            >
                                {cloneElement(childrenElement, {
                                    record: file,
                                    className: classes.preview,
                                })}
                            </FileInputPreview>
                        </div>
                    )
                )}
            </div>

            {showError && <div className='invalid-feedback d-block'>
                {error}
            </div>}
        </>
    );
});
