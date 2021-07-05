import winston from 'winston';

const logConfiguration = {
		'transports': [
			new winston.transports.Console(),
			new winston.transports.File({ filename: 'logs/stdout.log'})
		],
		'format': winston.format.combine(
			winston.format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss'}),
        	winston.format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`),
    	)
	}

const logger: winston.Logger = winston.createLogger(logConfiguration);

export default logger;