import * as Joi from 'joi';
import { databaseDefaults } from './config.defaults';

export const databaseConfigSchema = {
    DB_CONNECTION: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().port().default(databaseDefaults.DB_PORT),
    DB_DATABASE: Joi.string().required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().required(),
};
