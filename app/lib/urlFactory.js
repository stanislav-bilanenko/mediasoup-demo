import config from '../../server/config';

let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId })
{
	const hostname = config.ws.host || window.location.hostname;
	const port = config.ws.port || protooPort;

	return `wss://${hostname}:${port}/?roomId=${roomId}&peerId=${peerId}`;
}
