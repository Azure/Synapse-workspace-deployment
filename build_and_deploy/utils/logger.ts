import * as core from '@actions/core';

export { ActionLogger, ILogger, SystemLogger };

// At some point this interface will be imported from common library
interface ILogger {
    info: (message: string) => string;
    warn: (message: string) => string;
    error: (message: any) => any;
    debug: (message: string) => string;
}

class SystemLogger {
    private static logger: ILogger | undefined = undefined;

    static setLogger(logger: ILogger | undefined): void {
        SystemLogger.logger = logger;
    }

    static info(message: string): string {
        SystemLogger.logger?.info(message);
        return message;
    }

    static warn(message: string): string {
        SystemLogger.logger?.warn(message);
        return message;
    }

    static error(message: string): string {
        SystemLogger.logger?.error(message);
        return message;
    }

    static debug(message: string): string {
        SystemLogger.logger?.debug(message);
        return message;
    }
}

class ActionLogger {
    private debugEnabled: boolean;

    constructor(debugEnabled: boolean) {
        this.debugEnabled = debugEnabled;
    }

    info(message: string): string {
        core.info(message);
        return message;
    }
    warn(message: string): string {
        core.warning(message);
        return message;
    }
    error(message: string): any {
        core.error(message);
        return message;
    }
    debug(message: string): any {
        if (this.debugEnabled) {
            core.debug(message);
        }
        return message;
    }
};