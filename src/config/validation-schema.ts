import * as Joi from 'joi';
import { appConfigSchema } from './app.config';
import { databaseConfigSchema } from './database.config';
import { securityConfigSchema } from './security.config';

export const validationSchema = Joi.object({
    ...appConfigSchema,
    ...databaseConfigSchema,
    ...securityConfigSchema,
});
