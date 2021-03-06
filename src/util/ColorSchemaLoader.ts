import { Configuration, Options } from './Types';

export default class ColorSchemaLoader
{
	public static load(config: Configuration, options: Options)
	{
		const colorSchema = config.colorSchemas[options.schema];
		if (!colorSchema)
			throw new Error(`Color schema not found: ${options.schema}`);
		return colorSchema;
	}
}
