import { body } from 'express-validator';
import { dominiosPermitidos } from '../common/constants/constants';

 export const doctorValidator = () => { 
    return [
        body('tarjetaProf')
            .notEmpty()
            .withMessage('La tarjeta profesional es requerida'),

        body('documento')
            .notEmpty()
            .withMessage('El documento es requerido'),

        body('nombre')
            .notEmpty()
            .withMessage('El nombre es requerido'),

        body('apellido')
            .notEmpty()
            .withMessage('El apellido es requerido'),

        body('rol')
            .notEmpty()
            .isIn(['medico'])
            .withMessage('El rol es requerido y debe ser "doctor"'),

        body('email')
            .isEmail()
            .withMessage('Debe ser un correo electrónico válido')
            .custom(value => {
                const dominio = value.split('@')[1];
                if (!dominiosPermitidos.includes(dominio)) {
                    throw new Error('Dominio de correo no permitido');
                }
                return true;
            }),

        /* body('foto').optional()
            .isURL()
            .withMessage('La foto debe ser una URL válida'), */

        body('password')
            .isLength({ min: 8 })
            .withMessage('La contraseña debe tener al menos 8 caracteres')
            .matches(/\d/)
            .withMessage('La contraseña debe contener al menos un número')
            .matches(/[a-z]/)
            .withMessage('La contraseña debe contener al menos una letra minúscula')
            .matches(/[A-Z]/)
            .withMessage('La contraseña debe contener al menos una letra mayúscula')
            .matches(/[!@#$%^&*(),.?":{}|<>]/)
            .withMessage('La contraseña debe contener al menos un carácter especial'),
        
        body('valorCita')
        .notEmpty()
        .withMessage('El valor de la cita es requerido')
        .isNumeric()
        .withMessage('El valor de la cita debe ser numerico'),

        body('codigoEspc')
            .notEmpty()
            .withMessage('El código de especialidad es requerido')
            .isString()
            .withMessage('El código de especialidad debe ser una cadena de caracteres'),
    ];
};

export const validationUpdateProfile = () =>{
    return [
        body('tarjetaProf')
           .optional()
           .notEmpty()
           .withMessage('La tarjeta profesional es requerida'),

        body('documento')
           .optional()
           .notEmpty()
           .withMessage('El documento es requerido'),

        body('nombre')
           .optional()
           .notEmpty()
           .withMessage('El nombre es requerido'),

        body('apellido')
           .optional()
           .notEmpty()
           .withMessage('El apellido es requerido'),
        body('email')
           .isEmail()
           .withMessage('Debe ser un correo electrónico válido')
           .custom(value => {
               const dominio = value.split('@')[1];
               if (!dominiosPermitidos.includes(dominio)) {
                   throw new Error('Dominio de correo no permitido');
               }
               return true;
           }),
        body('valorCita')
            .notEmpty()
            .withMessage('El valor de la cita es requerido')
            .isNumeric()
            .withMessage('El valor de la cita debe ser numerico'),
    ]

}
