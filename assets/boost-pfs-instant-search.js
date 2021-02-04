// Override Settings
var boostPFSInstantSearchConfig = {
	search: {
		//suggestionMode: 'test',
		//suggestionStyle: 'style2',
		suggestionStyle2MainContainerSelector: '#shopify-section-header',
		suggestionMobileStyle: 'style2',
	}
};

//Set theme search mode to product only
window.theme.searchMode = 'product';

(function() {
	BoostPFS.inject(this);

	// Customize style of Suggestion box
	SearchInput.prototype.customizeInstantSearch = function () {
		var suggestionElement = this.$uiMenuElement;
		var searchElement = this.$element;
		var searchBoxId = this.id;
	};

	SearchInput.prototype.beforeBindEvents = function (id) {
		var id = this.id;
		if (id == Class.searchBox + '-0') {
			this.$element = removeThemeSearchEvent();
			this.instantSearchResult.$searchInputElement = this.$element;
		}
		recallThemeOnPageShowEvent();

		if (Utils.InstantSearch.isFullWidthMobile()) {
			jQ(id).removeAttr('autofocus');
			if (jQ(id).is(':focus')) {
				jQ(id).blur();
			}
		}
	};

	function removeThemeSearchEvent() {
		// Remove all events
		if (jQ('[name="q"]').length > 0) {
			var cloneSearchBar = jQ('[name="q"]:first').clone();
			jQ(cloneSearchBar).removeClass('Form__Input').addClass('Search__Input Heading');
			jQ('[name="q"]:first').replaceWith(cloneSearchBar);
			if (jQ('#Search').length > 0) {
				if (jQ('#Search').hasClass('Modal--fullScreen')) {
					jQ('#Search').attr("style", "height: 0px !important");
				}
				jQ('#Search .Search__Results').attr("style", "display: none !important");
			}

			// Rebuild click search icon event
			if (jQ('[data-action="toggle-search"]').length > 0) {
				jQ('[data-action="toggle-search"]').on('click', function () {
					setTimeout(function () {
						jQ('[name="q"]:first').focus();
					}, 500);
				})
			}
		}
		// disable page transition
		if (window.theme && window.theme.showPageTransition) {
			window.theme.showPageTransition = false;
		}
		return cloneSearchBar;
	}

	function recallThemeOnPageShowEvent() {
		// disable page transition
		var pageTransition = document.querySelector('.PageTransition');
		if (pageTransition) {
			pageTransition.style.visibility = 'visible';
			pageTransition.style.opacity = '0';
		}
		// refresh cart
		document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
			bubbles: true
		}));
	}
})();