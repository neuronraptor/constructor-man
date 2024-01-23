import { MechException } from 'src/common-error/MechException';

export function assertNotNullUndefined(o: any, message: string) {
  if (o === null || o === undefined) {
    throw new MechException(message);
  }
}

export function assertNullUndefined(o: any, message: string) {
  if (!(o === null || o === undefined)) {
    throw new MechException(message);
  }
}

export function assertTrue(o: boolean, message: string) {
  if (!o) {
    throw new MechException(message);
  }
}
