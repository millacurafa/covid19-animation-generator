import { TimeSeries } from '../../util/Types';
import logger from '../../util/Logger';

interface ForceCodeParams
{
	name: string;
	code: string;
}

/**
 * Finds a series by the name and applies the forced code.
 * If no series is found, a warning is logged.
 */
export default class ForceCodePreProcessor
{
	public static async run(series: TimeSeries[], params: ForceCodeParams): Promise<TimeSeries[]>
	{
		const found = series.find(serie => serie.name === params.name);
		if (found)
			found.forceCode = params.code;
		else
			logger.warn(`Series not found: ${params.name}`);

		return series;
	}
}
