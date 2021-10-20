import { Platform } from 'react-native';

// TODO: Enhance logger to make it more standard
const logger = {
  debug: (...message: any) => {
    console.debug(`[${Platform.OS}]`, ...message);
  },
  error: (...message: any) => {
    console.error(`[${Platform.OS}]`, ...message);
  },
  info: (...message: any) => {
    console.info(`[${Platform.OS}]`, ...message);
  },
};

export default logger;
