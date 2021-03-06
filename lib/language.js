// Load modules


// Declare internals

var internals = {};


exports.errors = {
    root: 'value',
    any: {
        unknown: 'is not allowed',
        invalid: 'contains an invalid value',
        empty: 'is not allowed to be empty',
        required: 'is required',
        allowOnly: 'must be one of {{valids}}'
    },
    alternatives: {
        base: 'not matching any of the allowed alternatives'
    },
    array: {
        base: 'must be an array',
        includes: 'position {{pos}} does not match any of the allowed types',
        includesOne: 'position {{pos}} fails because {{reason}}',
        excludes: 'position {{pos}} contains an excluded value',
        min: 'must contain at least {{limit}} items',
        max: 'must contain less than or equal to {{limit}} items',
        length: 'must contain {{limit}} items'
    },
    boolean: {
        base: 'must be a boolean'
    },
    binary: {
        base: 'must be a buffer or a string',
        min: 'must be at least {{limit}} bytes',
        max: 'must be less than or equal to {{limit}} bytes',
        length: 'must be {{limit}} bytes'
    },
    date: {
        base: 'must be a number of milliseconds or valid date string',
        min: 'must be larger than or equal to {{limit}}',
        max: 'must be less than or equal to {{limit}}'
    },
    function: {
        base: 'must be a Function'
    },
    object: {
        base: 'must be an object',
        min: 'must have at least {{limit}} children',
        max: 'must have less than or equal to {{limit}} children',
        length: 'must have {{limit}} children',
        allowUnknown: 'is not allowed',
        with: 'missing required peer {{peer}}',
        without: 'conflict with forbidden peer {{peer}}',
        missing: 'must contain at least one of {{peers}}',
        xor: 'contains a conflict between exclusive peers {{peers}}',
        or: 'must contain at least one of {{peers}}',
        and: 'contains {{present}} without its required peers {{missing}}',
        assert: 'validation failed because {{ref}} failed to {{message}}',
        rename: {
            multiple: 'cannot rename child {{from}} because multiple renames are disabled and another key was already renamed to {{to}}',
            override: 'cannot rename child {{from}} because override is disabled and target {{to}} exists'
        }
    },
    number: {
        base: 'must be a number',
        min: 'must be larger than or equal to {{limit}}',
        max: 'must be less than or equal to {{limit}}',
        float: 'must be a float or double',
        integer: 'must be an integer',
        negative: 'must be a negative number',
        positive: 'must be a positive number',
        precision: 'must have no more then {{limit}} decimal places'
    },
    string: {
        base: 'must be a string',
        min: 'length must be at least {{limit}} characters long',
        max: 'length must be less than or equal to {{limit}} characters long',
        length: 'length must be {{limit}} characters long',
        alphanum: 'must only contain alpha-numeric characters',
        token: 'must only contain alpha-numeric and underscore characters',
        regex: 'fails to match the required pattern',
        email: 'must be a valid email',
        isoDate: 'must be a valid ISO 8601 date',
        guid: 'must be a valid GUID',
        hostname: 'must be a valid hostname',
        lowercase: 'must only contain lowercase characters',
        uppercase: 'must only contain uppercase characters',
        trim: 'must not have leading or trailing whitespace'
    }
};
