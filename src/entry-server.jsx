import ReactDomServer from 'react-dom/server';
import { App } from './App.jsx';

export async function render() {
	return ReactDomServer.renderToString(<App />);
}
