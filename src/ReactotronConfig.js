import Reactotron, { asyncStorage } from 'reactotron-react-native';

Reactotron.configure({
	name: 'React Native Demo',
	host: '192.168.0.9',
})
	.useReactNative({
		asyncStorage: false, // there are more options to the async storage.
		networking: {
			// optionally, you can turn it off with false.
			ignoreUrls: /symbolicate/,
		},
		editor: false, // there are more options to editor
		errors: { veto: stackFrame => false }, // or turn it off with false
		overlay: false, // just turning off overlay
	})
	.connect()
	.use(asyncStorage());
