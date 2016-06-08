import * as forms from 'forms';

var fields = forms.fields;
var validators = forms.validators;

export default function friendForm(request: any) {
    let options = {
        name: fields.string({ required: true })
    };

    return forms.create(options);
}
