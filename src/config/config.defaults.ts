// Default configuration values
export const appDefaults = {
    APP_ENV: 'development',
    PORT: 3000,
    LOG_LEVEL: 'debug',
};

// Valid configuration values
export const appValidValues = {
    APP_ENV: ['development', 'production', 'test'] as const,
    LOG_LEVEL: ['debug', 'info', 'warn', 'error'] as const,
};

export const databaseDefaults = {
    DB_PORT: 5432,
};

export const securityDefaults = {
    JWT_EXPIRES_IN: 3600,
};
