export class StringUtils {
  public static format(format: string, ...args: unknown[]): string {
    if (format === undefined) {
      throw new Error('Format string cannot be null.');
    }

    let result: string = format;

    for (let index = 0; index < args.length; index++) {
      const pattern = new RegExp(`\\{${index}\\}`, 'gm');
      const value: string = args[index].toString();

      result = result.replace(pattern, value);
    }

    return result;
  }
}
