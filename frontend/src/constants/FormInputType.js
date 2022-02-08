// Input Type
import DateTimePicker from "react-widgets/lib/DateTimePicker";
import React from "react";

export function convert(str) {
    var date = new Date(str),
        mnth = ("0" + (date.getMonth() + 1)).slice(-2),
        day = ("0" + date.getDate()).slice(-2);
    return [ day, mnth, date.getFullYear(),].join("-");
}

export const renderField = ({input, label, type, meta: {touched, error, warning}}) => {
    const className = `form-control form-control-sm ${error && touched ? 'is-invalid' : ''}`;
    return (
        <div className="form-group">
            <label className="text-sm">{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className={className} />
                {touched &&
                ((error && <span className="text-danger">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
};


// Date picker
export const renderDateTimePicker = ({label, input: {onChange, value}, showTime}) =>
    <div>
        <label className="text-sm">{label}</label>
        <DateTimePicker
            onChange={onChange}
            format="DD-MM-YYYY"
            time={showTime}
            value={!value ? null : new Date(value)}
            placeholder={label}
        />
    </div>;

// Text area type
export const renderTextArea = ({input, label, meta: {touched, error, warning}}) => {
    const className = `form-control form-control-sm ${error && touched ? 'is-invalid' : ''}`;
    return (
        <div>
            <label className="text-sm">{label}</label>
            <div>
                <textarea {...input} placeholder={label} rows="3" cols="40" className={className} />
                {touched && ((error && <span className="text-danger">{error}</span>) || (warning &&
                    <span>{warning}</span>))}
            </div>
        </div>
    )
};

// File Input type
export const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const FileInput = ({
                       input: {value: omitValue, onChange, label, onBlur, ...inputProps},
                       meta: {omitMeta, touched, error, warning},
                       ...props
                   }) => {
    const className = `form-control ${error && touched ? 'is-invalid' : ''}`;
    return (
        <div>
            <div className="form-group">
                <input
                    onChange={adaptFileEventToValue(onChange)}
                    onBlur={adaptFileEventToValue(onBlur)}
                    type="file"
                    {...props.input}
                    {...props}
                    className={className}
                />
                <small className="form-text text-muted">Please upload jpeg/img/png file format</small>
                {touched &&
                ((error && <span className="text-danger">{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </div>

    );
};