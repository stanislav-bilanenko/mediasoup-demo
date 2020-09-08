import config from '../../server/config';

export function getProtooUrl({ roomId, peerId })
{
	const hostname = config.ws.host;
	const port = config.ws.port;

	return `wss://${hostname}${port ? `:${port}` : ''}/?roomId=${roomId}&peerId=${peerId}`;
}
