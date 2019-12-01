const winston = require('winston');
require('winston-daily-rotate-file');

function createLogger(prefix) {
    var options = {
      file: {
        dirname: './log',
        filename: `${prefix}-%DATE%.log`,
        datePattern: 'YYYY-MM-DD', // only date
        zippedArchive: false,
        maxSize: '20m',
        maxFiles: '14d',
        format: winston.format.combine(
          winston.format.timestamp({
            format: 'HH:mm:ss'
          }),
          winston.format.simple(),
          winston.format.printf(info => `${info.timestamp} [${info.level}] ${info.message}`)
        )
      },
      console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: winston.format.combine(
          winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
          }),
          winston.format.simple(),
          winston.format.printf(info => `${info.timestamp} [${info.level}] ${info.message}`)
        )
      },
    };
  
    const loggerOptions = {
      transports: [
        new winston.transports.Console(options.console),
        new (winston.transports.DailyRotateFile)(options.file)
      ],
      exitOnError: false // do not exit on handled exceptions
    };
  
    const logger = winston.createLogger(loggerOptions);
    
    // create a stream object with a 'write' function that will be used by `morgan`
    logger.stream = {
      write: function(message, encoding) {
        // use the 'info' log level so the output will be picked up by both transports (file and console)
        logger.info(message);
      },
    };
    
    logger.options = loggerOptions;
    return logger;
}
  
module.exports = createLogger;