import * as Joi from 'joi';
import { appDefaults, appValidValues } from './config.defaults';

export const appConfigSchema = {
    APP_ENV: Joi.string()
        .valid(...appValidValues.APP_ENV)
        .default(appDefaults.APP_ENV),
    APP_NAME: Joi.string().required(),
    APP_URL: Joi.string().uri().required(),
    PORT: Joi.number().port().default(appDefaults.PORT),
    LOG_LEVEL: Joi.string()
        .valid(...appValidValues.LOG_LEVEL)
        .default(appDefaults.LOG_LEVEL),
};
