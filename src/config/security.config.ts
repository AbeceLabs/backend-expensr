import * as Joi from 'joi';
import { securityDefaults } from './config.defaults';

export const securityConfigSchema = {
    JWT_SECRET: Joi.string().required(),
    JWT_EXPIRES_IN: Joi.number().default(securityDefaults.JWT_EXPIRES_IN),
};
