import {useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import IconButton from '@material-ui/core/IconButton';
import {useTranslation} from "react-i18next";


const useStyles = makeStyles(
    theme => ({
        removeButton: {},
        removeIcon: {
            color: theme.palette.error.main,
        },
    }),
    { name: 'RaFileInputPreview' }
);


export const FileInputPreview = props => {
    const {
        children,
        classes: classesOverride,
        className,
        onRemove,
        file,
        ...rest
    } = props;
    const {t} = useTranslation();
    const classes = useStyles(props);


    useEffect(() => {
        return () => {
            const preview = file.rawFile ? file.rawFile.preview : file.preview;

            if (preview) {
                window.URL.revokeObjectURL(preview);
            }
        };
    }, [file]);

    return (
        <div className={className} {...rest}>
            {/*<IconButton*/}
            {/*    className={classes.removeButton}*/}
            {/*    onClick={onRemove}*/}
            {/*    aria-label={'ra.action.delete'}*/}
            {/*    title={t('ra.action.delete')}*/}
            {/*>*/}
            {/*    <RemoveCircle*/}
            {/*        className={classes.removeIcon}*/}
            {/*    />*/}
            {/*</IconButton>*/}

            {children}
            <button type="button" className="btn-close formik-image-delete" onClick={onRemove} aria-label="Close"/>
        </div>
    );
};
