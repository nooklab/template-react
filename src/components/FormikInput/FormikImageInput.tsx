/**
 * Author : Bruce.Decent, the Sunbed Nomad
 * Date: 2021/08/14
 */
import {FormikFileInput} from "./FormikFileInput";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(
    theme => ({
        // root: { width: '100%' },
        dropZone: {
            background: theme.palette.background.default,
            cursor: 'pointer',
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.getContrastText(
                theme.palette.background.default
            ),
        },
        // preview: {
        //     display: 'inline-block',
        // },
        removeButton: {
            display: 'inline-block',
            position: 'relative',
            // float: 'left',
            '& button': {
                position: 'absolute',
                top: theme.spacing(1),
                right: theme.spacing(1),
                minWidth: theme.spacing(2),
                opacity: 0,
            },
            '&:hover button': {
                opacity: 1,
            },
        },
    }),
    { name: 'RaImageInput' }
);

export const FormikImageInput = (props) => {
    const classes = useStyles(props);

    return (
        <FormikFileInput
            labelMultiple="input.image.upload_several"
            labelSingle="input.image.upload_single"
            classes={classes}
            {...props}
        />
    );
};
