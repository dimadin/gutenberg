/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';

export const PREFERENCES_DEFAULTS = {
	insertUsage: {},
};

/**
 * The default editor settings
 *
 *  alignWide         boolean        Enable/Disable Wide/Full Alignments
 *  colors            Array          Palette colors
 *  fontSizes         Array          Available font sizes
 *  maxWidth          number         Max width to constraint resizing
 *  blockTypes        boolean|Array  Allowed block types
 *  hasFixedToolbar   boolean        Whether or not the editor toolbar is fixed
 */
export const EDITOR_SETTINGS_DEFAULTS = {
	alignWide: false,
	colors: [
		{
			name: __( 'pale pink' ),
			slug: 'pale-pink',
			color: '#f78da7',
		},
		{	name: __( 'vivid red' ),
			slug: 'vivid-red',
			color: '#cf2e2e',
		},
		{
			name: __( 'luminous vivid orange' ),
			slug: 'luminous-vivid-orange',
			color: '#ff6900',
		},
		{
			name: __( 'luminous vivid amber' ),
			slug: 'luminous-vivid-amber',
			color: '#fcb900',
		},
		{
			name: __( 'light green cyan' ),
			slug: 'light-green-cyan',
			color: '#7bdcb5',
		},
		{
			name: __( 'vivid green cyan' ),
			slug: 'vivid-green-cyan',
			color: '#00d084',
		},
		{
			name: __( 'pale cyan blue' ),
			slug: 'pale-cyan-blue',
			color: '#8ed1fc',
		},
		{
			name: __( 'vivid cyan blue' ),
			slug: 'vivid-cyan-blue',
			color: '#0693e3',
		},
		{
			name: __( 'very light gray' ),
			slug: 'very-light-gray',
			color: '#eeeeee',
		},
		{
			name: __( 'cyan bluish gray' ),
			slug: 'cyan-bluish-gray',
			color: '#abb8c3',
		},
		{
			name: __( 'very dark gray' ),
			slug: 'very-dark-gray',
			color: '#313131',
		},
	],

	fontSizes: [
		{
			name: _x( 'small', 'font size name' ),
			shortName: _x( 'S', 'font size short name' ),
			size: 14,
			slug: 'small',
		},
		{
			name: _x( 'regular', 'font size name' ),
			shortName: _x( 'M', 'font size short name' ),
			size: 16,
			slug: 'regular',
		},
		{
			name: _x( 'large', 'font size name' ),
			shortName: _x( 'L', 'font size short name' ),
			size: 36,
			slug: 'large',
		},
		{
			name: _x( 'larger', 'font size name' ),
			shortName: _x( 'XL', 'font size short name' ),
			size: 48,
			slug: 'larger',
		},
	],

	// This is current max width of the block inner area
	// It's used to constraint image resizing and this value could be overridden later by themes
	maxWidth: 580,

	// Allowed block types for the editor, defaulting to true (all supported).
	allowedBlockTypes: true,

	// Maximum upload size in bytes allowed for the site.
	maxUploadFileSize: 0,

	// List of allowed mime types and file extensions.
	allowedMimeTypes: null,
};
