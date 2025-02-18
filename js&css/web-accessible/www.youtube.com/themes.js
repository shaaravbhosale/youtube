/*------------------------------------------------------------------------------
4.3.0 THEMES
------------------------------------------------------------------------------*/
ImprovedTube.myColors = function () {
	if (this.storage.theme === 'custom') {
		var style = this.elements.my_colors || document.createElement('style'),
			primary_color = this.storage.theme_primary_color,
			text_color = this.storage.theme_text_color,
			header_color = this.storage.theme_header_color;
		
		if (header_color) {
            header_color = 'rgb(' + header_color.join(',') + ')';
        } else {
            header_color = 'rgb(180, 180, 180)';
        }

		if (primary_color) {
			primary_color = 'rgb(' + primary_color.join(',') + ')';
		} else {
			// need better central place for storing default custom profile colors
			primary_color = 'rgb(200, 200, 200)';
		}

		if (text_color) {
			text_color = 'rgb(' + text_color.join(',') + ')';
		} else {
			// need better central place for storing default custom profile colors
			text_color = 'rgb(25, 25, 25)';
		}

		style.className = 'it-theme-editor';
		style.textContent = 'html, [dark] {' +
					'--yt-swatch-textbox-bg:rgba(19,19,19,1)!important;' +
					'--yt-swatch-icon-color:rgba(136,136,136,1)!important;' +
					'--yt-spec-brand-background-primary:' + header_color + '!important;' +
    				'--yt-spec-brand-background-secondary:' + header_color + '!important;' +
					'--yt-masthead-background:' + header_color + '!important;' +
    				'--yt-header-background:' + header_color + '!important;' +
					'--yt-spec-badge-chip-background:rgba(0, 0, 0, 0.05) !important;' +
					'--yt-spec-verified-badge-background:rgba(0, 0, 0, 0.15) !important;' +
					'--yt-spec-button-chip-background-hover:rgba(0, 0, 0, 0.10) !important;' +
					'--yt-spec-brand-button-background:rgba(136,136,136,1) !important;' +
					'--yt-spec-filled-button-focus-outline:rgba(0, 0, 0, 0.60) !important;' +
					'--yt-spec-call-to-action-button-focus-outline:rgba(0,0,0, 0.30) !important;' +
					'--yt-spec-brand-text-button-focus-outline:rgba(204, 0, 0, 0.30) !important;' +
					'--yt-spec-10-percent-layer:rgba(136,136,136,1) !important;' +
					'--yt-swatch-primary:' + primary_color + '!important;' +
					'--yt-swatch-primary-darker:' + primary_color + '!important;' +
					'--yt-spec-brand-background-solid:' + primary_color + '!important;' +
					'--yt-spec-general-background-a:' + primary_color + '!important;' +
					'--yt-spec-general-background-b:' + primary_color + '!important;' +
					'--yt-spec-general-background-c:' + primary_color + '!important;' +
					'--yt-spec-touch-response:' + primary_color + '!important;' +
					'--yt-swatch-text: ' + text_color + '!important;' +
					'--yt-swatch-important-text: ' + text_color + '!important;' +
					'--yt-swatch-input-text: ' + text_color + '!important;' +
					'--yt-swatch-logo-override: ' + text_color + '!important;' +
					'--yt-spec-text-primary:' + text_color + ' !important;' +
					'--yt-spec-text-primary-inverse:' + primary_color + ' !important;' +
					'--yt-spec-text-secondary:' + text_color + ' !important;' +
					'--yt-spec-text-disabled:' + text_color + ' !important;' +
					'--yt-spec-icon-active-other:' + text_color + ' !important;' +
					'--yt-spec-icon-inactive:' + text_color + ' !important;' +
					'--yt-spec-icon-disabled:' + text_color + ' !important;' +
					'--yt-spec-filled-button-text:' + text_color + ' !important;' +
					'--yt-spec-call-to-action-inverse:' + text_color + ' !important;' +
					'--yt-spec-brand-icon-active:' + text_color + ' !important;' +
					'--yt-spec-brand-icon-inactive:' + text_color + ' !important;' +
					'--yt-spec-brand-link-text:' + text_color + '!important;' +
					'--yt-spec-brand-subscribe-button-background:' + text_color + ' !important;' +
					'--yt-spec-wordmark-text:' + text_color + ' !important;' +
					'--yt-spec-selected-nav-text:' + text_color + ' !important;' +
					'--yt-spec-base-background:' + primary_color + '!important;' +
					'--yt-spec-raised-background:' + primary_color + '!important;' +
					'--yt-spec-menu-background:' + primary_color + '!important;' +
					'--yt-spec-inverted-background: #fff;' +
					'--ytd-searchbox-background:' + primary_color + '!important;' +
					'--ytd-searchbox-legacy-button-color:' + 'var(--yt-spec-brand-background-primary)' + '!important;' +
					'background-color: var(--yt-spec-base-background)!important;' +
					'.ytd-masthead {background-color:' + header_color + '!important;}' +
					'#masthead.ytd-app {background-color:' + header_color + '!important;}' +
					'ytd-masthead {background:' + header_color + '!important;}' +
					'#container.ytd-masthead {background-color:' + header_color + '!important;}' +
					'.style-scope.ytd-masthead {background-color:' + header_color + '!important;}' +
					'}';

		this.elements.my_colors = style;
		document.documentElement.appendChild(style);
		document.documentElement.removeAttribute('dark');
		document.querySelector('ytd-masthead')?.removeAttribute('dark');
		document.getElementById('cinematics')?.style.setProperty("display", "none");
	} else {
		this.elements.my_colors?.remove();
	}
}

ImprovedTube.setTheme = function () {
	switch (this.storage.theme) {
		case 'dark':
			document.documentElement.setAttribute('dark', '');
			document.querySelector('ytd-masthead')?.setAttribute('dark', '');
			ImprovedTube.setPrefCookieValueByName('f6', 400);
			// fall through
		case 'black':
			document.getElementById('cinematics')?.removeAttribute('style');
			this.elements.my_colors?.remove();
			break

		case 'light':
			ImprovedTube.messages.send({action: 'set', key: 'theme', value: null});
			ImprovedTube.setPrefCookieValueByName('f6', null);
			// fall through
		case 'dawn':
		case 'sunset':
		case 'night':
		case 'plain':
		case 'desert':
			document.documentElement.removeAttribute('dark');
			document.querySelector('ytd-masthead')?.removeAttribute('dark');
			document.getElementById('cinematics')?.style.setProperty('display', 'none');
			this.elements.my_colors?.remove();
			break

		case 'default':
			document.getElementById('cinematics')?.removeAttribute('style');
			this.elements.my_colors?.remove();
			break
	}
};
